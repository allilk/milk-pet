<script>
    import { flip } from "svelte/animate";
    import { dndzone } from "svelte-dnd-action";
    import { Box } from "@svelteuidev/core";
    import Device from "svelte-device-info";

    import Modal from "./Modal.svelte";
    import BattleChip from "./BattleChip.svelte";
    import { writable } from "svelte/store";
    import { animations } from "../stores";

    export let items;
    export let manuallyAddToFolder;
    export let updateChipArrays;
    export let chipDesign;

    const opened = writable(false);
    const selectedMod = writable({});

    const flipDurationMs = 300;
    function handleDndConsider(e) {
        items = e.detail.items;
    }
    function handleDndFinalize(e) {
        items = e.detail.items;
        updateChipArrays(items);
    }
</script>

<Modal
    {opened}
    title={$selectedMod?.type === "players" ? "navichip" : "battlechip"}
>
    <Box css={{ display: "flex" }}>
        <BattleChip mod={$selectedMod} displayChipType={chipDesign} />
        <div class="battle-chip-modal-info">
            <div class="battle-chip-modal-title">
                {$selectedMod?.shortname || $selectedMod?.name || ""}
            </div>
            <hr />
            <div class="battle-chip-modal-body">
                {$selectedMod?.longDescription ||
                    $selectedMod?.description ||
                    ""}
                <div class="battle-chip-modal-body-footer">
                    {#if $selectedMod?.chipInformation?.damage}
                        dmg: <span> {$selectedMod.chipInformation.damage}</span>
                    {/if}
                    &nbsp;
                    {#if $selectedMod?.chipInformation?.codes}
                        codes: <span>
                            {$selectedMod.chipInformation.codes.join(" ")}</span
                        >
                    {/if}
                </div>
            </div>
            <hr class="bottom-hr" />
        </div>

        <div class="battle-chip-modal-footer">
            <small
                >created by: <span>
                    {$selectedMod?.author?.authorName}
                </span></small
            >
        </div>
    </Box>
</Modal>

<section
    use:dndzone={{
        items,
        dragDisabled: Device.isMobile,
        flipDurationMs: $animations ? flipDurationMs : undefined,
    }}
    on:consider={handleDndConsider}
    on:finalize={handleDndFinalize}
>
    {#each items as item (item.id)}
        <div
            class:no-animation={!$animations}
            animate:flip={{
                duration: flipDurationMs,
            }}
            on:dblclick={(ev) => {
                ev.preventDefault();
                if (!Device.isMobile) {
                    items = items.filter((itm) => itm.id !== item.id);
                    manuallyAddToFolder(item);
                } else {
                    selectedMod.set(item);
                    opened.set(true);
                }
            }}
            on:contextmenu={(ev) => {
                ev.preventDefault();
                if (!Device.isMobile) {
                    selectedMod.set(item);
                    opened.set(true);
                }
            }}
        >
            <BattleChip displayChipType={chipDesign} mod={item} />
        </div>
    {/each}
</section>

<style>
    section {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        padding-bottom: 10rem;
    }

    .no-animation {
        animation: none !important;
    }
</style>

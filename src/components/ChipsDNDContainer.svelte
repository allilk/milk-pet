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

<Modal {opened} title="battlechip">
    <Box css={{ display: "flex" }}>
        <BattleChip mod={$selectedMod} displayChipType={chipDesign} />
        <div class="battle-chip-modal-info">
            <div class="battle-chip-modal-title">
                {$selectedMod?.shortname || $selectedMod?.name || ""}
                <small
                    >created by: <span>
                        {$selectedMod?.author?.authorName}
                    </span></small
                >
            </div>
            <hr />
            <div class="battle-chip-modal-body">
                {$selectedMod?.longDescription ||
                    $selectedMod?.description ||
                    ""}
            </div>
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
            on:dblclick={(e) => {
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

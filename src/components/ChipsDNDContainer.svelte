<script>
    import { flip } from "svelte/animate";
    import { dndzone } from "svelte-dnd-action";
    import { Box } from "@svelteuidev/core";

    import Modal from "./Modal.svelte";
    import IntersectionObserver from "./IntersectionObserver.svelte";
    import BattleChip from "./BattleChip.svelte";
    import { writable } from "svelte/store";

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
                {$selectedMod?.attachment_data?.original_filename || ""}
            </div>
            <div class="battle-chip-modal-body">
                {$selectedMod?.data?.detail?.props?.long_description ||
                    $selectedMod?.data?.detail?.props?.description ||
                    $selectedMod?.data?.description ||
                    ""}
            </div>
        </div>
    </Box>
</Modal>

<section
    use:dndzone={{ items, flipDurationMs }}
    on:consider={handleDndConsider}
    on:finalize={handleDndFinalize}
>
    {#each items as item (item.id)}
        <div
            animate:flip={{ duration: flipDurationMs }}
            on:dblclick={(e) => {
                items = items.filter((itm) => itm.id !== item.id);
                manuallyAddToFolder(item);
            }}
        >
            <BattleChip
                displayChipType={chipDesign}
                mod={item}
                on:contextmenu={(ev) => {
                    ev.preventDefault();
                    selectedMod.set(item);
                    opened.set(true);
                }}
            />
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
</style>

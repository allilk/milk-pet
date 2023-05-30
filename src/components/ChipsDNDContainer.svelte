<script>
    import { flip } from "svelte/animate";
    import { dndzone } from "svelte-dnd-action";
    import Device from "svelte-device-info";

    import BattleChip from "./BattleChip.svelte";
    import { writable } from "svelte/store";
    import { animations, chipDesign } from "../stores";
    import BattleChipInfoModal from "./BattleChipInfoModal.svelte";

    export let items;
    export let manuallyAddToFolder;
    export let updateChipArrays;
    export let likeMod;
    export let disabledDrag = false;

    const selectedMod = writable({});
    const opened = writable(false);

    const flipDurationMs = 300;
    function handleDndConsider(e) {
        items = e.detail.items;
    }
    function handleDndFinalize(e) {
        items = e.detail.items;
        updateChipArrays(items);
    }
</script>

<BattleChipInfoModal {selectedMod} {opened} {likeMod} />

<section
    use:dndzone={{
        items,
        dragDisabled: Device.isMobile || disabledDrag,
        flipDurationMs: $animations ? flipDurationMs : undefined,
    }}
    on:consider={!disabledDrag ? handleDndConsider : () => {}}
    on:finalize={!disabledDrag ? handleDndFinalize : () => {}}
>
    {#each items as item (item.id)}
        <div
            class:no-animation={!$animations}
            animate:flip={{
                duration: flipDurationMs,
            }}
            on:dblclick={(ev) => {
                ev.preventDefault();
                if (!Device.isMobile && !disabledDrag) {
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
            <BattleChip displayChipType={$chipDesign} mod={item} />
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

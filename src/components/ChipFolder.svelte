<script>
    import { flip } from "svelte/animate";
    import { dndzone } from "svelte-dnd-action";
    import BattleChip from "./BattleChip.svelte";

    export let items;
    export let manuallyRemoveFromFolder;
    export let updateChipArrays;

    const flipDurationMs = 300;
    function handleDndConsider(e) {
        items = e.detail.items;
    }
    function handleDndFinalize(e) {
        items = e.detail.items;
        updateChipArrays(undefined, items);
    }
</script>

<section
    use:dndzone={{ items, flipDurationMs }}
    on:consider={handleDndConsider}
    on:finalize={handleDndFinalize}
>
    {#each items as item (item.id)}
        <div
            animate:flip={{ duration: flipDurationMs }}
            on:dblclick={() => {
                items = items.filter((itm) => itm.id !== item.id);
                manuallyRemoveFromFolder(item);
            }}
        >
            <BattleChip mod={item} />
        </div>
    {/each}
</section>

<style>
    section {
        padding: 0.3em;
        border: 1px solid rgb(0, 0, 0, 0.25);
        border-radius: 3px;
        overflow: scroll;
        width: 100%;
        height: 160px;
        position: absolute;
        bottom: 4rem;
        display: flex;
        flex-wrap: nowrap;
    }
    div {
        width: 110px;
        scale: 0.95;
    }
</style>

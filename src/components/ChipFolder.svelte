<script>
    import { flip } from "svelte/animate";
    import { dndzone } from "svelte-dnd-action";
    import BattleChip from "./BattleChip.svelte";
    import { Button } from "@svelteuidev/core";
    import FaSolidDownload from "svelte-icons-pack/fa/FaSolidDownload";
    import BsXLg from "svelte-icons-pack/bs/BsXLg";
    import Icon from "svelte-icons-pack";

    export let items;
    export let manuallyRemoveFromFolder;
    export let updateChipArrays;
    export let chipDesign;
    export let removeAllChipsFromFolder;

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
            <BattleChip mod={item} displayChipType={chipDesign} />
        </div>
    {/each}
</section>
<div class={`folder-buttons ${chipDesign}`}>
    <Button
        override={{
            backdropFilter: "blur(5px)",
            filter: "none",
            marginBottom: "0.5rem",
        }}
    >
        <Icon src={FaSolidDownload} color="white" size="16" />
    </Button>
    <Button
        override={{ backdropFilter: "blur(5px)", filter: "none" }}
        on:click={removeAllChipsFromFolder}
    >
        <Icon src={BsXLg} color="white" size="16" />
    </Button>
</div>

<style>
    section {
        padding: 0.3em;
        border-radius: 6px;
        overflow: scroll;
        width: 98%;
        position: absolute;
        bottom: -9rem;
        display: flex;
        flex-wrap: nowrap;
        background: var(--OverlayLightBlue);
        backdrop-filter: blur(6px);
        left: 0;
        z-index: 10;
        filter: drop-shadow(5px 3px 4px rgba(23, 126, 145, 1));
    }
    div {
        scale: 0.95;
    }
    .folder-buttons {
        position: absolute;
        right: 2rem;
        bottom: -3.5rem;
        z-index: 11;
    }
</style>

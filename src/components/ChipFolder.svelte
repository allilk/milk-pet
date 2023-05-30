<script>
    import { flip } from "svelte/animate";
    import { dndzone } from "svelte-dnd-action";
    import BattleChip from "./BattleChip.svelte";
    import { Button } from "@svelteuidev/core";
    import FaSolidDownload from "svelte-icons-pack/fa/FaSolidDownload";
    import AiFillStar from "svelte-icons-pack/ai/AiFillStar";
    import BsXLg from "svelte-icons-pack/bs/BsXLg";
    import Icon from "svelte-icons-pack";
    import { animations } from "../stores";
    import ConfirmCollectionCreateModal from "./ConfirmCollectionCreateModal.svelte";
    import { writable } from "svelte/store";
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";

    export let items;
    export let manuallyRemoveFromFolder;
    export let updateChipArrays;
    export let chipDesign;
    export let removeAllChipsFromFolder;
    export let zipAndDownloadMods;

    export const opened = writable(false);

    const flipDurationMs = 300;
    function handleDndConsider(e) {
        items = e.detail.items;
    }
    function handleDndFinalize(e) {
        items = e.detail.items;
        updateChipArrays(undefined, items);
    }

    const confirmSave = async (name) => {
        const modIds = items.map((mod) => mod.id);

        const response = await fetch("/api/mods/collections", {
            method: "POST",
            body: JSON.stringify({
                modIds,
                name,
            }),
        });

        const parsed = await response.json();

        goto(`/collections/${parsed.sharingId}`);

        opened.set(false);
    };
</script>

<ConfirmCollectionCreateModal {opened} {confirmSave} />

<section
    use:dndzone={{ items, flipDurationMs }}
    on:consider={handleDndConsider}
    on:finalize={handleDndFinalize}
>
    {#each items as item (item.id)}
        <div
            class:no-animation={!$animations}
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
    {#if $page.data.session}
        <Button
            override={{
                backdropFilter: "blur(5px)",
                filter: "none",
                marginBottom: "0.5rem",
            }}
            on:click={() => opened.set(true)}
        >
            <Icon src={AiFillStar} color="white" size="16" />
        </Button>
    {/if}
    <Button
        override={{
            backdropFilter: "blur(5px)",
            filter: "none",
            marginBottom: "0.5rem",
        }}
        on:click={zipAndDownloadMods}
    >
        <Icon src={FaSolidDownload} color="white" size="16" />
    </Button>
    <Button
        override={{
            backdropFilter: "blur(5px)",
            filter: "none",
        }}
        on:click={removeAllChipsFromFolder}
    >
        <Icon src={BsXLg} color="white" size="16" />
    </Button>
</div>

<style>
    section {
        padding: 0.3em;
        border-radius: 6px;
        overflow-y: hidden;
        width: 98%;
        position: absolute;
        bottom: -2rem;
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
        bottom: 1rem;
        z-index: 11;
    }
    .no-animation {
        animation: none !important;
    }
</style>

<script>
    import {
        Box,
        Container,
        Loader,
        NativeSelect,
        TextInput,
    } from "@svelteuidev/core";
    import { writable } from "svelte/store";
    import { chipDesign } from "../../stores";

    import ChipsDndContainer from "../../components/ChipsDNDContainer.svelte";
    import ChipFolder from "../../components/ChipFolder.svelte";

    export let data = {};
    const toNotDownloadChips = writable(
        Object.values(data.data).map((mod) => ({
            ...mod,
            id: mod._id,
        }))
    );
    const toDownloadChips = writable([]);
    const sortBy = writable("Name");
    const searchBy = writable("");

    const manuallyAddToFolder = (newItem) => {
        toNotDownloadChips.set(
            $toNotDownloadChips.filter((chip) => chip.id !== newItem.id)
        );
        toDownloadChips.set($toDownloadChips.concat([newItem]));
    };

    const manuallyRemoveFromFolder = (newItem) => {
        toDownloadChips.set(
            $toDownloadChips.filter((chip) => chip.id !== newItem.id)
        );
        toNotDownloadChips.set($toNotDownloadChips.concat([newItem]));
    };

    const removeAllChipsFromFolder = () => {
        toNotDownloadChips.set($toNotDownloadChips.concat($toDownloadChips));
        toDownloadChips.set([]);
    };

    const updateChipArrays = (
        toNotDownload = undefined,
        toDownload = undefined
    ) => {
        toDownload && toDownloadChips.set(toDownload);
        toNotDownload && toNotDownloadChips.set(toNotDownload);
    };

    $: console.log(data);
</script>

<Box css={{ display: "flex" }}>
    <TextInput
        placeholder="Chip Name"
        label="Chip Name"
        size="xs"
        class="custom-input"
        bind:value={$searchBy}
        override={{ fontSize: "0.85rem", width: "25%" }}
    />
    <NativeSelect
        data={["Name", "Date Uploaded", "Damage"]}
        placeholder="Sort By"
        label="Sort By"
        size="xs"
        class="custom-input"
        bind:value={$sortBy}
        override={{ fontSize: "0.85rem", width: "15%" }}
    />
</Box>
{#await $toNotDownloadChips}
    <Loader />
{:then modList}
    <div class="scroll-container">
        <ChipsDndContainer
            items={modList}
            otherItems={$toDownloadChips}
            {manuallyAddToFolder}
            {updateChipArrays}
            chipDesign={$chipDesign}
        />
    </div>
    {#if $toDownloadChips.length > 0}
        <ChipFolder
            chipDesign={$chipDesign}
            items={$toDownloadChips}
            {manuallyRemoveFromFolder}
            {updateChipArrays}
            {removeAllChipsFromFolder}
        />
    {/if}
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

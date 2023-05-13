<script>
    import { Box, Loader, NativeSelect, TextInput } from "@svelteuidev/core";
    import { writable } from "svelte/store";
    import { chipDesign } from "../../stores";
    import debounce from "lodash/debounce";

    import ChipsDndContainer from "../../components/ChipsDNDContainer.svelte";
    import ChipFolder from "../../components/ChipFolder.svelte";

    export let data = {};

    const toNotDownloadChips = writable(
        data.data.map((mod) => ({
            ...mod,
            id: mod._id,
        }))
    );

    let displayedData = $toNotDownloadChips || [];
    toNotDownloadChips.subscribe((value) => (displayedData = value));

    const toDownloadChips = writable([]);
    const sortBy = writable("Name");

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

    let searchBy = "";

    const onChangeSearchBy = debounce((e) => {
        searchBy = e.target.value;
    }, 300);

    $: displayedData = $toNotDownloadChips.filter((elem) =>
        elem.name.toLowerCase().includes(searchBy.toLowerCase())
    );
</script>

<Box css={{ display: "flex" }}>
    <TextInput
        placeholder="Chip Name"
        label="Chip Name"
        size="xs"
        class="custom-input chip-name-search no-select"
        on:input={onChangeSearchBy}
        override={{ fontSize: "0.85rem" }}
    />
    <NativeSelect
        data={["Name", "Date Uploaded", "Damage"]}
        placeholder="Sort By"
        label="Sort By"
        size="xs"
        class="custom-input sort-by-dropdown no-select"
        bind:value={$sortBy}
        override={{ fontSize: "0.85rem" }}
    />
</Box>
{#await displayedData}
    <Loader />
{:then modList}
    <div class="scroll-container">
        <ChipsDndContainer
            items={modList}
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

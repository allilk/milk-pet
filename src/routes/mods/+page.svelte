<script>
    import {
        Box,
        Button,
        Loader,
        NativeSelect,
        Progress,
        TextInput,
    } from "@svelteuidev/core";
    import { writable } from "svelte/store";
    import { chipDesign, toNotDownloadChips } from "../../stores";
    import debounce from "lodash/debounce";
    import { zipAndDownloadMods } from "../../helpers/zipAndDownloadMods";

    import ChipsDndContainer from "../../components/ChipsDNDContainer.svelte";
    import ChipFolder from "../../components/ChipFolder.svelte";
    import Modal from "../../components/Modal.svelte";
    import Icon from "svelte-icons-pack";
    import TiArrowSortedDown from "svelte-icons-pack/ti/TiArrowSortedDown";
    import TiArrowSortedUp from "svelte-icons-pack/ti/TiArrowSortedUp";
    import { onMount } from "svelte";

    export let data = {};
    toNotDownloadChips.set(data.data);

    let displayedData = $toNotDownloadChips || [];

    const toDownloadChips = writable([]);

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

    const openedModal = writable(false);
    const downloadProgress = writable(0);

    const updateChipArrays = (
        toNotDownload = undefined,
        toDownload = undefined
    ) => {
        toDownload && toDownloadChips.set(toDownload);
        toNotDownload && toNotDownloadChips.set(toNotDownload);
    };

    const onChangeSearchBy = debounce(
        (e) =>
            (displayedData = $toNotDownloadChips.filter((elem) =>
                elem.name.toLowerCase().includes(e.target.value.toLowerCase())
            )),
        300
    );

    let sortDirection = "down";
    let sortBy = "Name";

    const getSortEquation = (method, sortDirection, a, b) => {
        switch (method) {
            case "Name":
                a = a.name.toLowerCase();
                b = b.name.toLowerCase();

                return sortDirection === "down"
                    ? a < b
                        ? -1
                        : a > b
                        ? 1
                        : 0
                    : a > b
                    ? -1
                    : a < b
                    ? 1
                    : 0;
            case "Date Uploaded":
                return sortDirection === "down"
                    ? a.uploadedAt < b.uploadedAt
                        ? -1
                        : a.uploadedAt > b.uploadedAt
                        ? 1
                        : 0
                    : a.uploadedAt > b.uploadedAt
                    ? -1
                    : a.uploadedAt < b.uploadedAt
                    ? 1
                    : 0;
            case "Damage":
                a = a?.chipInformation?.damage || 0;
                b = b?.chipInformation?.damage || 0;

                return sortDirection === "down" ? b - a : a - b;
        }
    };

    const onChangeSortBy = () => {
        displayedData = displayedData.sort((a, b) =>
            getSortEquation(sortBy, sortDirection, a, b)
        );
    };

    onMount(onChangeSortBy);

    const likeMod = (userId, modId) =>
        fetch("/api/mods/like", {
            method: "POST",
            body: JSON.stringify({
                userId,
                modId,
            }),
        }).then(async (res) => {
            const { mod: newMod } = await res.json();

            toNotDownloadChips.set(
                $toNotDownloadChips.map((mod) =>
                    mod.id === modId ? { ...mod, likes: newMod.likes } : mod
                )
            );

            displayedData = displayedData.map((mod) =>
                mod.id === modId ? { ...mod, likes: newMod.likes } : mod
            );

            return newMod;
        });
</script>

<Modal opened={openedModal} title="download">
    <br />
    <br />
    <Progress
        value={$downloadProgress}
        label={`${$downloadProgress}%`}
        radius={2}
        size="lg"
    />
    <br />
    <br />
</Modal>

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
        bind:value={sortBy}
        on:change={onChangeSortBy}
        override={{ fontSize: "0.85rem", marginRight: "0" }}
    />
    <Button
        size="xs"
        on:click={() => {
            sortDirection = sortDirection === "down" ? "up" : "down";

            onChangeSortBy();
        }}
        override={{ marginTop: "0.55rem" }}
    >
        <Icon
            src={sortDirection === "down" ? TiArrowSortedDown : TiArrowSortedUp}
            color="white"
            size="16"
        />
    </Button>
</Box>
{#await displayedData}
    <Loader />
{:then modList}
    <div class="scroll-container">
        <ChipsDndContainer
            items={modList}
            {likeMod}
            {manuallyAddToFolder}
            {updateChipArrays}
        />
    </div>
    {#if $toDownloadChips.length > 0}
        <ChipFolder
            chipDesign={$chipDesign}
            items={$toDownloadChips}
            {manuallyRemoveFromFolder}
            {updateChipArrays}
            {removeAllChipsFromFolder}
            zipAndDownloadMods={() => {
                openedModal.set(true);
                zipAndDownloadMods($toDownloadChips, downloadProgress).then(
                    () => openedModal.set(false)
                );
            }}
        />
    {/if}
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

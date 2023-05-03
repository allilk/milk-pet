<script>
    import { Container, Loader } from "@svelteuidev/core";
    import { writable } from "svelte/store";

    import ChipsDndContainer from "../../components/ChipsDNDContainer.svelte";
    import ChipFolder from "../../components/ChipFolder.svelte";

    export let data = {};
    const toNotDownloadChips = writable(
        Object.values(data).map((mod) => ({
            ...mod,
            id: mod.attachment_data.attachment_id,
        }))
    );
    const toDownloadChips = writable([]);

    const manuallyAddToFolder = (newItem) => {
        toDownloadChips.set([
            ...$toDownloadChips.filter((chip) => chip.id !== newItem.id),
            newItem,
        ]);
    };
    const updateChipArrays = (
        toNotDownload = undefined,
        toDownload = undefined
    ) => {
        toDownload && toDownloadChips.set(toDownload);
        toNotDownload && toNotDownloadChips.set(toNotDownload);
    };

    const manuallyRemoveFromFolder = (newItem) =>
        toNotDownloadChips.set([
            ...$toNotDownloadChips.filter((chip) => chip.id !== newItem.id),
            newItem,
        ]);
</script>

<Container class="page-header">ONB Mods</Container>

{#await $toNotDownloadChips}
    <Loader />
{:then modList}
    <div class="scroll-container">
        <ChipsDndContainer
            items={modList.sort((a, b) =>
                b?.data?.type === "players" ? 1 : -1
            )}
            otherItems={$toDownloadChips}
            {manuallyAddToFolder}
            {updateChipArrays}
        />
        <ChipFolder
            items={$toDownloadChips}
            {manuallyRemoveFromFolder}
            {updateChipArrays}
        />
    </div>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

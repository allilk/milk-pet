<script>
    import { Container, Progress } from "@svelteuidev/core";
    import BattleChipCollection from "../../components/BattleChipCollection.svelte";
    import Modal from "../../components/Modal.svelte";
    import { writable } from "svelte/store";
    import { zipAndDownloadMods } from "../../helpers/zipAndDownloadMods";

    export let data;

    const openedModal = writable(false);
    const downloadProgress = writable(0);
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

<Container class="page-header">Collections</Container>

<div class="scroll-container">
    {#await data.data}
        Loading...
    {:then chipCollections}
        <section>
            {#each chipCollections as ction}
                <BattleChipCollection
                    chipCollection={ction}
                    downloadAllMods={(mods) => {
                        openedModal.set(true);
                        zipAndDownloadMods(ction.mods, downloadProgress).then(
                            () => openedModal.set(false)
                        );
                    }}
                />
            {/each}
        </section>
    {/await}
</div>

<style>
    section {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
    }
</style>

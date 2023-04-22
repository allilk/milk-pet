<script>
    import { Box, Center, Container, Grid, Loader } from "@svelteuidev/core";
    import { writable } from "svelte/store";
    import BattleChip from "../../components/BattleChip.svelte";
    import Modal from "../../components/Modal.svelte";

    export let data = {};

    const opened = writable(false);
    const selectedMod = writable({});
</script>

<Container class="page-header">ONB Mods</Container>

{#await data}
    <Loader />
{:then modList}
    <Modal {opened} title="battlechip">
        <Box css={{ display: "flex" }}>
            <BattleChip mod={$selectedMod} />
            <div class="battle-chip-modal-info">
                <div class="battle-chip-modal-title">
                    {$selectedMod?.attachment_data?.original_filename || ""}
                </div>
                <div class="battle-chip-modal-body">
                    {$selectedMod?.data?.detail?.props?.long_description || ""}
                </div>
            </div>
        </Box>
    </Modal>

    <Grid
        cols={22}
        override={{
            overflowY: "scroll",
            h: "82vh",
            overflowX: "hidden",
        }}
    >
        {#each Object.keys(modList) as modName}
            <Grid.Col xs={11} md={3} xl={2} override={{ flex: "0 0 33%" }}>
                <BattleChip
                    mod={modList[modName]}
                    on:click={(ev) => {
                        ev.preventDefault();
                        selectedMod.set(modList[modName]);
                        opened.set(true);
                    }}
                /></Grid.Col
            >
        {/each}
    </Grid>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

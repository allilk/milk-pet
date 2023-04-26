<script>
    import { Box, Center, Container, Loader } from "@svelteuidev/core";
    import { writable } from "svelte/store";
    import BattleChip from "../../components/BattleChip.svelte";
    import Modal from "../../components/Modal.svelte";
    import Grid from "svelte-grid-responsive";

    export let data = {}
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
                    {$selectedMod?.data?.detail?.props?.long_description ||
                        $selectedMod?.data?.detail?.props?.description ||
                        $selectedMod?.data?.description ||
                        ""}
                </div>
            </div>
        </Box>
    </Modal>

    <div class="scroll-container">
        <Grid container columns={24}>
            {#each Object.values(modList) as item}
                <Grid xs={12} sm={4} lg={3} xl={2}>
                    <BattleChip
                        mod={item}
                        on:click={(ev) => {
                            ev.preventDefault();
                            selectedMod.set(item);
                            opened.set(true);
                        }}
                    />
                </Grid>
            {/each}
        </Grid>
    </div>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

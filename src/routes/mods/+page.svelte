<script>
    import { Box, Grid, Loader } from "@svelteuidev/core";
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    import BattleChip from "../../components/BattleChip.svelte";
    import Modal from "../../components/Modal.svelte";
    import { modList } from "../../stores";

    const isLoading = writable(true);
    const endpoint = "https://www.keristero.xyz";

    onMount(async () => {
        if (Object.keys($modList).length === 0) {
            const response = await fetch(`${endpoint}/mod_list`);
            const data = await response.json();

            if (data) modList.set(data);
        }

        isLoading.set(false);
    });

    const opened = writable(false);
    const selectedMod = writable({});
</script>

{#if $isLoading}
    <Loader />
{:else}
    <Modal {opened}>
        <Box css={{ display: "flex" }}>
            <BattleChip mod={$selectedMod} />
            <div>
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
        {#each Object.keys($modList) as modName}
            <Grid.Col xs={10} lg={2}>
                <BattleChip
                    mod={$modList[modName]}
                    on:click={() => {
                        selectedMod.set($modList[modName]);
                        opened.set(true);
                    }}
                /></Grid.Col
            >
        {/each}
    </Grid>
{/if}

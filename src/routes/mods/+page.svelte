<script>
    import { MasonryInfiniteGrid } from "@egjs/svelte-infinitegrid";
    import { Box, Center, Container, Grid, Loader } from "@svelteuidev/core";
    import { writable } from "svelte/store";
    import BattleChip from "../../components/BattleChip.svelte";
    import Modal from "../../components/Modal.svelte";

    export let data = {};
    const opened = writable(false);
    const selectedMod = writable({});

    let items = getItems(0, 75);

    function getItems(nextGroupKey, count) {
        const nextItems = [];

        for (let i = 0; i < count; ++i) {
            const nextKey = nextGroupKey * count + i;

            nextItems.push({ groupKey: nextGroupKey, key: nextKey });
        }
        return nextItems;
    }
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

    <div id="scroll-container">
        <MasonryInfiniteGrid
            class="container"
            gap={3}
            {items}
            isConstantSize
            scrollContainer="#scroll-container"
            on:requestAppend={({ detail: e }) => {
                const nextGroupKey = (+e.groupKey || 0) + 1;
                const nextGroupOfItems = getItems(nextGroupKey, 75);

                const filteredGroupOfItems = nextGroupOfItems.filter(
                    (itemKey) =>
                        itemKey.key <= Object.values(modList).length - 1
                );

                items = [...items, ...filteredGroupOfItems];
            }}
            let:visibleItems
        >
            {#each visibleItems as item (item.key)}
                <div class="item">
                    <BattleChip
                        mod={Object.values(modList)[item.key]}
                        on:click={(ev) => {
                            ev.preventDefault();
                            selectedMod.set(Object.values(modList)[item.key]);
                            opened.set(true);
                        }}
                    />
                </div>
            {/each}
        </MasonryInfiniteGrid>
    </div>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

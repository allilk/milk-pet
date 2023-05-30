<script>
    import { Button, Container } from "@svelteuidev/core";
    import BattleChipCollection from "../../components/BattleChipCollection.svelte";

    export let data;
</script>

<Container class="page-header">Collections</Container>

{#await data.data}
    Loading...
{:then chipCollections}
    <section>
        {#each chipCollections as ction}
            <BattleChipCollection chipCollection={ction} />
        {/each}
    </section>
{/await}

<style>
    section {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
    }
</style>

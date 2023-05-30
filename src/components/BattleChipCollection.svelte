<script>
    import { Box, Button, Card, Space } from "@svelteuidev/core";
    import BattleChip from "./BattleChip.svelte";
    import { goto } from "$app/navigation";

    export let chipCollection = {};

    const firstThreeMods = chipCollection?.mods?.filter((mod, i) => i < 3);
</script>

<Card
    padding="sm"
    override={{
        height: "350px",
        width: "200px",
        margin: "0.5rem",
        background: "var(--OverlayLightBlue)",
        filter: "drop-shadow(9px 4px 3px rgba(23, 126, 145, 1))",
    }}
>
    <Card.Section
        first
        override={{ display: "flex" }}
        class="card-section-collection"
    >
        {#each firstThreeMods as mod}
            <BattleChip {mod} />
        {/each}
    </Card.Section>
    <Card.Section class="card-section-bottom">
        <Box
            css={{
                paddingBottom: "1rem",
                paddingTop: "2rem",
                textAlign: "center",
            }}
        >
            {chipCollection?.name || ""}
            <br />
            <small> created by: {chipCollection.createdBy.name}</small>
        </Box>
        <Button
            on:click={() => goto(`/collections/${chipCollection?.sharingId}`)}
            fullSize
        >
            View
        </Button>
    </Card.Section>
</Card>

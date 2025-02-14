<script>
    import {
        Box,
        Button,
        Center,
        Checkbox,
        Container,
        NativeSelect,
    } from "@svelteuidev/core";

    import { chipDesign, animations, bottomScreenDetails } from "../../stores";

    let layoutOptions = ["default", "progress"];
</script>

<Container class="custom-header" override={{}}>Settings</Container>
<br />

<Container
    class="custom-paragraph"
    override={{ height: "initial", marginTop: "-0.5rem !important", }}
>
    <Box css={{ marginBottom: "1rem" }}>
        <NativeSelect
            data={layoutOptions}
            placeholder="Select one.."
            label="Chip Design :"
            bind:value={$chipDesign}
            size="xs"
            class="custom-select"
            override={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "0.85rem",
            }}
        />
    </Box>
    <Box
        css={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.85rem",
            marginBottom: "1rem",
        }}
    >
        <div>Animations :</div>
        <Checkbox color="indigo" size="xs" bind:checked={$animations} />
    </Box>
    <Box
        css={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.85rem",
        }}
    >
        <div>Bottom Of Screen Details :</div>
        <Checkbox
            color="indigo"
            size="xs"
            bind:checked={$bottomScreenDetails}
        />
    </Box>
</Container>

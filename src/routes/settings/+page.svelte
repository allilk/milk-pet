<script>
    import {
        Box,
        Button,
        Center,
        Container,
        NativeSelect,
    } from "@svelteuidev/core";

    import { chipDesign } from "../../stores";

    let layoutOptions = ["default", "progress"];
</script>

<Container class="custom-header" override={{ width: "75%" }}>
    Settings
</Container>
<br />
<Center override={{ height: "80%", position: "relative" }}>
    <Box class="custom-paragraph">
        <div>
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
        </div>
    </Box>
</Center>

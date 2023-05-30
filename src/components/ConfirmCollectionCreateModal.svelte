<script>
    import {
        Button,
        Center,
        Space,
        Stack,
        Text,
        TextInput,
    } from "@svelteuidev/core";
    import Modal from "./Modal.svelte";

    export let opened;
    export let confirmSave;

    let name = "";
</script>

<Modal {opened} title="create collection">
    <Center override={{ height: "200px" }}>
        <Stack>
            <Space />
            <Text size="sm" color="white">
                Are you sure you want to create a collection with these mods?
            </Text>
            <Space />
            <TextInput
                size="xs"
                label="Collection Name: "
                placeholder="Collection Name"
                bind:value={name}
            />

            <Center>
                <Button
                    on:click={() => confirmSave(name)}
                    override={{ width: "50%" }}
                    disabled={!name}>Create</Button
                >
            </Center>
        </Stack>
    </Center>
</Modal>

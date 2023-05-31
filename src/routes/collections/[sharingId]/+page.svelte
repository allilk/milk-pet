<script>
    import { Affix, Button, Container, Progress } from "@svelteuidev/core";
    import ChipsDndContainer from "../../../components/ChipsDNDContainer.svelte";
    import { zipAndDownloadMods } from "../../../helpers/zipAndDownloadMods";
    import Modal from "../../../components/Modal.svelte";
    import { writable } from "svelte/store";
    import { onMount } from "svelte";

    export let data;

    const downloadProgress = writable(0);
    const openedModal = writable(false);

    const likeMod = (userId, modId) =>
        fetch("/api/mods/like", {
            method: "POST",
            body: JSON.stringify({
                userId,
                modId,
            }),
        }).then(async (res) => {
            const { mod: newMod } = await res.json();

            data.data.mods = data.data.mods.map((mod) =>
                mod.id === modId ? { ...mod, likes: newMod.likes } : mod
            );

            return newMod;
        });

    const getCountOfModTypes = () => {
        let occurrences = {};

        data.data.mods.forEach((mod) => {
            occurrences[mod.type] = occurrences?.[mod.type] + 1 || 1;
        });

        return Object.entries(occurrences)
            .map(([key, value]) => `${value} ${key}(s)`)
            .join(", ");
    };

    const typeOccurences = getCountOfModTypes();
</script>

<svelte:head>
    <title>{data?.data?.name}</title>
    <meta name="author" content={data?.data?.createdBy.name} />
    <meta name="description" content={typeOccurences} />
</svelte:head>

<Container class="page-header">{data?.data?.name}</Container>

<div class="scroll-container">
    <ChipsDndContainer items={data?.data?.mods} disabledDrag {likeMod} />
</div>

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

<Affix
    override={{
        transform: "translate(-50%, -50%)",
        left: "50%",
        bottom: "3rem",
        zIndex: 10,
        display: "flex",
        justifyContent: "center",
    }}
>
    <Button
        size="sm"
        on:click={() => {
            openedModal.set(true);
            zipAndDownloadMods(data?.data?.mods, downloadProgress).then(() =>
                openedModal.set(false)
            );
        }}>Download All</Button
    >
</Affix>

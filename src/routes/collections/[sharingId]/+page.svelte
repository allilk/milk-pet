<script>
    import { Container } from "@svelteuidev/core";
    import ChipsDndContainer from "../../../components/ChipsDNDContainer.svelte";

    export let data;

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
</script>

<Container class="page-header">{data?.data?.name}</Container>

<div class="scroll-container">
    <ChipsDndContainer items={data?.data?.mods} disabledDrag {likeMod} />
</div>

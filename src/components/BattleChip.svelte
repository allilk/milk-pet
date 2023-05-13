<script>
    import { FastAverageColor } from "fast-average-color";
    import { onMount } from "svelte";
    import { lazyLoad } from "../helpers/lazyLoad";
    import { dndVirtualization } from "../helpers/dndVirtualization";

    export let mod = {};
    export let displayChipType = "";

    const src = mod?.filePaths?.preview || "nodata.png";
    const chipTitle = mod?.shortname || mod?.name;
    const chipType = mod?.type;
    const chipNumber = "000";
    const chipElement = mod?.chipInformation?.element?.toLowerCase() || "none";

    let battleChipContainer;
    let imgTag;

    const fac = new FastAverageColor();

    onMount(() => {
        src !== "nodata.png" &&
            chipType === "players" &&
            fac
                .getColorAsync(src, {
                    ignoredColor: [
                        [255, 255, 255, 255],
                        [0, 0, 0, 0, 15],
                        [0, 0, 0, 255],
                    ],
                    algorithm: "dominant",
                })
                .then((color) => {
                    battleChipContainer.style.backgroundColor = color.rgb;
                    imgTag.style.backgroundColor = color.rgb;
                })
                .catch(() => {});
    });

    let isVisible = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    class={`battle-chip ${displayChipType} ${chipType}`}
    on:click
    on:contextmenu
    bind:this={battleChipContainer}
    on:dndVirtualization={(event) => (isVisible = event.detail)}
    use:dndVirtualization
>
    {#if isVisible}
        <div class="battle-chip-label">
            <div>
                <div class="battle-chip-inner-label">
                    <div class="battle-chip-label-inner-container">
                        <div>
                            <div>
                                <div class="battle-chip-label-text">
                                    <i
                                        >{chipType === "players"
                                            ? "NAVI"
                                            : "BATTLE"} CHIP</i
                                    >
                                </div>
                                <div class={"img-container"} bind:this={imgTag}>
                                    <img
                                        use:lazyLoad={`${src}?w=56&format=webp&srcset`}
                                        alt=""
                                        draggable="false"
                                        decoding="async"
                                        type="image/webp"
                                        on:error={(e) =>
                                            (e.target.src = "nodata.png")}
                                    />
                                </div>
                                <div class="battle-chip-label-title">
                                    {#if chipType !== "players"}
                                        <img
                                            src={`/mods/element_icons/${chipElement}.png`}
                                            alt=""
                                            width="11px"
                                            height="11px"
                                        />
                                    {/if}
                                    <i>
                                        {chipTitle}
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="battle-chip-left-detail">&nbsp;</div>
        <div class="battle-chip-top-left-detail">&nbsp;</div>
        <div class="battle-chip-bottom-detail">{chipNumber}</div>
        <div class="battle-chip-contacts">&nbsp;</div>
    {/if}
</div>

<style>
    .players .battle-chip-label-title {
        text-align: center;
    }

    img {
        image-rendering: crisp-edges;
    }
    .players img {
        image-rendering: initial;
    }
</style>

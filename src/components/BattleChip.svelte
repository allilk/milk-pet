<script>
    import { FastAverageColor } from "fast-average-color";
    import { onMount } from "svelte";
    import { lazyLoad } from "../helpers/lazyLoad";
    import { dndVirtualization } from "../helpers/dndVirtualization";

    export let mod = {};
    export let displayChipType = "";
    const endpoint = "https://www.keristero.xyz";

    const src = mod?.data?.detail?.preview
        ? `${endpoint}/${mod?.data?.detail?.preview}`
        : "nodata.png";
    const chipTitle =
        mod?.data?.detail?.props?.shortname ||
        mod?.data?.name ||
        mod?.attachment_data?.thread_name.match(/(?:\[.+\]) *(.+)$/)[1] ||
        "Roll";
    const chipType = mod?.data?.type;
    const chipNumber = "000";

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
                });
    });

    let isVisible = false;

    $: console.log({ isVisible });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    class={`battle-chip ${displayChipType}`}
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
                                    <img use:lazyLoad={src} alt="" />
                                </div>
                                <div class="battle-chip-label-title">
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

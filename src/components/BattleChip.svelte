<script>
    import { FastAverageColor } from "fast-average-color";
    import { onMount } from "svelte";

    export let mod = {};
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

    let imgTag;

    const fac = new FastAverageColor();

    onMount(() => {
        src !== "nodata.png" &&
            chipType === "players" &&
            fac
                .getColorAsync(src, {
                    ignoredColor: [
                        [255, 255, 255, 255],
                        [0, 0, 0, 255, 15],
                    ],
                    algorithm: "dominant",
                })
                .then((color) => {
                    imgTag.style.backgroundColor = color.rgb;
                });
    });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="battle-chip" on:click on:contextmenu>
    <div class="battle-chip-label">
        <div class="battle-chip-inner-label">
            <div class="battle-chip-label-text">
                <i>{chipType === "players" ? "NAVI" : "BATTLE"} CHIP</i>
            </div>
            <div class={"img-container"} bind:this={imgTag}>
                <img {src} alt="" />
            </div>
            <div class="battle-chip-label-title">
                <i>
                    {chipTitle}
                </i>
            </div>
        </div>
    </div>
    <div class="battle-chip-left-detail">&nbsp;</div>
    <div class="battle-chip-top-left-detail">&nbsp;</div>
    <div class="battle-chip-bottom-detail">{chipNumber}</div>
    <div class="battle-chip-contacts">&nbsp;</div>
</div>

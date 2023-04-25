<script>
    export let mod = {};
    const endpoint = "https://www.keristero.xyz";

    export let src = mod?.data?.detail?.preview
        ? `${endpoint}/${mod?.data?.detail?.preview}`
        : "nodata.png";
    export let chipTitle =
        mod?.data?.detail?.props?.shortname ||
        mod?.data?.name ||
        mod?.attachment_data?.thread_name.match(/(?:\[.+\]) *(.+)$/)[1] ||
        "Roll";

    export let chipNumber = "000";
    console.log(mod);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="battle-chip" on:click on:contextmenu>
    <div class="battle-chip-label">
        <div class="battle-chip-inner-label">
            <div class="battle-chip-label-text"><i>BATTLE CHIP</i></div>
            <img {src} alt="" />
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

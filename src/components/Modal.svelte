<script>
    import { Modal } from "@svelteuidev/core";
    import Device from "svelte-device-info";

    export let opened;
    export let title = "";
</script>

<Modal
    opened={$opened}
    on:close={() => opened.set(false)}
    {title}
    overlayOpacity={0.1}
    overlayColor="silver"
    class="custom-modal"
    withCloseButton={false}
    centered
    size={"lg"}
>
    <div class="modal-second-inner">
        <slot />
    </div>
</Modal>

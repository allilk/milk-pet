<script>
    import { Modal } from "@svelteuidev/core";

    export let opened;
</script>

<Modal
    opened={$opened}
    on:close={() => opened.set(false)}
    title=""
    overlayOpacity={0.1}
    overlayBlur={1}
    overlayColor="silver"
    class="custom-modal"
    withCloseButton={false}
    centered
    size="sm"
>
    <div class="modal-second-inner">
        <slot />
    </div>
</Modal>

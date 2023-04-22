<script>
    import { ShellSection, Stack } from "@svelteuidev/core";
    import { ActionIcon } from "@svelteuidev/core";
    import Icon from "svelte-icons-pack/Icon.svelte";
    import IoMail from "svelte-icons-pack/io/IoMail";
    import IoPerson from "svelte-icons-pack/io/IoPerson";
    import IoBookOutline from "svelte-icons-pack/io/IoBookOutline";
    import BsUsbPlugFill from "svelte-icons-pack/bs/BsUsbPlugFill";
    import IoCube from "svelte-icons-pack/io/IoCube";
    import { goto } from "$app/navigation";
</script>

<Stack class="right-sidebar-container">
    <ActionIcon class="sidebar-icon" on:click={() => goto("/mods")}>
        <Icon src={IoCube} color="white" size="16" />
    </ActionIcon>
    <ActionIcon class="sidebar-icon">
        <Icon src={IoMail} color="white" size="16" />
    </ActionIcon>
    <ActionIcon class="sidebar-icon">
        <Icon src={BsUsbPlugFill} color="white" size="16" />
    </ActionIcon>
    <ActionIcon class="sidebar-icon">
        <Icon src={IoPerson} color="white" size="16" />
    </ActionIcon>
    <ActionIcon class="sidebar-icon">
        <Icon src={IoBookOutline} color="white" size="16" />
    </ActionIcon>
</Stack>

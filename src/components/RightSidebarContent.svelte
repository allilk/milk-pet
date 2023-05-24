<script>
    import { Stack } from "@svelteuidev/core";
    import { ActionIcon } from "@svelteuidev/core";
    import Icon from "svelte-icons-pack/Icon.svelte";
    import IoMail from "svelte-icons-pack/io/IoMail";
    import IoPerson from "svelte-icons-pack/io/IoPerson";
    import IoBookOutline from "svelte-icons-pack/io/IoBookOutline";
    import IoCube from "svelte-icons-pack/io/IoCube";
    import IoSettingsOutline from "svelte-icons-pack/io/IoSettingsOutline";
    import { goto } from "$app/navigation";
    import LoginModal from "./LoginModal.svelte";
    import { writable } from "svelte/store";

    const opened = writable(false);
</script>

<LoginModal {opened} />

<Stack class="right-sidebar-container">
    <ActionIcon class="sidebar-icon" on:click={() => goto("/mods")}>
        <Icon src={IoCube} color="white" size="16" />
    </ActionIcon>
    <ActionIcon class="sidebar-icon" on:click={() => goto("/chip-library")}>
        <Icon src={IoBookOutline} color="white" size="16" />
    </ActionIcon>
    <ActionIcon class="sidebar-icon" on:click={() => goto("/news")}>
        <Icon src={IoMail} color="white" size="16" />
    </ActionIcon>
    <ActionIcon class="sidebar-icon" on:click={() => opened.set(true)}>
        <Icon src={IoPerson} color="white" size="16" />
    </ActionIcon>
    <ActionIcon class="sidebar-icon" on:click={() => goto("/settings")}>
        <Icon src={IoSettingsOutline} color="white" size="16" />
    </ActionIcon>
</Stack>

<script>
    import {
        AppShell,
        Header,
        Container,
        SvelteUIProvider,
    } from "@svelteuidev/core";
    import HeadContent from "../components/HeadContent.svelte";
    import RightSidebarContent from "../components/RightSidebarContent.svelte";
    import LeftSidebarContent from "../components/LeftSidebarContent.svelte";
    import FooterContent from "../components/FooterContent.svelte";
    import MarqueeTextWidget from "svelte-marquee-text-widget";

    import { bottomScreenDetails } from "../stores";
</script>

<svelte:head>
    <title>MILK-PET</title>
    <meta
        name="description"
        content="MILK-PET is a fan site that visually mimics the PET from the MegaMan NT Warrior and Battle Network series."
    />
</svelte:head>
<SvelteUIProvider>
    <AppShell
        class="parent-container"
        override={{
            position: "relative",
        }}
    >
        <Header slot="header" class="header-container">
            <HeadContent />
        </Header>
        <Container fluid class="body-container">
            <div class="body-background">&nbsp;</div>
            <div>
                <slot />
            </div></Container
        >
        <LeftSidebarContent />
        <div class="top-left-overlay-detail-container">
            <div class="top-left-overlay-detail">&nbsp;</div>
        </div>
        <RightSidebarContent />
        <FooterContent />
        {#if $bottomScreenDetails}
            <div class="bottom-right-screen-detail-container">
                <div class="bottom-right-screen-detail">&nbsp;</div>
            </div>
        {/if}
        <div class="marquee-text no-select">
            <MarqueeTextWidget duration={1} repeat={30}
                >return&nbsp;&nbsp;&nbsp;</MarqueeTextWidget
            >
        </div>
    </AppShell>
</SvelteUIProvider>

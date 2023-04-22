<script>
    import {
        AppShell,
        Navbar,
        Header,
        Aside,
        Footer,
        ShellSection,
        Container,
        SvelteUIProvider,
    } from "@svelteuidev/core";
    import HeadContent from "../components/HeadContent.svelte";
    import RightSidebarContent from "../components/RightSidebarContent.svelte";
    import LeftSidebarContent from "../components/LeftSidebarContent.svelte";
</script>

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
        <Container fluid class="body-container"
            ><div>
                <slot />
            </div></Container
        >
        <LeftSidebarContent />
        <RightSidebarContent />
    </AppShell>
</SvelteUIProvider>

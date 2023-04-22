<script>
    import { Container, Box } from "@svelteuidev/core";
    import { goto } from "$app/navigation";
</script>

<Container size="xl" class="topbar-container">
    <Box class="topbar" on:click={() => goto("/")}><i>MILK-PET</i></Box>
</Container>

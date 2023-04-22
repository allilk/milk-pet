<script>
    import { Button, Container } from "@svelteuidev/core";
    import Modal from "../components/Modal.svelte";
    import { writable } from "svelte/store";
    import BattleChip from "../components/BattleChip.svelte";

    const opened = writable(false);
</script>

<Modal {opened}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Modal
>

<Button on:click={() => opened.set(true)}>test button</Button>

<!-- <Container override={{ display: "flex" }}>
    <BattleChip />
    <BattleChip />
    <BattleChip />
</Container> -->

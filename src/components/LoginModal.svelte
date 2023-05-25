<script>
    import { Button, Center, Stack } from "@svelteuidev/core";
    import Modal from "./Modal.svelte";

    import { signIn, signOut } from "@auth/sveltekit/client";
    import { page } from "$app/stores";

    export let opened;
</script>

<Modal {opened} title="login">
    <Center override={{ height: "200px" }}>
        <Stack>
            {#if $page.data.session}
                <div class="signedInText">
                    <small>Signed in as</small>
                    {#if $page.data.session.user?.image}
                        <img
                            src={$page.data.session.user.image}
                            alt=""
                            width="25px"
                            height="25px"
                        />
                    {/if}<strong
                        >{$page.data.session.user?.name ?? "User"}</strong
                    >
                </div>

                <Button on:click={() => signOut()}>Sign out</Button>
            {:else}
                <span class="notSignedInText">You are not signed in</span>
                <Button on:click={() => signIn("discord")}
                    >Sign In with Discord</Button
                >
            {/if}
        </Stack>
    </Center>
</Modal>

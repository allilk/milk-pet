<script>
  import Modal from "./Modal.svelte";
  import { Box, Button } from "@svelteuidev/core";
  import { page } from "$app/stores";
  import BattleChip from "./BattleChip.svelte";
  import { chipDesign } from "../stores";

  const loggedInUser = $page.data.session?.user;

  export let selectedMod;
  export let opened;
  export let likeMod;
</script>

<Modal
  {opened}
  title={$selectedMod?.type === "players" ? "navichip" : "battlechip"}
>
  <Box css={{ display: "flex" }}>
    <Box css={{ display: "flex", flexDirection: "column" }}>
      <BattleChip mod={$selectedMod} displayChipType={$chipDesign} />
      {#if loggedInUser}
        <Button
          size="xs"
          override={{ marginTop: "0.25rem" }}
          on:click={() =>
            likeMod(loggedInUser.id, $selectedMod.id).then((updatedMod) =>
              selectedMod.set(updatedMod)
            )}>Like</Button
        >
      {/if}
    </Box>
    <div class="battle-chip-modal-info">
      <div class="battle-chip-modal-title">
        {$selectedMod?.shortname || $selectedMod?.name || ""}
      </div>
      <hr />
      <div class="battle-chip-modal-body">
        {$selectedMod?.longDescription || $selectedMod?.description || ""}
        <div class="battle-chip-modal-body-footer">
          Likes: <span>{$selectedMod?.likes.length || 0}</span>
          &nbsp;
          {#if $selectedMod?.chipInformation?.damage}
            dmg: <span> {$selectedMod.chipInformation.damage}</span>
          {/if}
          &nbsp;
          {#if $selectedMod?.chipInformation?.codes}
            codes: <span> {$selectedMod.chipInformation.codes.join(" ")}</span>
          {/if}
        </div>
      </div>
      <hr class="bottom-hr" />
    </div>

    <div class="battle-chip-modal-footer">
      <small
        >created by: <span>
          {$selectedMod?.author?.authorName}
        </span></small
      >
    </div>
  </Box>
</Modal>

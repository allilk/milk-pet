<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import BattleChip from "../../components/BattleChip.svelte";
  import { Box, Center, Loader, Progress, TextInput } from "@svelteuidev/core";
  import debounce from "lodash/debounce";
  import Device from "svelte-device-info";
  import ChipFolder from "../../components/ChipFolder.svelte";
  import { zipAndDownloadMods } from "../../helpers/zipAndDownloadMods";
  import Modal from "../../components/Modal.svelte";
  import BattleChipInfoModal from "../../components/BattleChipInfoModal.svelte";
  import { chipDesign, listOfMods } from "../../stores";

  let totalPageCount = 0;

  const toDownloadChips = writable([]);
  const downloadProgress = writable(0);
  const openedDownloadModal = writable(false);

  const selectedMod = writable({});
  const openedInfoModal = writable(false);

  const searchQuery = writable("");
  const searchResults = writable([]);
  const searchLoading = writable(false);

  onMount(() => {
    if ($listOfMods.length === 0) {
      fetch("/api/mods?limit=100&page=1")
        .then((res) => res.json())
        .then((data) => {
          totalPageCount = data?.totalPages;
          listOfMods.set(data?.mods);
          getAllModsOverTime();
        });
    }
  });

  const getAllModsOverTime = () => {
    for (let i = 0; i < totalPageCount; i++) {
      const page = i + 2;
      setTimeout(() => {
        fetch(`/api/mods?limit=100&page=${page}`)
          .then((res) => res.json())
          .then((data) => {
            listOfMods.set($listOfMods.concat(data?.mods));
          });
      }, 1500 * i);
    }
  };

  const searchMods = debounce((query) => {
    searchResults.set([]);
    if (query.length > 0) {
      searchLoading.set(true);
      fetch(`/api/mods/search?query=${query}`)
        .then((res) => res.json())
        .then((data) => {
          searchResults.set(data?.mods);
          searchLoading.set(false);
        });
    }
  }, 500);

  const likeMod = (userId, modId) =>
    fetch(`/api/mods/like/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        modId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const { mod: newMod } = data;
        listOfMods.set(
          $listOfMods.map((mod) => ({
            ...mod,
            likes: mod.id === modId ? newMod.likes : mod.likes,
          }))
        );
      });
</script>

<Box css={{ display: "flex" }}>
  <TextInput
    placeholder="Search for a mod"
    on:input={(e) => {
      searchQuery.set(e.target.value);
      searchMods(e.target.value);
    }}
    size="xs"
    class="custom-input chip-name-search no-select"
    override={{ fontSize: "0.85rem" }}
  />
</Box>

<div class="battlechip-parent-container">
  <div class="battlechip-parent">
    {#if $searchLoading || $listOfMods.length === 0}
      <Loader />
    {:else}
      {#each $searchQuery.length > 0 ? $searchResults : $listOfMods as mod}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          on:click={(ev) => {
            ev.preventDefault();
            if (!Device.isMobile) {
              toDownloadChips.set($toDownloadChips.concat(mod));
            }
          }}
          on:contextmenu={(ev) => {
            ev.preventDefault();
            selectedMod.set(mod);
            openedInfoModal.set(true);
          }}
        >
          <BattleChip {mod} displayChipType={$chipDesign} />
        </div>
      {/each}
    {/if}
  </div>
</div>

{#if $toDownloadChips.length > 0}
  <ChipFolder
    items={$toDownloadChips}
    removeAllChipsFromFolder={() => {
      toDownloadChips.set([]);
    }}
    zipAndDownloadMods={() => {
      openedDownloadModal.set(true);
      zipAndDownloadMods($toDownloadChips, downloadProgress).then(() =>
        openedDownloadModal.set(false)
      );
    }}
  />
{/if}

<Modal opened={openedDownloadModal} title="download">
  <br />
  <br />
  <Progress
    value={$downloadProgress}
    label={`${$downloadProgress}%`}
    radius={2}
    size="lg"
  />
  <br />
  <br />
</Modal>

<BattleChipInfoModal opened={openedInfoModal} {selectedMod} {likeMod} />

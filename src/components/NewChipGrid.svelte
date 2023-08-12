<script>
    import { Grid } from "svelte-virtual";
    import BattleChip from "./BattleChip.svelte";
    import debounce from "lodash/debounce";
    import { writable } from "svelte/store";
    import BattleChipInfoModal from "./BattleChipInfoModal.svelte";
    import { chipDesign } from "../stores";
    import Device from "svelte-device-info";

    export let chips;
    export let manuallyAddToFolder;
    export let likeMod;
    export let disabledDrag = false;

    const selectedMod = writable({});
    const opened = writable(false);

    let latestPageFetched = 1;
    let allResultsFetched = false;
    const loadingMoreResults = writable(false);

    const getNextResults = debounce(() => {
        const nextPage = latestPageFetched + 1;

        loadingMoreResults.set(true);
        // get next page of results
        fetch(`/api/mods?page=${nextPage}&limit=100`)
            .then((res) => res.json())
            .then((res) => {
                chips = chips.concat(res.mods);
                if (res.mods.length === 0) allResultsFetched = true;
            })
            .finally(loadingMoreResults.set(false));

        latestPageFetched = nextPage;
    }, [750]);
</script>

<BattleChipInfoModal {selectedMod} {opened} {likeMod} />

<Grid
    itemCount={chips.length}
    itemHeight={166}
    itemWidth={110}
    height={700}
    getKey={(key) => {
        if (key >= chips.length - 29) {
            // reached bottom of list
            !allResultsFetched && getNextResults();
        }
        return key;
    }}
>
    <div
        slot="item"
        let:index
        let:style
        {style}
        on:dblclick={(ev) => {
            ev.preventDefault();
            if (!Device.isMobile && !disabledDrag) {
                chips = chips.filter((itm) => itm.id !== chips[index].id);
                manuallyAddToFolder(chips[index]);
            } else {
                selectedMod.set(chips[index]);
                opened.set(true);
            }
        }}
        on:contextmenu={(ev) => {
            ev.preventDefault();
            if (!Device.isMobile) {
                selectedMod.set(chips[index]);
                opened.set(true);
            }
        }}
    >
        <BattleChip displayChipType={$chipDesign} mod={chips[index]} />
    </div>
    <div slot="footer"><div>Loading...</div></div></Grid
>

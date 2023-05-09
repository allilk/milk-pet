<script>
    import { Button, Container } from "@svelteuidev/core";
    import BattleChip from "../components/BattleChip.svelte";
</script>

<Container override={{ display: "flex" }}>
    <BattleChip />
    <BattleChip />
    <BattleChip />
</Container>

<Container class="custom-paragraph" override={{ width: "75%" }}>
    <h3>What is <i>MILK-PET</i> ?</h3>
    <p>
        <b>MILK-PET</b> is a fan site that visually mimics the PET from the MegaMan
        NT Warrior and Battle Network series. We are a fan site that host fan-favorite
        assets such as mods for Open Net Battle. We do not host roms or anything
        illegal.
    </p>
    <!-- <div class="marquee-message">
        <p>
            return return return return return return return return return
            return return return return return return return return return
            return return return return return return return return return
            return return return return return return return return
        </p>
    </div> -->
</Container>

<!-- <div class="test-navi"><img src="mm-testnavi.png" alt="" /></div> -->

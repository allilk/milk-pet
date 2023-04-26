<script>
    import { Box, Center, Container, Loader } from "@svelteuidev/core";
    import { writable } from "svelte/store";
    import BattleChip from "../../components/BattleChip.svelte";
    import Modal from "../../components/Modal.svelte";
    import Grid from "svelte-grid-responsive";

    let data = {
        "932744899512643654": {
            data: {
                type: "skins",
                name: "Tron Blue PET Menu",
                id: "932744899512643654",
                description: "Tron blue by DJRezzed",
                discord_url:
                    "https://cdn.discordapp.com/attachments/932744899512643654/932744923399209000/pet_ui_tron_blue.zip",
                screenshots: [],
            },
            attachment_data: {
                timestamp: 1642454119343,
                discord_url:
                    "https://cdn.discordapp.com/attachments/932744899512643654/932744923399209000/pet_ui_tron_blue.zip",
                author_name: "jamesking",
                author_id: "389909385981329418",
                original_filename: "pet_ui_tron_blue.zip",
                attachment_id: "932744923399209000",
                thread_id: "932744899512643654",
                thread_name: "Tron Blue PET Menu",
                channel_id: "932744419948507166",
                guild_id: "455429604455219211",
            },
        },
        "936019329839951922": {
            data: {
                type: "skins",
                name: "Shanghai Skin",
                id: "936019329839951922",
                description: "almost everything replaced with shanghai assets",
                discord_url:
                    "https://cdn.discordapp.com/attachments/936019329839951922/936019357513973800/ShanghaiSkin.zip",
                screenshots: [],
            },
            attachment_data: {
                timestamp: 1643234805284,
                discord_url:
                    "https://cdn.discordapp.com/attachments/936019329839951922/936019357513973800/ShanghaiSkin.zip",
                author_name: "Flop Tart",
                author_id: "246500311143940097",
                original_filename: "ShanghaiSkin.zip",
                attachment_id: "936019357513973800",
                thread_id: "936019329839951922",
                thread_name: "Shanghai Skin",
                channel_id: "932744419948507166",
                guild_id: "455429604455219211",
            },
        },
        "933212905430736906": {
            data: {
                type: "skins",
                name: "Harpy.EXE Skin",
                id: "933212905430736906",
                description: "Based on the colors of the navi in the title.",
                discord_url:
                    "https://cdn.discordapp.com/attachments/933212905430736906/933215339053977620/ui.zip",
                screenshots: [],
            },
            attachment_data: {
                timestamp: 1642566275178,
                discord_url:
                    "https://cdn.discordapp.com/attachments/933212905430736906/933215339053977620/ui.zip",
                author_name: "Maplewood",
                author_id: "191035809820835840",
                original_filename: "ui.zip",
                attachment_id: "933215339053977620",
                thread_id: "933212905430736906",
                thread_name: "Harpy.EXE Skin",
                channel_id: "932744419948507166",
                guild_id: "455429604455219211",
            },
        },
        "987169364686016512": {
            data: {
                type: "skins",
                name: "PES 6 Title Screen",
                id: "987169364686016512",
                description:
                    "this was more of a one-off joke but if i feel like",
                discord_url:
                    "https://cdn.discordapp.com/attachments/987169364686016512/1020806772530880583/pes6_v2.zip",
                screenshots: [],
            },
            attachment_data: {
                timestamp: 1663449700327,
                discord_url:
                    "https://cdn.discordapp.com/attachments/987169364686016512/1020806772530880583/pes6_v2.zip",
                author_name: "churger",
                author_id: "703248881227530261",
                original_filename: "pes6_v2.zip",
                attachment_id: "1020806772530880583",
                thread_id: "987169364686016512",
                thread_name: "PES 6 Title Screen",
                channel_id: "932744419948507166",
                guild_id: "455429604455219211",
            },
        },
        "1020804338924392499": {
            data: {
                type: "skins",
                name: "EXE 1.5 Title and PET Screen",
                id: "1020804338924392499",
                description:
                    "currently only replaces the title screen and pet s",
                discord_url:
                    "https://cdn.discordapp.com/attachments/1020804338924392499/1020804341269012552/exe1.5skin.zip",
                screenshots: [],
            },
            attachment_data: {
                timestamp: 1663449120726,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1020804338924392499/1020804341269012552/exe1.5skin.zip",
                author_name: "churger",
                author_id: "703248881227530261",
                original_filename: "exe1.5skin.zip",
                attachment_id: "1020804341269012552",
                thread_id: "1020804338924392499",
                thread_name: "EXE 1.5 Title and PET Screen",
                channel_id: "932744419948507166",
                guild_id: "455429604455219211",
            },
        },
        "1054460608461934693": {
            data: {
                type: "skins",
                name: "PET Append Skin",
                id: "1054460608461934693",
                description:
                    "here is a full skin for ONB , based on a WIP PET m",
                discord_url:
                    "https://cdn.discordapp.com/attachments/1054460608461934693/1054460817367633940/APPEND.zip",
                screenshots: [],
            },
            attachment_data: {
                timestamp: 1671473449854,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1054460608461934693/1054460817367633940/APPEND.zip",
                author_name: "DJRezzed",
                author_id: "714433270309453856",
                original_filename: "APPEND.zip",
                attachment_id: "1054460817367633940",
                thread_id: "1054460608461934693",
                thread_name: "PET Append Skin",
                channel_id: "932744419948507166",
                guild_id: "455429604455219211",
            },
        },
        "1055346113596637220": {
            data: {
                type: "skins",
                name: "Donkey Kong Country 3 (SNES) Title Screen",
                id: "1055346113596637220",
                description:
                    "Replaces the Title Screen Assets to replicate DKC3",
                discord_url:
                    "https://cdn.discordapp.com/attachments/1055346113596637220/1055346118369738812/Donkey_Kong_Country_3_SNES_Title.zip",
                screenshots: [],
            },
            attachment_data: {
                timestamp: 1671684522066,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1055346113596637220/1055346118369738812/Donkey_Kong_Country_3_SNES_Title.zip",
                author_name: "Hooded Edge",
                author_id: "1025303561007013929",
                original_filename: "Donkey_Kong_Country_3_SNES_Title.zip",
                attachment_id: "1055346118369738812",
                thread_id: "1055346113596637220",
                thread_name: "Donkey Kong Country 3 (SNES) Title Screen",
                channel_id: "932744419948507166",
                guild_id: "455429604455219211",
            },
        },
        "932745042303541299": {
            data: {
                type: "skins",
                name: "Gregar Green PET Menu",
                id: "932745042303541299",
                description:
                    "Original Green PET menu used by earlier builds of ",
                discord_url:
                    "https://cdn.discordapp.com/attachments/932745042303541299/932745063967125564/pet_ui_og.zip",
                screenshots: [],
            },
            attachment_data: {
                timestamp: 1642454152859,
                discord_url:
                    "https://cdn.discordapp.com/attachments/932745042303541299/932745063967125564/pet_ui_og.zip",
                author_name: "jamesking",
                author_id: "389909385981329418",
                original_filename: "pet_ui_og.zip",
                attachment_id: "932745063967125564",
                thread_id: "932745042303541299",
                thread_name: "Gregar Green PET Menu",
                channel_id: "932744419948507166",
                guild_id: "455429604455219211",
            },
        },
        "1061418861586546850": {
            data: {
                type: "skins",
                name: "Crimson Hackers PET Skin",
                id: "1061418861586546850",
                description:
                    "A skin based on my concept for a game that ties th",
                discord_url:
                    "https://cdn.discordapp.com/attachments/1061418861586546850/1061764767766806538/CH_skin.zip",
                screenshots: [],
            },
            attachment_data: {
                timestamp: 1673214847339,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1061418861586546850/1061764767766806538/CH_skin.zip",
                author_name: "Drawceress",
                author_id: "808127939831922749",
                original_filename: "CH_skin.zip",
                attachment_id: "1061764767766806538",
                thread_id: "1061418861586546850",
                thread_name: "Crimson Hackers PET Skin",
                channel_id: "932744419948507166",
                guild_id: "455429604455219211",
            },
        },
        "1062712626829864961": {
            data: {
                type: "skins",
                name: "EXE2 and BN2 Title Screens",
                id: "1062712626829864961",
                description: "*EXE2* JP, US and EU title screens.",
                discord_url:
                    "https://cdn.discordapp.com/attachments/1062712626829864961/1062712639400194119/exe2-jp-title.zip",
                screenshots: [],
            },
            attachment_data: {
                timestamp: 1673440837863,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1062712626829864961/1062712639400194119/exe2-jp-title.zip",
                author_name: "K1rbYat1Na",
                author_id: "239009201530208256",
                original_filename: "exe2-jp-title.zip",
                attachment_id: "1062712639400194119",
                thread_id: "1062712626829864961",
                thread_name: "EXE2 and BN2 Title Screens",
                channel_id: "932744419948507166",
                guild_id: "455429604455219211",
            },
        },
        "1062720631617110126": {
            data: {
                type: "skins",
                name: "EXE3 and BN3 Title Screens",
                id: "1062720631617110126",
                description: "*EXE3* JP, US and EU title screens.",
                discord_url:
                    "https://cdn.discordapp.com/attachments/1062720631617110126/1062720950048653332/bn3w-eu-title.zip",
                screenshots: [],
            },
            attachment_data: {
                timestamp: 1673442819123,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1062720631617110126/1062720950048653332/bn3w-eu-title.zip",
                author_name: "K1rbYat1Na",
                author_id: "239009201530208256",
                original_filename: "bn3w-eu-title.zip",
                attachment_id: "1062720950048653332",
                thread_id: "1062720631617110126",
                thread_name: "EXE3 and BN3 Title Screens",
                channel_id: "932744419948507166",
                guild_id: "455429604455219211",
            },
        },
        "1062730595186245682": {
            data: {
                type: "skins",
                name: "EXE4 and BN4 Title Screens",
                id: "1062730595186245682",
                description: "*EXE4* JP, US and EU title screens.",
                discord_url:
                    "https://cdn.discordapp.com/attachments/1062730595186245682/1062731059340517396/bn4r-eu-title.zip",
                screenshots: [],
            },
            attachment_data: {
                timestamp: 1673445229365,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1062730595186245682/1062731059340517396/bn4r-eu-title.zip",
                author_name: "K1rbYat1Na",
                author_id: "239009201530208256",
                original_filename: "bn4r-eu-title.zip",
                attachment_id: "1062731059340517396",
                thread_id: "1062730595186245682",
                thread_name: "EXE4 and BN4 Title Screens",
                channel_id: "932744419948507166",
                guild_id: "455429604455219211",
            },
        },
        "1062733523871596554": {
            data: {
                type: "skins",
                name: "EXE4.5 Title Screen",
                id: "1062733523871596554",
                description: "*EXE4.5* title screen.",
                discord_url:
                    "https://cdn.discordapp.com/attachments/1062733523871596554/1062733530641207476/exe4.5-title.zip",
                screenshots: [],
            },
            attachment_data: {
                timestamp: 1673445818427,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1062733523871596554/1062733530641207476/exe4.5-title.zip",
                author_name: "K1rbYat1Na",
                author_id: "239009201530208256",
                original_filename: "exe4.5-title.zip",
                attachment_id: "1062733530641207476",
                thread_id: "1062733523871596554",
                thread_name: "EXE4.5 Title Screen",
                channel_id: "932744419948507166",
                guild_id: "455429604455219211",
            },
        },
        "1062737643357618357": {
            data: {
                type: "skins",
                name: "EXE5 and BN5 Title Screens",
                id: "1062737643357618357",
                description: "*EXE5* JP, US and EU title screens.",
                discord_url:
                    "https://cdn.discordapp.com/attachments/1062737643357618357/1062737916662652988/bn5p-eu-title.zip",
                screenshots: [],
            },
            attachment_data: {
                timestamp: 1673446864316,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1062737643357618357/1062737916662652988/bn5p-eu-title.zip",
                author_name: "K1rbYat1Na",
                author_id: "239009201530208256",
                original_filename: "bn5p-eu-title.zip",
                attachment_id: "1062737916662652988",
                thread_id: "1062737643357618357",
                thread_name: "EXE5 and BN5 Title Screens",
                channel_id: "932744419948507166",
                guild_id: "455429604455219211",
            },
        },
        "1062748796775301221": {
            data: {
                type: "skins",
                name: "EXE6 and BN6 Title Screens",
                id: "1062748796775301221",
                description: "*EXE6* JP, US and EU title screens.",
                discord_url:
                    "https://cdn.discordapp.com/attachments/1062748796775301221/1062749058667659435/bn6g-eu-title.zip",
                screenshots: [],
            },
            attachment_data: {
                timestamp: 1673449520750,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1062748796775301221/1062749058667659435/bn6g-eu-title.zip",
                author_name: "K1rbYat1Na",
                author_id: "239009201530208256",
                original_filename: "bn6g-eu-title.zip",
                attachment_id: "1062749058667659435",
                thread_id: "1062748796775301221",
                thread_name: "EXE6 and BN6 Title Screens",
                channel_id: "932744419948507166",
                guild_id: "455429604455219211",
            },
        },
        "1062703297103925248": {
            data: {
                type: "skins",
                name: "EXE1 and BN1 Title Screens",
                id: "1062703297103925248",
                description: "*EXE1* JP, US and EU title screens.",
                discord_url:
                    "https://cdn.discordapp.com/attachments/1062703297103925248/1062703314745163776/exe1-jp-title.zip",
                screenshots: [],
            },
            attachment_data: {
                timestamp: 1673438614858,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1062703297103925248/1062703314745163776/exe1-jp-title.zip",
                author_name: "K1rbYat1Na",
                author_id: "239009201530208256",
                original_filename: "exe1-jp-title.zip",
                attachment_id: "1062703314745163776",
                thread_id: "1062703297103925248",
                thread_name: "EXE1 and BN1 Title Screens",
                channel_id: "932744419948507166",
                guild_id: "455429604455219211",
            },
        },
        "1054886577668632627": {
            data: {
                type: "skins",
                name: "[WIP] BN2Skin",
                id: "1054886577668632627",
                description: "",
                discord_url:
                    "https://cdn.discordapp.com/attachments/1054886577668632627/1066556183575543868/onb_with_bn2_skin.zip",
                screenshots: [],
            },
            attachment_data: {
                timestamp: 1674357209912,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1054886577668632627/1066556183575543868/onb_with_bn2_skin.zip",
                author_name: "jamesking",
                author_id: "389909385981329418",
                original_filename: "onb_with_bn2_skin.zip",
                attachment_id: "1066556183575543868",
                thread_id: "1054886577668632627",
                thread_name: "[WIP] BN2Skin",
                channel_id: "932744419948507166",
                guild_id: "455429604455219211",
            },
        },
        com_discord_Konstinople_7692_block_HP50_blue_bn6: {
            data: {
                type: "blocks",
                id: "com.discord.Konstinople#7692.block.HP50.blue.bn6",
                dependencies: [],
                subpackages: [],
                name: "HP+50",
                detail: {
                    color: "Blue",
                    shape: [
                        0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "MAX HP\n+50!",
            },
            attachment_data: {
                timestamp: 1639337104384,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919665505273540690/919671215470305290/hp50_blue.zip",
                author_name: "Konstinople",
                author_id: "252196240144597002",
                original_filename: "hp50_blue.zip",
                attachment_id: "919671215470305290",
                thread_id: "919665505273540690",
                thread_name: "[OFC][NCP][BN6]HP Parts",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_discord_Konstinople_7692_block_HP50_white_bn6: {
            data: {
                type: "blocks",
                id: "com.discord.Konstinople#7692.block.HP50.white.bn6",
                dependencies: [],
                subpackages: [],
                name: "HP+50",
                detail: {
                    color: "White",
                    shape: [
                        0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "MAX HP\n+50!",
            },
            attachment_data: {
                timestamp: 1639337104402,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919665505273540690/919671215554195456/hp50_white.zip",
                author_name: "Konstinople",
                author_id: "252196240144597002",
                original_filename: "hp50_white.zip",
                attachment_id: "919671215554195456",
                thread_id: "919665505273540690",
                thread_name: "[OFC][NCP][BN6]HP Parts",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_discord_Konstinople_7692_block_HP50_pink_bn6: {
            data: {
                type: "blocks",
                id: "com.discord.Konstinople#7692.block.HP50.pink.bn6",
                dependencies: [],
                subpackages: [],
                name: "HP+50",
                detail: {
                    color: "Pink",
                    shape: [
                        0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "MAX HP\n+50!",
            },
            attachment_data: {
                timestamp: 1639337104409,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919665505273540690/919671215549988945/hp50_pink.zip",
                author_name: "Konstinople",
                author_id: "252196240144597002",
                original_filename: "hp50_pink.zip",
                attachment_id: "919671215549988945",
                thread_id: "919665505273540690",
                thread_name: "[OFC][NCP][BN6]HP Parts",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_discord_Konstinople_7692_block_HP100_pink_bn6: {
            data: {
                type: "blocks",
                id: "com.discord.Konstinople#7692.block.HP100.pink.bn6",
                dependencies: [],
                subpackages: [],
                name: "HP+100",
                detail: {
                    color: "Pink",
                    shape: [
                        0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "MAX HP\n+100!",
            },
            attachment_data: {
                timestamp: 1639337110178,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919665505273540690/919671239650459678/hp100_pink.zip",
                author_name: "Konstinople",
                author_id: "252196240144597002",
                original_filename: "hp100_pink.zip",
                attachment_id: "919671239650459678",
                thread_id: "919665505273540690",
                thread_name: "[OFC][NCP][BN6]HP Parts",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_discord_Konstinople_7692_block_HP100_white_bn6: {
            data: {
                type: "blocks",
                id: "com.discord.Konstinople#7692.block.HP100.white.bn6",
                dependencies: [],
                subpackages: [],
                name: "HP+100",
                detail: {
                    color: "White",
                    shape: [
                        0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "MAX HP\n+100!",
            },
            attachment_data: {
                timestamp: 1639337110270,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919665505273540690/919671239725953054/hp100_white.zip",
                author_name: "Konstinople",
                author_id: "252196240144597002",
                original_filename: "hp100_white.zip",
                attachment_id: "919671239725953054",
                thread_id: "919665505273540690",
                thread_name: "[OFC][NCP][BN6]HP Parts",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_discord_Konstinople_7692_block_HP100_blue_bn6: {
            data: {
                type: "blocks",
                id: "com.discord.Konstinople#7692.block.HP100.blue.bn6",
                dependencies: [],
                subpackages: [],
                name: "HP+100",
                detail: {
                    color: "Blue",
                    shape: [
                        0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "MAX HP\n+100!",
            },
            attachment_data: {
                timestamp: 1639337110287,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919665505273540690/919671239864365066/hp100_blue.zip",
                author_name: "Konstinople",
                author_id: "252196240144597002",
                original_filename: "hp100_blue.zip",
                attachment_id: "919671239864365066",
                thread_id: "919665505273540690",
                thread_name: "[OFC][NCP][BN6]HP Parts",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_discord_Konstinople_7692_block_HP200_white_bn6: {
            data: {
                type: "blocks",
                id: "com.discord.Konstinople#7692.block.HP200.white.bn6",
                dependencies: [],
                subpackages: [],
                name: "HP+200",
                detail: {
                    color: "White",
                    shape: [
                        0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "MAX HP\n+200!",
            },
            attachment_data: {
                timestamp: 1639337125229,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919665505273540690/919671302997024778/hp200_white.zip",
                author_name: "Konstinople",
                author_id: "252196240144597002",
                original_filename: "hp200_white.zip",
                attachment_id: "919671302997024778",
                thread_id: "919665505273540690",
                thread_name: "[OFC][NCP][BN6]HP Parts",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_discord_Konstinople_7692_block_HP200_blue_bn6: {
            data: {
                type: "blocks",
                id: "com.discord.Konstinople#7692.block.HP200.blue.bn6",
                dependencies: [],
                subpackages: [],
                name: "HP+200",
                detail: {
                    color: "Blue",
                    shape: [
                        0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "MAX HP\n+200!",
            },
            attachment_data: {
                timestamp: 1639337125320,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919665505273540690/919671303324192838/hp200_blue.zip",
                author_name: "Konstinople",
                author_id: "252196240144597002",
                original_filename: "hp200_blue.zip",
                attachment_id: "919671303324192838",
                thread_id: "919665505273540690",
                thread_name: "[OFC][NCP][BN6]HP Parts",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_discord_Konstinople_7692_block_HP200_yellow_bn6: {
            data: {
                type: "blocks",
                id: "com.discord.Konstinople#7692.block.HP200.yellow.bn6",
                dependencies: [],
                subpackages: [],
                name: "HP+200",
                detail: {
                    color: "Yellow",
                    shape: [
                        0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "MAX HP\n+200!",
            },
            attachment_data: {
                timestamp: 1639337125347,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919665505273540690/919671302988660776/hp200_yellow.zip",
                author_name: "Konstinople",
                author_id: "252196240144597002",
                original_filename: "hp200_yellow.zip",
                attachment_id: "919671302988660776",
                thread_id: "919665505273540690",
                thread_name: "[OFC][NCP][BN6]HP Parts",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_discord_Konstinople_7692_block_HP300_green_bn6: {
            data: {
                type: "blocks",
                id: "com.discord.Konstinople#7692.block.HP300.green.bn6",
                dependencies: [],
                subpackages: [],
                name: "HP+300",
                detail: {
                    color: "Green",
                    shape: [
                        0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "MAX HP\n+300!",
            },
            attachment_data: {
                timestamp: 1639337129922,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919665505273540690/919671322487976026/hp300_green.zip",
                author_name: "Konstinople",
                author_id: "252196240144597002",
                original_filename: "hp300_green.zip",
                attachment_id: "919671322487976026",
                thread_id: "919665505273540690",
                thread_name: "[OFC][NCP][BN6]HP Parts",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_discord_Konstinople_7692_block_HP300_pink_bn6: {
            data: {
                type: "blocks",
                id: "com.discord.Konstinople#7692.block.HP300.pink.bn6",
                dependencies: [],
                subpackages: [],
                name: "HP+300",
                detail: {
                    color: "Pink",
                    shape: [
                        0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "MAX HP\n+300!",
            },
            attachment_data: {
                timestamp: 1639337129942,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919665505273540690/919671322680913940/hp300_pink.zip",
                author_name: "Konstinople",
                author_id: "252196240144597002",
                original_filename: "hp300_pink.zip",
                attachment_id: "919671322680913940",
                thread_id: "919665505273540690",
                thread_name: "[OFC][NCP][BN6]HP Parts",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_discord_Konstinople_7692_block_HP300_white_bn6: {
            data: {
                type: "blocks",
                id: "com.discord.Konstinople#7692.block.HP300.white.bn6",
                dependencies: [],
                subpackages: [],
                name: "HP+300",
                detail: {
                    color: "White",
                    shape: [
                        0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "MAX HP\n+300!",
            },
            attachment_data: {
                timestamp: 1639337130039,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919665505273540690/919671322525704193/hp300_white.zip",
                author_name: "Konstinople",
                author_id: "252196240144597002",
                original_filename: "hp300_white.zip",
                attachment_id: "919671322525704193",
                thread_id: "919665505273540690",
                thread_name: "[OFC][NCP][BN6]HP Parts",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_discord_Konstinople_7692_block_HP400_green_bn6: {
            data: {
                type: "blocks",
                id: "com.discord.Konstinople#7692.block.HP400.green.bn6",
                dependencies: [],
                subpackages: [],
                name: "HP+400",
                detail: {
                    color: "Green",
                    shape: [
                        0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "MAX HP\n+400!",
            },
            attachment_data: {
                timestamp: 1639337133188,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919665505273540690/919671336161382451/hp400_green.zip",
                author_name: "Konstinople",
                author_id: "252196240144597002",
                original_filename: "hp400_green.zip",
                attachment_id: "919671336161382451",
                thread_id: "919665505273540690",
                thread_name: "[OFC][NCP][BN6]HP Parts",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_discord_Konstinople_7692_block_HP400_white_bn6: {
            data: {
                type: "blocks",
                id: "com.discord.Konstinople#7692.block.HP400.white.bn6",
                dependencies: [],
                subpackages: [],
                name: "HP+400",
                detail: {
                    color: "White",
                    shape: [
                        0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "MAX HP\n+400!",
            },
            attachment_data: {
                timestamp: 1639337133201,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919665505273540690/919671336215920660/hp400_white.zip",
                author_name: "Konstinople",
                author_id: "252196240144597002",
                original_filename: "hp400_white.zip",
                attachment_id: "919671336215920660",
                thread_id: "919665505273540690",
                thread_name: "[OFC][NCP][BN6]HP Parts",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_discord_Konstinople_7692_block_HP400_yellow_bn6: {
            data: {
                type: "blocks",
                id: "com.discord.Konstinople#7692.block.HP400.yellow.bn6",
                dependencies: [],
                subpackages: [],
                name: "HP+400",
                detail: {
                    color: "Yellow",
                    shape: [
                        0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "MAX HP\n+400!",
            },
            attachment_data: {
                timestamp: 1639337133306,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919665505273540690/919671336345956362/hp400_yellow.zip",
                author_name: "Konstinople",
                author_id: "252196240144597002",
                original_filename: "hp400_yellow.zip",
                attachment_id: "919671336345956362",
                thread_id: "919665505273540690",
                thread_name: "[OFC][NCP][BN6]HP Parts",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_discord_Konstinople_7692_block_HP500_white_bn6: {
            data: {
                type: "blocks",
                id: "com.discord.Konstinople#7692.block.HP500.white.bn6",
                dependencies: [],
                subpackages: [],
                name: "HP+500",
                detail: {
                    color: "White",
                    shape: [
                        0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "MAX HP\n+500!",
            },
            attachment_data: {
                timestamp: 1639337137417,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919665505273540690/919671353945235506/hp500_white.zip",
                author_name: "Konstinople",
                author_id: "252196240144597002",
                original_filename: "hp500_white.zip",
                attachment_id: "919671353945235506",
                thread_id: "919665505273540690",
                thread_name: "[OFC][NCP][BN6]HP Parts",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_discord_Konstinople_7692_block_HP500_green_bn6: {
            data: {
                type: "blocks",
                id: "com.discord.Konstinople#7692.block.HP500.green.bn6",
                dependencies: [],
                subpackages: [],
                name: "HP+500",
                detail: {
                    color: "Green",
                    shape: [
                        0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "MAX HP\n+500!",
            },
            attachment_data: {
                timestamp: 1639337137419,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919665505273540690/919671353903304745/hp500_green.zip",
                author_name: "Konstinople",
                author_id: "252196240144597002",
                original_filename: "hp500_green.zip",
                attachment_id: "919671353903304745",
                thread_id: "919665505273540690",
                thread_name: "[OFC][NCP][BN6]HP Parts",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_discord_Konstinople_7692_block_HP500_pink_bn6: {
            data: {
                type: "blocks",
                id: "com.discord.Konstinople#7692.block.HP500.pink.bn6",
                dependencies: [],
                subpackages: [],
                name: "HP+500",
                detail: {
                    color: "Pink",
                    shape: [
                        0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "MAX HP\n+500!",
            },
            attachment_data: {
                timestamp: 1639337137484,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919665505273540690/919671353949429820/hp500_pink.zip",
                author_name: "Konstinople",
                author_id: "252196240144597002",
                original_filename: "hp500_pink.zip",
                attachment_id: "919671353949429820",
                thread_id: "919665505273540690",
                thread_name: "[OFC][NCP][BN6]HP Parts",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_discord_Konstinople_7692_block_Charge1_white_bn6: {
            data: {
                type: "blocks",
                id: "com.discord.Konstinople#7692.block.Charge1.white.bn6",
                dependencies: [],
                subpackages: [],
                name: "Charge+1",
                detail: {
                    color: "White",
                    shape: [
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "MegaBstr\nCharge +1",
            },
            attachment_data: {
                timestamp: 1639341119336,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919688011246092348/919688055303057448/charge1_white.zip",
                author_name: "Konstinople",
                author_id: "252196240144597002",
                original_filename: "charge1_white.zip",
                attachment_id: "919688055303057448",
                thread_id: "919688011246092348",
                thread_name: "[OFC][NCP][BN6]Buster parts",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_discord_Konstinople_7692_block_ChargeMAX_blue_bn6: {
            data: {
                type: "blocks",
                id: "com.discord.Konstinople#7692.block.ChargeMAX.blue.bn6",
                dependencies: [],
                subpackages: [],
                name: "ChargeMAX",
                detail: {
                    color: "Blue",
                    shape: [
                        0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "MegaBstr\nCharge\nbecomes 5",
            },
            attachment_data: {
                timestamp: 1639341119342,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919688011246092348/919688055441477632/charge_max_blue.zip",
                author_name: "Konstinople",
                author_id: "252196240144597002",
                original_filename: "charge_max_blue.zip",
                attachment_id: "919688055441477632",
                thread_id: "919688011246092348",
                thread_name: "[OFC][NCP][BN6]Buster parts",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_discord_Konstinople_7692_block_Charge1_pink_bn6: {
            data: {
                type: "blocks",
                id: "com.discord.Konstinople#7692.block.Charge1.pink.bn6",
                dependencies: [],
                subpackages: [],
                name: "Charge+1",
                detail: {
                    color: "Pink",
                    shape: [
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "MegaBstr\nCharge +1",
            },
            attachment_data: {
                timestamp: 1639341119347,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919688011246092348/919688055353389086/charge1_pink.zip",
                author_name: "Konstinople",
                author_id: "252196240144597002",
                original_filename: "charge1_pink.zip",
                attachment_id: "919688055353389086",
                thread_id: "919688011246092348",
                thread_name: "[OFC][NCP][BN6]Buster parts",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_discord_Konstinople_7692_block_Charge1_blue_bn6: {
            data: {
                type: "blocks",
                id: "com.discord.Konstinople#7692.block.Charge1.blue.bn6",
                dependencies: [],
                subpackages: [],
                name: "Charge+1",
                detail: {
                    color: "Blue",
                    shape: [
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "MegaBstr\nCharge +1",
            },
            attachment_data: {
                timestamp: 1639341119349,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919688011246092348/919688055378546759/charge1_blue.zip",
                author_name: "Konstinople",
                author_id: "252196240144597002",
                original_filename: "charge1_blue.zip",
                attachment_id: "919688055378546759",
                thread_id: "919688011246092348",
                thread_name: "[OFC][NCP][BN6]Buster parts",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_discord_Konstinople_7692_block_AttackMAX_red_bn6: {
            data: {
                type: "blocks",
                id: "com.discord.Konstinople#7692.block.AttackMAX.red.bn6",
                dependencies: [],
                subpackages: [],
                name: "AttackMAX",
                detail: {
                    color: "Red",
                    shape: [
                        0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "MegaBstr\nAttck\nbecomes 5",
            },
            attachment_data: {
                timestamp: 1639341119370,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919688011246092348/919688055143690290/attack_max_red.zip",
                author_name: "Konstinople",
                author_id: "252196240144597002",
                original_filename: "attack_max_red.zip",
                attachment_id: "919688055143690290",
                thread_id: "919688011246092348",
                thread_name: "[OFC][NCP][BN6]Buster parts",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_discord_Konstinople_7692_block_Attack1_pink_bn6: {
            data: {
                type: "blocks",
                id: "com.discord.Konstinople#7692.block.Attack1.pink.bn6",
                dependencies: [],
                subpackages: [],
                name: "Attack+1",
                detail: {
                    color: "Pink",
                    shape: [
                        0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "MegaBstr\nAttck +1",
            },
            attachment_data: {
                timestamp: 1639341119378,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919688011246092348/919688055173033994/attack1_pink.zip",
                author_name: "Konstinople",
                author_id: "252196240144597002",
                original_filename: "attack1_pink.zip",
                attachment_id: "919688055173033994",
                thread_id: "919688011246092348",
                thread_name: "[OFC][NCP][BN6]Buster parts",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_discord_Konstinople_7692_block_Attack1_blue_bn6: {
            data: {
                type: "blocks",
                id: "com.discord.Konstinople#7692.block.Attack1.blue.bn6",
                dependencies: [],
                subpackages: [],
                name: "Attack+1",
                detail: {
                    color: "Blue",
                    shape: [
                        0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "MegaBstr\nAttck +1",
            },
            attachment_data: {
                timestamp: 1639341119486,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919688011246092348/919688055613452329/attack1_blue.zip",
                author_name: "Konstinople",
                author_id: "252196240144597002",
                original_filename: "attack1_blue.zip",
                attachment_id: "919688055613452329",
                thread_id: "919688011246092348",
                thread_name: "[OFC][NCP][BN6]Buster parts",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_discord_Konstinople_7692_block_Attack1_red_bn6: {
            data: {
                type: "blocks",
                id: "com.discord.Konstinople#7692.block.Attack1.red.bn6",
                dependencies: [],
                subpackages: [],
                name: "Attack+1",
                detail: {
                    color: "Red",
                    shape: [
                        0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "MegaBstr\nAttck +1",
            },
            attachment_data: {
                timestamp: 1639341119486,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919688011246092348/919688055646994522/attack1_red.zip",
                author_name: "Konstinople",
                author_id: "252196240144597002",
                original_filename: "attack1_red.zip",
                attachment_id: "919688055646994522",
                thread_id: "919688011246092348",
                thread_name: "[OFC][NCP][BN6]Buster parts",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_discord_Konstinople_7692_block_Dab_blue: {
            data: {
                type: "blocks",
                id: "com.discord.Konstinople#7692.block.Dab.blue",
                dependencies: [],
                subpackages: [],
                name: "Dab",
                detail: {
                    color: "Blue",
                    shape: [
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "<o/",
            },
            attachment_data: {
                timestamp: 1639452504916,
                discord_url:
                    "https://cdn.discordapp.com/attachments/920155182053085195/920155240320356412/dab.zip",
                author_name: "Konstinople",
                author_id: "252196240144597002",
                original_filename: "dab.zip",
                attachment_id: "920155240320356412",
                thread_id: "920155182053085195",
                thread_name: "[NCP] Dab",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_example_block_Halo: {
            data: {
                type: "blocks",
                id: "com.example.block.Halo",
                dependencies: [],
                subpackages: [],
                name: "Halo",
                detail: {
                    color: "Yellow",
                    shape: [
                        0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "Sainthood",
            },
            attachment_data: {
                timestamp: 1639466353292,
                discord_url:
                    "https://cdn.discordapp.com/attachments/920213303551221790/920213324271063070/halo.zip",
                author_name: "jamesking",
                author_id: "389909385981329418",
                original_filename: "halo.zip",
                attachment_id: "920213324271063070",
                thread_id: "920213303551221790",
                thread_name: "[CUS][NCP]Halo",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_example_block_SetIce: {
            data: {
                type: "blocks",
                id: "com.example.block.SetIce",
                dependencies: [],
                subpackages: [],
                name: "SetIce",
                detail: {
                    is_program: true,
                    color: "Green",
                    shape: [
                        0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "Set all ice tiles",
            },
            attachment_data: {
                timestamp: 1639465193225,
                discord_url:
                    "https://cdn.discordapp.com/attachments/920208425059758151/920208458891010048/setice.zip",
                author_name: "jamesking",
                author_id: "389909385981329418",
                original_filename: "setice.zip",
                attachment_id: "920208458891010048",
                thread_id: "920208425059758151",
                thread_name: "[OFC][NCP][BN3]Set Ice",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_claris_card_Shotgun4: {
            data: {
                type: "cards",
                id: "com.claris.card.Shotgun4",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_claris_card_Shotgun4_icon.png",
                    preview: "images\\com_claris_card_Shotgun4_preview.png",
                    codes: ["C", "H", "M", "S", "Y", "*"],
                    props: {
                        can_boost: true,
                        shortname: "Sidegun",
                        damage: 30,
                        time_freeze: false,
                        element: "None",
                        description: "Explodes up, down on hit",
                    },
                },
            },
            attachment_data: {
                timestamp: 1639500005649,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919021469823025164/920354472511827968/sidegun.zip",
                author_name: "Maplewood",
                author_id: "191035809820835840",
                original_filename: "sidegun.zip",
                attachment_id: "920354472511827968",
                thread_id: "919021469823025164",
                thread_name: "[OFC] Shotgun series",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_claris_card_Shotgun1: {
            data: {
                type: "cards",
                id: "com.claris.card.Shotgun1",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_claris_card_Shotgun1_icon.png",
                    preview: "images\\com_claris_card_Shotgun1_preview.png",
                    codes: ["B", "F", "J", "N", "T", "*"],
                    props: {
                        can_boost: true,
                        shortname: "Shotgun",
                        damage: 30,
                        time_freeze: false,
                        element: "None",
                        description: "Explodes 1 square behind",
                    },
                },
            },
            attachment_data: {
                timestamp: 1639500005649,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919021469823025164/920354472046264390/shotgun.zip",
                author_name: "Maplewood",
                author_id: "191035809820835840",
                original_filename: "shotgun.zip",
                attachment_id: "920354472046264390",
                thread_id: "919021469823025164",
                thread_name: "[OFC] Shotgun series",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_claris_card_Shotgun3: {
            data: {
                type: "cards",
                id: "com.claris.card.Shotgun3",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_claris_card_Shotgun3_icon.png",
                    preview: "images\\com_claris_card_Shotgun3_preview.png",
                    codes: ["H", "J", "M", "Q", "S", "*"],
                    props: {
                        can_boost: true,
                        shortname: "Crossgun",
                        damage: 30,
                        time_freeze: false,
                        element: "None",
                        description: "Explodes 4 diag. squares",
                    },
                },
            },
            attachment_data: {
                timestamp: 1639500005649,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919021469823025164/920354471874285618/crossgun.zip",
                author_name: "Maplewood",
                author_id: "191035809820835840",
                original_filename: "crossgun.zip",
                attachment_id: "920354471874285618",
                thread_id: "919021469823025164",
                thread_name: "[OFC] Shotgun series",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_claris_card_Shotgun2: {
            data: {
                type: "cards",
                id: "com.claris.card.Shotgun2",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_claris_card_Shotgun2_icon.png",
                    preview: "images\\com_claris_card_Shotgun2_preview.png",
                    codes: ["D", "G", "L", "P", "V", "*"],
                    props: {
                        can_boost: true,
                        shortname: "V-Gun",
                        damage: 30,
                        time_freeze: false,
                        element: "None",
                        description: "Explodes 2 diag. squares",
                    },
                },
            },
            attachment_data: {
                timestamp: 1639500005649,
                discord_url:
                    "https://cdn.discordapp.com/attachments/919021469823025164/920354471681327114/v-gun.zip",
                author_name: "Maplewood",
                author_id: "191035809820835840",
                original_filename: "v-gun.zip",
                attachment_id: "920354471681327114",
                thread_id: "919021469823025164",
                thread_name: "[OFC] Shotgun series",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_discord_Konstinople_7692_card_MachGun: {
            data: {
                type: "cards",
                id: "com.discord.Konstinople#7692.card.MachGun",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_discord_Konstinople_7692_card_MachGun_icon.png",
                    preview:
                        "images\\com_discord_Konstinople_7692_card_MachGun_preview.png",
                    codes: ["A", "R", "T", "*"],
                    props: {
                        can_boost: true,
                        shortname: "MachGun1",
                        damage: 30,
                        time_freeze: false,
                        element: "Cursor",
                        description: "Fire 9sts at row w/clst enmy",
                    },
                },
            },
            attachment_data: {
                timestamp: 1639531421427,
                discord_url:
                    "https://cdn.discordapp.com/attachments/920486217034899466/920486239843524648/machgun.zip",
                author_name: "jamesking",
                author_id: "389909385981329418",
                original_filename: "machgun.zip",
                attachment_id: "920486239843524648",
                thread_id: "920486217034899466",
                thread_name: "[OFC][BN6] Machgun",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_example_mob_duobossfight: {
            data: {
                type: "enemies",
                id: "com.example.mob.duobossfight",
                dependencies: [],
                subpackages: ["com.example.char.Duo"],
                name: "Dangerous Duo",
                detail: {
                    preview: "images\\com_example_mob_duobossfight_preview.png",
                },
                description: "Duo is back too? The nightmare never ends!",
            },
            attachment_data: {
                timestamp: 1639557267016,
                discord_url:
                    "https://cdn.discordapp.com/attachments/920593979198824498/920594643589165076/duo_mob.zip",
                author_name: "jamesking",
                author_id: "389909385981329418",
                original_filename: "duo_mob.zip",
                attachment_id: "920594643589165076",
                thread_id: "920593979198824498",
                thread_name: "[OFC][MOB][BN4] DUO",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_example_player_Eraseman: {
            data: {
                type: "players",
                id: "com.example.player.Eraseman",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_example_player_Eraseman_icon.png",
                    preview: "images\\com_example_player_Eraseman_preview.png",
                },
                description: "Scripted net navi!",
            },
            attachment_data: {
                timestamp: 1639553385967,
                discord_url:
                    "https://cdn.discordapp.com/attachments/920578349221425152/920578365788930128/eraseman.zip",
                author_name: "jamesking",
                author_id: "389909385981329418",
                original_filename: "eraseman.zip",
                attachment_id: "920578365788930128",
                thread_id: "920578349221425152",
                thread_name: "[OFC][PLAYER][BN6] Eraseman",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_navi_megaman: {
            data: {
                type: "players",
                id: "com.navi.megaman",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    preview: "images\\com_navi_megaman_preview.png",
                },
                description: "Megaman! Punk Soul",
            },
            attachment_data: {
                timestamp: 1640666837289,
                discord_url:
                    "https://cdn.discordapp.com/attachments/925079178351628339/925248519370076210/megaman.zip",
                author_name: "D3str0y3d255",
                author_id: "414013449585033216",
                original_filename: "megaman.zip",
                attachment_id: "925248519370076210",
                thread_id: "925079178351628339",
                thread_name: "[Player]megaman wip",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_claris_card_Slasher: {
            data: {
                type: "cards",
                id: "com.claris.card.Slasher",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_claris_card_Slasher_icon.png",
                    preview: "images\\com_claris_card_Slasher_preview.png",
                    codes: ["B", "I", "R"],
                    props: {
                        can_boost: true,
                        shortname: "Slasher",
                        damage: 240,
                        time_freeze: false,
                        element: "Sword",
                        description: "Cuts when A btn is held!",
                    },
                },
            },
            attachment_data: {
                timestamp: 1640816261265,
                discord_url:
                    "https://cdn.discordapp.com/attachments/925199798414503936/925875248648290364/Slasher.zip",
                author_name: "Maplewood",
                author_id: "191035809820835840",
                original_filename: "Slasher.zip",
                attachment_id: "925875248648290364",
                thread_id: "925199798414503936",
                thread_name: "[MIX] Slasher!",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_claris_navi_lan: {
            data: {
                type: "players",
                id: "com.claris.navi.lan",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_claris_navi_lan_icon.png",
                    preview: "images\\com_claris_navi_lan_preview.png",
                },
                description: "It's the boys! Lan & Megaman!",
            },
            attachment_data: {
                timestamp: 1640985162637,
                discord_url:
                    "https://cdn.discordapp.com/attachments/925094993239097486/926583672369455144/lan.zip",
                author_name: "Maplewood",
                author_id: "191035809820835840",
                original_filename: "lan.zip",
                attachment_id: "926583672369455144",
                thread_id: "925094993239097486",
                thread_name: "[MIX][PLAYER] Hikari Bros!",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_discord_Konstinople_7692_cactikil: {
            data: {
                type: "enemies",
                id: "com.discord.Konstinople#7692.cactikil",
                dependencies: [],
                subpackages: [
                    "com.discord.Konstinople#7692.enemy.cactikil",
                    "com.discord.Konstinople#7692.enemy.cactroll",
                    "com.discord.Konstinople#7692.enemy.cacter",
                ],
                name: "Cactikil",
                detail: {
                    preview:
                        "images\\com_discord_Konstinople_7692_cactikil_preview.png",
                },
                description:
                    'Cactikil, known as "Sabotekoron" in Japan, is a cactus',
            },
            attachment_data: {
                timestamp: 1641229834422,
                discord_url:
                    "https://cdn.discordapp.com/attachments/921049513676931162/927609900551503932/cactikil.zip",
                author_name: "Konstinople",
                author_id: "252196240144597002",
                original_filename: "cactikil.zip",
                attachment_id: "927609900551503932",
                thread_id: "921049513676931162",
                thread_name: "[OFC][MOB][BN5] Cactikil",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_ipc_card_LilBomb: {
            data: {
                type: "cards",
                id: "com.ipc.card.LilBomb",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    props: {
                        can_boost: true,
                        shortname: "LilBomb",
                        damage: 50,
                        time_freeze: false,
                        element: "None",
                        description: "Bomb that explodes vertically",
                    },
                    icon: "images\\com_ipc_card_LilBomb_icon.png",
                    preview: "images\\com_ipc_card_LilBomb_preview.png",
                    codes: ["F", "J", "O", "Q", "T", "*"],
                },
            },
            attachment_data: {
                timestamp: 1641362002078,
                discord_url:
                    "https://cdn.discordapp.com/attachments/928164191649538100/928164251590344704/bn2lilbomb.zip",
                author_name: "DJRezzed",
                author_id: "714433270309453856",
                original_filename: "bn2lilbomb.zip",
                attachment_id: "928164251590344704",
                thread_id: "928164191649538100",
                thread_name: "[OFC][BN2][CHIP] Lil-Cross-Bigbomb",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_ipc_card_CrosBomb: {
            data: {
                type: "cards",
                id: "com.ipc.card.CrosBomb",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    props: {
                        can_boost: true,
                        shortname: "CrosBomb",
                        damage: 60,
                        time_freeze: false,
                        element: "None",
                        description: "Bomb that explodes in a cross",
                    },
                    icon: "images\\com_ipc_card_CrosBomb_icon.png",
                    preview: "images\\com_ipc_card_CrosBomb_preview.png",
                    codes: ["O", "Q", "T", "D", "J", "*"],
                },
            },
            attachment_data: {
                timestamp: 1641362002078,
                discord_url:
                    "https://cdn.discordapp.com/attachments/928164191649538100/928164251380625409/bn2crossbomb.zip",
                author_name: "DJRezzed",
                author_id: "714433270309453856",
                original_filename: "bn2crossbomb.zip",
                attachment_id: "928164251380625409",
                thread_id: "928164191649538100",
                thread_name: "[OFC][BN2][CHIP] Lil-Cross-Bigbomb",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_ipc_card_bn2bigbomb: {
            data: {
                type: "cards",
                id: "com.ipc.card.bn2bigbomb",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    props: {
                        can_boost: true,
                        shortname: "Bigbomb",
                        damage: 70,
                        time_freeze: false,
                        element: "None",
                        description: "Bomb with a 9-square explosion",
                    },
                    icon: "images\\com_ipc_card_bn2bigbomb_icon.png",
                    preview: "images\\com_ipc_card_bn2bigbomb_preview.png",
                    codes: ["O", "Q", "T", "V", "Y", "*"],
                },
            },
            attachment_data: {
                timestamp: 1641362002078,
                discord_url:
                    "https://cdn.discordapp.com/attachments/928164191649538100/928164251175112744/bn2bigbomb.zip",
                author_name: "DJRezzed",
                author_id: "714433270309453856",
                original_filename: "bn2bigbomb.zip",
                attachment_id: "928164251175112744",
                thread_id: "928164191649538100",
                thread_name: "[OFC][BN2][CHIP] Lil-Cross-Bigbomb",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_ipc_card_Bigbomb: {
            data: {
                type: "cards",
                id: "com.ipc.card.Bigbomb",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    props: {
                        can_boost: true,
                        shortname: "Bigbomb",
                        damage: 140,
                        time_freeze: false,
                        element: "None",
                        description: "Throws a 9 panl bomb 3panl fwd",
                    },
                    icon: "images\\com_ipc_card_Bigbomb_icon.png",
                    preview: "images\\com_ipc_card_Bigbomb_preview.png",
                    codes: ["O", "P", "V"],
                },
            },
            attachment_data: {
                timestamp: 1641356991211,
                discord_url:
                    "https://cdn.discordapp.com/attachments/928134591137611796/928143234478256208/bigbomb.zip",
                author_name: "DJRezzed",
                author_id: "714433270309453856",
                original_filename: "bigbomb.zip",
                attachment_id: "928143234478256208",
                thread_id: "928134591137611796",
                thread_name: "[OFC][BN6][CHIP] Big Bomb",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_claris_rescued_Roll: {
            data: {
                type: "players",
                id: "com.claris.rescued.Roll",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_claris_rescued_Roll_icon.png",
                    preview: "images\\com_claris_rescued_Roll_preview.png",
                },
                description: "Custom Heal animation!",
            },
            attachment_data: {
                timestamp: 1641421516451,
                discord_url:
                    "https://cdn.discordapp.com/attachments/921800358907510804/928413872971481208/roll.zip",
                author_name: "Maplewood",
                author_id: "191035809820835840",
                original_filename: "roll.zip",
                attachment_id: "928413872971481208",
                thread_id: "921800358907510804",
                thread_name: "[CUS][PLAYER] Roll.EXE!",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_ipc_card_wideblade: {
            data: {
                type: "cards",
                id: "com.ipc.card.wideblade",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_ipc_card_wideblade_icon.png",
                    preview: "images\\com_ipc_card_wideblade_preview.png",
                    codes: ["B", "R", "W"],
                    props: {
                        can_boost: true,
                        shortname: "WideBlde",
                        damage: 150,
                        time_freeze: false,
                        element: "Sword",
                        description: "Cuts enmy in front! Range: 3",
                    },
                },
            },
            attachment_data: {
                timestamp: 1641423588757,
                discord_url:
                    "https://cdn.discordapp.com/attachments/928422527099875338/928422564760539156/wideblade.zip",
                author_name: "DJRezzed",
                author_id: "714433270309453856",
                original_filename: "wideblade.zip",
                attachment_id: "928422564760539156",
                thread_id: "928422527099875338",
                thread_name: "[OFC][BN6][CHIP] Blade family",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
    };
    const opened = writable(false);
    const selectedMod = writable({});
</script>

<Container class="page-header">ONB Mods</Container>

{#await data}
    <Loader />
{:then modList}
    <Modal {opened} title="battlechip">
        <Box css={{ display: "flex" }}>
            <BattleChip mod={$selectedMod} />
            <div class="battle-chip-modal-info">
                <div class="battle-chip-modal-title">
                    {$selectedMod?.attachment_data?.original_filename || ""}
                </div>
                <div class="battle-chip-modal-body">
                    {$selectedMod?.data?.detail?.props?.long_description ||
                        $selectedMod?.data?.detail?.props?.description ||
                        $selectedMod?.data?.description ||
                        ""}
                </div>
            </div>
        </Box>
    </Modal>

    <div class="scroll-container">
        <Grid container columns={24}>
            {#each Object.values(modList) as item}
                <Grid xs={12} sm={4} lg={3} xl={2}>
                    <BattleChip
                        mod={item}
                        on:click={(ev) => {
                            ev.preventDefault();
                            selectedMod.set(item);
                            opened.set(true);
                        }}
                    />
                </Grid>
            {/each}
        </Grid>
    </div>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

<script>
    import { Box, Grid, Loader } from "@svelteuidev/core";
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    import BattleChip from "../../components/BattleChip.svelte";
    import Modal from "../../components/Modal.svelte";

    const isLoading = writable(true);
    const modList = writable({
        com_louise_card_drknbeam: {
            data: {
                type: "cards",
                id: "com.louise.card.drknbeam",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_louise_card_drknbeam_icon.png",
                    preview: "images\\com_louise_card_drknbeam_preview.png",
                    codes: ["N"],
                    props: {
                        can_boost: true,
                        shortname: "DrkNBeam",
                        damage: 400,
                        time_freeze: false,
                        element: "None",
                        description: "UNLEASH SHADOW FORWARD",
                        long_description: "UNLEASH YOUR SHADOW FORWARD",
                        card_class: "Dark",
                        limit: 1,
                    },
                },
            },
            attachment_data: {
                timestamp: 1673979672919,
                discord_url:
                    "https://cdn.discordapp.com/attachments/990936321780514896/1064972678685016134/bn3_darknbeam.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "bn3_darknbeam.zip",
                attachment_id: "1064972678685016134",
                thread_id: "990936321780514896",
                thread_name: "[EXE3] [CHIP] Nobeam",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_louise_Corn: {
            data: {
                type: "enemies",
                id: "com.louise.Corn",
                dependencies: [],
                subpackages: [
                    "com.louise.enemy.Corn.BombCorn",
                    "com.louise.enemy.Corn.MegaCorn",
                    "com.louise.enemy.Corn.GigaCorn",
                ],
                name: "Corn",
                detail: {
                    preview: "images\\com_louise_Corn_preview.png",
                },
                description: "Time for some popcorn",
            },
            attachment_data: {
                timestamp: 1673982279147,
                discord_url:
                    "https://cdn.discordapp.com/attachments/985254222465490944/1064983610005913631/Corn.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "Corn.zip",
                attachment_id: "1064983610005913631",
                thread_id: "985254222465490944",
                thread_name: "[EXE6] [MOB] Corn family",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_ioc_card_corn1: {
            data: {
                type: "cards",
                id: "com.ioc.card.corn1",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_ioc_card_corn1_icon.png",
                    preview: "images\\com_ioc_card_corn1_preview.png",
                    codes: ["J", "K", "L"],
                    props: {
                        can_boost: true,
                        shortname: "CornSht1",
                        damage: 50,
                        time_freeze: false,
                        element: "Wood",
                        description: "Damages enemies w/corn",
                        long_description: "Goes /CLAP!/ when you miss",
                    },
                },
            },
            attachment_data: {
                timestamp: 1648824053201,
                discord_url:
                    "https://cdn.discordapp.com/attachments/959455919400435732/959462362707021864/corn.zip",
                author_name: "DJRezzed",
                author_id: "714433270309453856",
                original_filename: "corn.zip",
                attachment_id: "959462362707021864",
                thread_id: "959455919400435732",
                thread_name: "[WIP] [OFC] [CHIP] [EXE6] Corn Shot series",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_ioc_card_corn2: {
            data: {
                type: "cards",
                id: "com.ioc.card.corn2",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_ioc_card_corn2_icon.png",
                    preview: "images\\com_ioc_card_corn2_preview.png",
                    codes: ["C", "D", "E"],
                    props: {
                        can_boost: true,
                        shortname: "CornSht2",
                        damage: 60,
                        time_freeze: false,
                        element: "Wood",
                        description: "Damages enemies w/corn",
                        long_description: "Goes /CLAP!/ when you miss",
                    },
                },
            },
            attachment_data: {
                timestamp: 1648824118549,
                discord_url:
                    "https://cdn.discordapp.com/attachments/959455919400435732/959462636490211448/corn2.zip",
                author_name: "DJRezzed",
                author_id: "714433270309453856",
                original_filename: "corn2.zip",
                attachment_id: "959462636490211448",
                thread_id: "959455919400435732",
                thread_name: "[WIP] [OFC] [CHIP] [EXE6] Corn Shot series",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_ioc_card_corn3: {
            data: {
                type: "cards",
                id: "com.ioc.card.corn3",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_ioc_card_corn3_icon.png",
                    preview: "images\\com_ioc_card_corn3_preview.png",
                    codes: ["P", "Q", "R"],
                    props: {
                        can_boost: true,
                        shortname: "CornSht3",
                        damage: 70,
                        time_freeze: false,
                        element: "Wood",
                        description: "Damages enemies w/corn",
                        long_description: "Goes /CLAP!/ when you miss",
                    },
                },
            },
            attachment_data: {
                timestamp: 1648824163172,
                discord_url:
                    "https://cdn.discordapp.com/attachments/959455919400435732/959462823681986590/corn3.zip",
                author_name: "DJRezzed",
                author_id: "714433270309453856",
                original_filename: "corn3.zip",
                attachment_id: "959462823681986590",
                thread_id: "959455919400435732",
                thread_name: "[WIP] [OFC] [CHIP] [EXE6] Corn Shot series",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_ipc_card_darkcorn: {
            data: {
                type: "cards",
                id: "com.ipc.card.darkcorn",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_ipc_card_darkcorn_icon.png",
                    preview: "images\\com_ipc_card_darkcorn_preview.png",
                    codes: ["C"],
                    props: {
                        can_boost: true,
                        shortname: "DarkCorn",
                        damage: 150,
                        time_freeze: false,
                        card_class: "Dark",
                        element: "Wood",
                        description: "DAMAGES ENEMY WITH CORN",
                        long_description: "DAMAGES ENEMY WITH CORN",
                    },
                },
            },
            attachment_data: {
                timestamp: 1673979022203,
                discord_url:
                    "https://cdn.discordapp.com/attachments/959455919400435732/1064969949367513178/darkCorn.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "darkCorn.zip",
                attachment_id: "1064969949367513178",
                thread_id: "959455919400435732",
                thread_name: "[WIP] [OFC] [CHIP] [EXE6] Corn Shot series",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_ipc_card_corn3: {
            data: {
                type: "cards",
                id: "com.ipc.card.corn3",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_ipc_card_corn3_icon.png",
                    preview: "images\\com_ipc_card_corn3_preview.png",
                    codes: ["P", "Q", "R"],
                    props: {
                        can_boost: true,
                        shortname: "CornSht3",
                        damage: 70,
                        time_freeze: false,
                        element: "Wood",
                        description: "Damages enemies w/ corn",
                        long_description: "Goes /CLAP!/ when you miss",
                        limit: 3,
                    },
                },
            },
            attachment_data: {
                timestamp: 1673979022203,
                discord_url:
                    "https://cdn.discordapp.com/attachments/959455919400435732/1064969949023588422/bn6_corn3.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "bn6_corn3.zip",
                attachment_id: "1064969949023588422",
                thread_id: "959455919400435732",
                thread_name: "[WIP] [OFC] [CHIP] [EXE6] Corn Shot series",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_ipc_card_corn2: {
            data: {
                type: "cards",
                id: "com.ipc.card.corn2",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_ipc_card_corn2_icon.png",
                    preview: "images\\com_ipc_card_corn2_preview.png",
                    codes: ["C", "D", "E"],
                    props: {
                        can_boost: true,
                        shortname: "CornSht2",
                        damage: 60,
                        time_freeze: false,
                        element: "Wood",
                        description: "Damages enemies w/ corn",
                        long_description: "Goes /CLAP!/ when you miss",
                        limit: 4,
                    },
                },
            },
            attachment_data: {
                timestamp: 1673979022203,
                discord_url:
                    "https://cdn.discordapp.com/attachments/959455919400435732/1064969948658667640/bn6_corn2.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "bn6_corn2.zip",
                attachment_id: "1064969948658667640",
                thread_id: "959455919400435732",
                thread_name: "[WIP] [OFC] [CHIP] [EXE6] Corn Shot series",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_ipc_card_corn1: {
            data: {
                type: "cards",
                id: "com.ipc.card.corn1",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_ipc_card_corn1_icon.png",
                    preview: "images\\com_ipc_card_corn1_preview.png",
                    codes: ["J", "K", "L"],
                    props: {
                        can_boost: true,
                        shortname: "CornSht1",
                        damage: 50,
                        time_freeze: false,
                        element: "Wood",
                        description: "Damages enemies w/ corn",
                        long_description: "Goes /CLAP!/ when you miss",
                        limit: 5,
                    },
                },
            },
            attachment_data: {
                timestamp: 1673979022203,
                discord_url:
                    "https://cdn.discordapp.com/attachments/959455919400435732/1064969948268613683/bn6_corn.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "bn6_corn.zip",
                attachment_id: "1064969948268613683",
                thread_id: "959455919400435732",
                thread_name: "[WIP] [OFC] [CHIP] [EXE6] Corn Shot series",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_alrysc_player_VolcanoMan_EXE: {
            data: {
                type: "players",
                id: "com.alrysc.player.VolcanoMan.EXE",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    preview:
                        "images\\com_alrysc_player_VolcanoMan_EXE_preview.png",
                },
                description: "honekaryudo's navi!",
            },
            attachment_data: {
                timestamp: 1674002549526,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1030239083806609439/1065068630146031696/VolcanoMan.zip",
                author_name: "Alrysc",
                author_id: "362428610444787712",
                original_filename: "VolcanoMan.zip",
                attachment_id: "1065068630146031696",
                thread_id: "1030239083806609439",
                thread_name: "[CUS] [NAVI] VolcanoMan.EXE",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_k1rbyat1na_card_EXE1_138_BluesV3: {
            data: {
                type: "cards",
                id: "com.k1rbyat1na.card.EXE1-138-BluesV3",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_k1rbyat1na_card_EXE1_138_BluesV3_icon.png",
                    preview:
                        "images\\com_k1rbyat1na_card_EXE1_138_BluesV3_preview.png",
                    codes: ["B"],
                    props: {
                        can_boost: true,
                        shortname: "BluesV3",
                        damage: 180,
                        time_freeze: true,
                        element: "None",
                        description: "SuprWdSwd cuts nrst enmy clmn",
                        long_description:
                            "Super Wide Sword cut to the nearest enemy column",
                        card_class: "Mega",
                        limit: 1,
                    },
                },
            },
            attachment_data: {
                timestamp: 1680384538222,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1091836620057083954/1091836631067132044/EXE1-138-BluesV3.zip",
                author_name: "K1rbYat1Na",
                author_id: "239009201530208256",
                original_filename: "EXE1-138-BluesV3.zip",
                attachment_id: "1091836631067132044",
                thread_id: "1091836620057083954",
                thread_name:
                    "[OFC] [CHIP] [EXE1] [BN1] Blues (ProtoMan) series",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_k1rbyat1na_card_EXE1_137_BluesV2: {
            data: {
                type: "cards",
                id: "com.k1rbyat1na.card.EXE1-137-BluesV2",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_k1rbyat1na_card_EXE1_137_BluesV2_icon.png",
                    preview:
                        "images\\com_k1rbyat1na_card_EXE1_137_BluesV2_preview.png",
                    codes: ["B"],
                    props: {
                        can_boost: true,
                        shortname: "BluesV2",
                        damage: 160,
                        time_freeze: true,
                        element: "None",
                        description: "SuprWdSwd cuts nrst enmy clmn",
                        long_description:
                            "Super Wide Sword cut to the nearest enemy column",
                        card_class: "Mega",
                        limit: 1,
                    },
                },
            },
            attachment_data: {
                timestamp: 1680384538222,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1091836620057083954/1091836630756757646/EXE1-137-BluesV2.zip",
                author_name: "K1rbYat1Na",
                author_id: "239009201530208256",
                original_filename: "EXE1-137-BluesV2.zip",
                attachment_id: "1091836630756757646",
                thread_id: "1091836620057083954",
                thread_name:
                    "[OFC] [CHIP] [EXE1] [BN1] Blues (ProtoMan) series",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_k1rbyat1na_card_EXE1_136_Blues: {
            data: {
                type: "cards",
                id: "com.k1rbyat1na.card.EXE1-136-Blues",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_k1rbyat1na_card_EXE1_136_Blues_icon.png",
                    preview:
                        "images\\com_k1rbyat1na_card_EXE1_136_Blues_preview.png",
                    codes: ["B"],
                    props: {
                        can_boost: true,
                        shortname: "Blues",
                        damage: 140,
                        time_freeze: true,
                        element: "None",
                        description: "SuprWdSwd cuts nrst enmy clmn",
                        long_description:
                            "Super Wide Sword cut to the nearest enemy column",
                        card_class: "Mega",
                        limit: 1,
                    },
                },
            },
            attachment_data: {
                timestamp: 1680384538222,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1091836620057083954/1091836630429605940/EXE1-136-Blues.zip",
                author_name: "K1rbYat1Na",
                author_id: "239009201530208256",
                original_filename: "EXE1-136-Blues.zip",
                attachment_id: "1091836630429605940",
                thread_id: "1091836620057083954",
                thread_name:
                    "[OFC] [CHIP] [EXE1] [BN1] Blues (ProtoMan) series",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_k1rbyat1na_card_EXE6_227_BluesSP: {
            data: {
                type: "cards",
                id: "com.k1rbyat1na.card.EXE6-227-BluesSP",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_k1rbyat1na_card_EXE6_227_BluesSP_icon.png",
                    preview:
                        "images\\com_k1rbyat1na_card_EXE6_227_BluesSP_preview.png",
                    codes: ["B"],
                    props: {
                        can_boost: true,
                        shortname: "BluesSP",
                        damage: 240,
                        time_freeze: true,
                        element: "Sword",
                        description: "Warp in and slice the enemy",
                        long_description:
                            "Warp in front of the enemy and slice it, even where you can't warp",
                        card_class: "Mega",
                        limit: 1,
                    },
                },
            },
            attachment_data: {
                timestamp: 1674041400678,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1061651975369932810/1065231583080103956/EXE6-227-BluesSP.zip",
                author_name: "K1rbYat1Na",
                author_id: "239009201530208256",
                original_filename: "EXE6-227-BluesSP.zip",
                attachment_id: "1065231583080103956",
                thread_id: "1061651975369932810",
                thread_name:
                    "[OFC] [CHIP] [EXE1] [EXE6] Blues (ProtoMan) series",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_k1rbyat1na_card_EXE6_226_BluesEX: {
            data: {
                type: "cards",
                id: "com.k1rbyat1na.card.EXE6-226-BluesEX",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_k1rbyat1na_card_EXE6_226_BluesEX_icon.png",
                    preview:
                        "images\\com_k1rbyat1na_card_EXE6_226_BluesEX_preview.png",
                    codes: ["B"],
                    props: {
                        can_boost: true,
                        shortname: "BluesEX",
                        damage: 170,
                        time_freeze: true,
                        element: "Sword",
                        description: "Warp in and slice the enemy",
                        long_description:
                            "Warp in front of the enemy and slice it, even where you can't warp",
                        card_class: "Mega",
                        limit: 1,
                    },
                },
            },
            attachment_data: {
                timestamp: 1674041400678,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1061651975369932810/1065231582702612521/EXE6-226-BluesEX.zip",
                author_name: "K1rbYat1Na",
                author_id: "239009201530208256",
                original_filename: "EXE6-226-BluesEX.zip",
                attachment_id: "1065231582702612521",
                thread_id: "1061651975369932810",
                thread_name:
                    "[OFC] [CHIP] [EXE1] [EXE6] Blues (ProtoMan) series",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_k1rbyat1na_card_EXE6_225_Blues: {
            data: {
                type: "cards",
                id: "com.k1rbyat1na.card.EXE6-225-Blues",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_k1rbyat1na_card_EXE6_225_Blues_icon.png",
                    preview:
                        "images\\com_k1rbyat1na_card_EXE6_225_Blues_preview.png",
                    codes: ["B", "*"],
                    props: {
                        can_boost: true,
                        shortname: "Blues",
                        damage: 150,
                        time_freeze: true,
                        element: "Sword",
                        description: "Warp in and slice the enemy",
                        long_description:
                            "Warp in front of the enemy and slice it, even where you can't warp",
                        card_class: "Mega",
                        limit: 2,
                    },
                },
            },
            attachment_data: {
                timestamp: 1674041400678,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1061651975369932810/1065231582312538182/EXE6-225-Blues.zip",
                author_name: "K1rbYat1Na",
                author_id: "239009201530208256",
                original_filename: "EXE6-225-Blues.zip",
                attachment_id: "1065231582312538182",
                thread_id: "1061651975369932810",
                thread_name:
                    "[OFC] [CHIP] [EXE1] [EXE6] Blues (ProtoMan) series",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_louise_Cutman: {
            data: {
                type: "enemies",
                id: "com.louise.Cutman",
                dependencies: [],
                subpackages: [
                    "com.louise.enemy.Cutman",
                    "com.louise.enemy.Rock",
                ],
                name: "Cutman",
                detail: {
                    preview: "images\\com_louise_Cutman_preview.png",
                },
                description: "Cutman",
            },
            attachment_data: {
                timestamp: 1674055457796,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1039902370777268375/1065290543485161532/Cutman.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "Cutman.zip",
                attachment_id: "1065290543485161532",
                thread_id: "1039902370777268375",
                thread_name: "[EXE2] [MOB] [CUS] Cutman",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_louise_Lark: {
            data: {
                type: "enemies",
                id: "com.louise.Lark",
                dependencies: [],
                subpackages: [
                    "com.louise.enemy.Lark",
                    "com.louise.enemy.Bark",
                    "com.louise.enemy.Tark",
                ],
                name: "Lark",
                detail: {
                    preview: "images\\com_louise_Lark_preview.png",
                },
                description: "A weird fish",
            },
            attachment_data: {
                timestamp: 1674055527158,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1032253517609586750/1065290834456625202/Lark.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "Lark.zip",
                attachment_id: "1065290834456625202",
                thread_id: "1032253517609586750",
                thread_name: "[EXE4][EXE5][MOB][WIP] Lark, Bark and Tark",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_louise_card_Mine: {
            data: {
                type: "cards",
                id: "com.louise.card.Mine",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_louise_card_Mine_icon.png",
                    preview: "images\\com_louise_card_Mine_preview.png",
                    codes: ["A", "S", "T"],
                    props: {
                        can_boost: false,
                        shortname: "Mine",
                        damage: 200,
                        time_freeze: true,
                        element: "None",
                        description: "Places a mine in enmy area",
                        long_description: "Places a mine in enmy area!",
                        limit: 3,
                    },
                },
            },
            attachment_data: {
                timestamp: 1674061136424,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1017929231075921961/1065314361398263878/com_louise_card_Mine.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "com_louise_card_Mine.zip",
                attachment_id: "1065314361398263878",
                thread_id: "1017929231075921961",
                thread_name: "[WIP] [EXE6] [CHIP] Mine",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_louise_Quickman: {
            data: {
                type: "enemies",
                id: "com.louise.Quickman",
                dependencies: [],
                subpackages: ["com.louise.enemy.Quickman"],
                name: "Quickman",
                detail: {
                    preview: "images\\com_louise_Quickman_preview.png",
                },
                description: "Think you can keep up with me?",
            },
            attachment_data: {
                timestamp: 1674063394114,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1023748331807195166/1065323830849061046/Quickman.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "Quickman.zip",
                attachment_id: "1065323830849061046",
                thread_id: "1023748331807195166",
                thread_name: "[EXE2] [BOSS] Quickman",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_louise_Cragger: {
            data: {
                type: "enemies",
                id: "com.louise.Cragger",
                dependencies: [],
                subpackages: ["com.louise.enemy.Cragger"],
                name: "Cragger",
                detail: {
                    preview: "images\\com_louise_Cragger_preview.png",
                },
                description: "What goes around comes around",
            },
            attachment_data: {
                timestamp: 1674063985983,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1044765637161001010/1065326313369505872/Cragger.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "Cragger.zip",
                attachment_id: "1065326313369505872",
                thread_id: "1044765637161001010",
                thread_name: "[EXE6] [MOB] Cragger.",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_louise_Bunny: {
            data: {
                type: "enemies",
                id: "com.louise.Bunny",
                dependencies: [],
                subpackages: [
                    "com.louise.enemy.Bunny",
                    "com.louise.enemy.TuffBunny",
                    "com.louise.enemy.MegaBunny",
                ],
                name: "Bunny",
                detail: {
                    preview: "images\\com_louise_Bunny_preview.png",
                },
                description: "Bn3 Bunny",
            },
            attachment_data: {
                timestamp: 1674073597062,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1000919662126694440/1065366624871383182/Bunny.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "Bunny.zip",
                attachment_id: "1065366624871383182",
                thread_id: "1000919662126694440",
                thread_name: "[EXE2][EXE3][MOB] Bunny.",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_louise_Yort: {
            data: {
                type: "enemies",
                id: "com.louise.Yort",
                dependencies: [],
                subpackages: ["com.louise.enemy.Yort"],
                name: "Yort",
                detail: {
                    preview: "images\\com_louise_Yort_preview.png",
                },
                description: "What goes around comes around",
            },
            attachment_data: {
                timestamp: 1674073546415,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1014146962758578246/1065366412647993404/Yort.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "Yort.zip",
                attachment_id: "1065366412647993404",
                thread_id: "1014146962758578246",
                thread_name: "[EXE2][EXE3][MOB] Yort",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_louise_card_darkdash: {
            data: {
                type: "cards",
                id: "com.louise.card.darkdash",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_louise_card_darkdash_icon.png",
                    preview: "images\\com_louise_card_darkdash_preview.png",
                    codes: ["D"],
                    props: {
                        can_boost: true,
                        shortname: "DarkDash",
                        damage: 360,
                        time_freeze: false,
                        description: "DASH INTO ENEMIES",
                        long_description: "DASH INTO ENEMIES",
                        card_class: "Dark",
                        limit: 1,
                    },
                },
            },
            attachment_data: {
                timestamp: 1674077745341,
                discord_url:
                    "https://cdn.discordapp.com/attachments/984587705591660615/1065384024085897236/bn3_darkdash.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "bn3_darkdash.zip",
                attachment_id: "1065384024085897236",
                thread_id: "984587705591660615",
                thread_name: "[MIX][EXE3] DashAttack Series!",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_louise_card_condor: {
            data: {
                type: "cards",
                id: "com.louise.card.condor",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_louise_card_condor_icon.png",
                    preview: "images\\com_louise_card_condor_preview.png",
                    codes: ["B", "I", "L", "S", "Z"],
                    props: {
                        can_boost: true,
                        shortname: "Condor",
                        damage: 180,
                        time_freeze: false,
                        description: "Chrge attack pierces enemies!",
                        long_description: "Chrge attack pierces enemies!",
                        limit: 3,
                    },
                },
            },
            attachment_data: {
                timestamp: 1674077745341,
                discord_url:
                    "https://cdn.discordapp.com/attachments/984587705591660615/1065384023666458737/bn3_condor.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "bn3_condor.zip",
                attachment_id: "1065384023666458737",
                thread_id: "984587705591660615",
                thread_name: "[MIX][EXE3] DashAttack Series!",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_louise_card_dashattacksp: {
            data: {
                type: "cards",
                id: "com.louise.card.dashattacksp",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_louise_card_dashattacksp_icon.png",
                    preview: "images\\com_louise_card_dashattacksp_preview.png",
                    codes: ["F", "I", "S", "H", "Y"],
                    props: {
                        can_boost: true,
                        shortname: "DashAtkSP",
                        damage: 270,
                        time_freeze: false,
                        description: "Dash into foes!",
                        long_description: "Dash into foes!",
                        limit: 1,
                    },
                },
            },
            attachment_data: {
                timestamp: 1674077745341,
                discord_url:
                    "https://cdn.discordapp.com/attachments/984587705591660615/1065384023276392551/bn3_dashsp.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "bn3_dashsp.zip",
                attachment_id: "1065384023276392551",
                thread_id: "984587705591660615",
                thread_name: "[MIX][EXE3] DashAttack Series!",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_louise_card_dashattck: {
            data: {
                type: "cards",
                id: "com.louise.card.dashattck",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_louise_card_dashattck_icon.png",
                    preview: "images\\com_louise_card_dashattck_preview.png",
                    codes: ["C", "D", "G", "J", "Z", "*"],
                    props: {
                        can_boost: true,
                        shortname: "DashAtk",
                        damage: 90,
                        time_freeze: false,
                        description: "Dash through enemies!",
                        long_description: "Dash through enemies!",
                        limit: 3,
                    },
                },
            },
            attachment_data: {
                timestamp: 1674077745341,
                discord_url:
                    "https://cdn.discordapp.com/attachments/984587705591660615/1065384022936657950/bn3_dashatk.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "bn3_dashatk.zip",
                attachment_id: "1065384022936657950",
                thread_id: "984587705591660615",
                thread_name: "[MIX][EXE3] DashAttack Series!",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_louise_Fishy: {
            data: {
                type: "enemies",
                id: "com.louise.Fishy",
                dependencies: [],
                subpackages: ["com.louise.enemy.Fishy"],
                name: "Fishy",
                detail: {
                    preview: "images\\com_louise_Fishy_preview.png",
                },
                description: "BN3 Fishy Battle!",
            },
            attachment_data: {
                timestamp: 1674085476794,
                discord_url:
                    "https://cdn.discordapp.com/attachments/979565503771205712/1065416452254994512/fishy.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "fishy.zip",
                attachment_id: "1065416452254994512",
                thread_id: "979565503771205712",
                thread_name: "[EXE3] [MOB] Fishy",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_louise_hardheadchip: {
            data: {
                type: "cards",
                id: "com.louise.hardheadchip",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_louise_hardheadchip_icon.png",
                    preview: "images\\com_louise_hardheadchip_preview.png",
                    codes: ["A", "D", "E", "H", "R"],
                    props: {
                        can_boost: false,
                        shortname: "HardHead",
                        damage: 0,
                        time_freeze: true,
                        element: "None",
                        description: "Summons a HardHead to fight!",
                        long_description: "Summons a HardHead to attack!",
                        card_class: "Standard",
                        limit: 3,
                    },
                },
            },
            attachment_data: {
                timestamp: 1674085547546,
                discord_url:
                    "https://cdn.discordapp.com/attachments/990059781060452362/1065416748989435904/HardHeadChip.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "HardHeadChip.zip",
                attachment_id: "1065416748989435904",
                thread_id: "990059781060452362",
                thread_name: "[CUS] [EXE3] HardHead Chip",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_louise_card_airman: {
            data: {
                type: "cards",
                id: "com.louise.card.airman",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_louise_card_airman_icon.png",
                    preview: "images\\com_louise_card_airman_preview.png",
                    codes: ["A", "*"],
                    props: {
                        can_boost: true,
                        shortname: "AirMan",
                        damage: 40,
                        time_freeze: true,
                        element: "Wind",
                        description: "Shoots 3 twisters!",
                        long_description: "Shoots air twisters in a line",
                        card_class: "Mega",
                        limit: 1,
                    },
                },
            },
            attachment_data: {
                timestamp: 1674103676656,
                discord_url:
                    "https://cdn.discordapp.com/attachments/977369247653175317/1065492787258200064/bn2_airman.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "bn2_airman.zip",
                attachment_id: "1065492787258200064",
                thread_id: "977369247653175317",
                thread_name: "[EXE2] [Chip] Airman",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_louise_card_airmanv3: {
            data: {
                type: "cards",
                id: "com.louise.card.airmanv3",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_louise_card_airmanv3_icon.png",
                    preview: "images\\com_louise_card_airmanv3_preview.png",
                    codes: ["A"],
                    props: {
                        can_boost: true,
                        shortname: "AirManV3",
                        damage: 100,
                        time_freeze: true,
                        element: "Wind",
                        description: "Shoots 3 twisters!",
                        long_description: "Shoots air twisters in a line",
                        card_class: "Mega",
                        limit: 1,
                    },
                },
            },
            attachment_data: {
                timestamp: 1674103676656,
                discord_url:
                    "https://cdn.discordapp.com/attachments/977369247653175317/1065492787820253225/bn2_airmanv3.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "bn2_airmanv3.zip",
                attachment_id: "1065492787820253225",
                thread_id: "977369247653175317",
                thread_name: "[EXE2] [Chip] Airman",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_louise_card_airmanv2: {
            data: {
                type: "cards",
                id: "com.louise.card.airmanv2",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_louise_card_airmanv2_icon.png",
                    preview: "images\\com_louise_card_airmanv2_preview.png",
                    codes: ["A", "*"],
                    props: {
                        can_boost: true,
                        shortname: "AirManV2",
                        damage: 70,
                        time_freeze: true,
                        element: "Wind",
                        description: "Shoots 3 twisters!",
                        long_description: "Shoots air twisters in a line",
                        card_class: "Mega",
                        limit: 1,
                    },
                },
            },
            attachment_data: {
                timestamp: 1674103676656,
                discord_url:
                    "https://cdn.discordapp.com/attachments/977369247653175317/1065492787551797328/bn2_airmanv2.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "bn2_airmanv2.zip",
                attachment_id: "1065492787551797328",
                thread_id: "977369247653175317",
                thread_name: "[EXE2] [Chip] Airman",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_louise_card_airmands: {
            data: {
                type: "cards",
                id: "com.louise.card.airmands",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_louise_card_airmands_icon.png",
                    preview: "images\\com_louise_card_airmands_preview.png",
                    codes: ["A"],
                    props: {
                        can_boost: true,
                        shortname: "AirManDS",
                        damage: 150,
                        time_freeze: true,
                        element: "Wind",
                        description: "Shoots 3 twisters!",
                        long_description: "Shoots air twisters in a line",
                        card_class: "Mega",
                        limit: 1,
                    },
                },
            },
            attachment_data: {
                timestamp: 1674103676656,
                discord_url:
                    "https://cdn.discordapp.com/attachments/977369247653175317/1065492788147392574/bn2_airmands.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "bn2_airmands.zip",
                attachment_id: "1065492788147392574",
                thread_id: "977369247653175317",
                thread_name: "[EXE2] [Chip] Airman",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_k1rbyat1na_card_EXE3_291_Serenade: {
            data: {
                type: "cards",
                id: "com.k1rbyat1na.card.EXE3-291-Serenade",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_k1rbyat1na_card_EXE3_291_Serenade_icon.png",
                    preview:
                        "images\\com_k1rbyat1na_card_EXE3_291_Serenade_preview.png",
                    codes: ["S"],
                    props: {
                        can_boost: true,
                        shortname: "Serenade",
                        damage: 100,
                        time_freeze: true,
                        element: "None",
                        description: "Dark chip Holy pwr to front",
                        long_description:
                            "Chip of Darkness: Holy power attack to front area",
                        card_class: "Giga",
                        limit: 1,
                    },
                },
            },
            attachment_data: {
                timestamp: 1669903733098,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1046044290037592114/1047876947969064970/EXE3-291-Serenade.zip",
                author_name: "K1rbYat1Na",
                author_id: "239009201530208256",
                original_filename: "EXE3-291-Serenade.zip",
                attachment_id: "1047876947969064970",
                thread_id: "1046044290037592114",
                thread_name: "[OFC] [EXE3] [CHIP] Serenade",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_louise_card_tankcan3: {
            data: {
                type: "cards",
                id: "com.louise.card.tankcan3",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_louise_card_tankcan3_icon.png",
                    preview: "images\\com_louise_card_tankcan3_preview.png",
                    codes: ["B", "M", "P"],
                    props: {
                        can_boost: true,
                        shortname: "TankCan3",
                        damage: 200,
                        time_freeze: false,
                        element: "None",
                        description: "3sq blast if hits end row",
                        long_description: "3square blast if hits end row",
                        limit: 3,
                    },
                },
            },
            attachment_data: {
                timestamp: 1674181035051,
                discord_url:
                    "https://cdn.discordapp.com/attachments/996224366977220640/1065817252672327800/com_louise_card_tankcan3.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "com_louise_card_tankcan3.zip",
                attachment_id: "1065817252672327800",
                thread_id: "996224366977220640",
                thread_name: "[EXE6] [CHIP] Tank Cannon",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_louise_card_tankcan2: {
            data: {
                type: "cards",
                id: "com.louise.card.tankcan2",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_louise_card_tankcan2_icon.png",
                    preview: "images\\com_louise_card_tankcan2_preview.png",
                    codes: ["L", "S", "V"],
                    props: {
                        can_boost: true,
                        shortname: "TankCan2",
                        damage: 160,
                        time_freeze: false,
                        element: "None",
                        description: "3sq blast if hits end row",
                        long_description: "3square blast if hits end row",
                        limit: 4,
                    },
                },
            },
            attachment_data: {
                timestamp: 1674181035051,
                discord_url:
                    "https://cdn.discordapp.com/attachments/996224366977220640/1065817252240310272/com_louise_card_tankcan2.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "com_louise_card_tankcan2.zip",
                attachment_id: "1065817252240310272",
                thread_id: "996224366977220640",
                thread_name: "[EXE6] [CHIP] Tank Cannon",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_louise_card_tankcan1: {
            data: {
                type: "cards",
                id: "com.louise.card.tankcan1",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_louise_card_tankcan1_icon.png",
                    preview: "images\\com_louise_card_tankcan1_preview.png",
                    codes: ["A", "G", "R"],
                    props: {
                        can_boost: true,
                        shortname: "TankCan1",
                        damage: 120,
                        time_freeze: false,
                        element: "None",
                        description: "3sq blast if hits end row",
                        long_description: "3square blast if hits end row",
                    },
                },
            },
            attachment_data: {
                timestamp: 1674181035051,
                discord_url:
                    "https://cdn.discordapp.com/attachments/996224366977220640/1065817251825078402/com_louise_card_tankcan1.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "com_louise_card_tankcan1.zip",
                attachment_id: "1065817251825078402",
                thread_id: "996224366977220640",
                thread_name: "[EXE6] [CHIP] Tank Cannon",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_louise_card_darktankcan: {
            data: {
                type: "cards",
                id: "com.louise.card.darktankcan",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_louise_card_darktankcan_icon.png",
                    preview: "images\\com_louise_card_darktankcan_preview.png",
                    codes: ["T"],
                    props: {
                        can_boost: true,
                        shortname: "DrkTkCan",
                        damage: 400,
                        time_freeze: false,
                        element: "None",
                        description: "3SQ BLAST IF HITS END ROW",
                        long_description: "3SQ BLAST IF HITS END ROW",
                        limit: 1,
                        card_class: "Dark",
                    },
                },
            },
            attachment_data: {
                timestamp: 1673975883458,
                discord_url:
                    "https://cdn.discordapp.com/attachments/996224366977220640/1064956784470655036/bn5_darktankcan.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "bn5_darktankcan.zip",
                attachment_id: "1064956784470655036",
                thread_id: "996224366977220640",
                thread_name: "[EXE6] [CHIP] Tank Cannon",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_claris_k1rbyat1na_card_EXE6_004_AirShoot: {
            data: {
                type: "cards",
                id: "com.claris.k1rbyat1na.card.EXE6-004-AirShoot",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_claris_k1rbyat1na_card_EXE6_004_AirShoot_icon.png",
                    preview:
                        "images\\com_claris_k1rbyat1na_card_EXE6_004_AirShoot_preview.png",
                    codes: ["*"],
                    props: {
                        can_boost: true,
                        shortname: "AirShoot",
                        damage: 20,
                        time_freeze: false,
                        element: "Wind",
                        description: "Knock enmy back 1 square",
                        long_description:
                            "Air cannon pushes a hitted target 1 square back",
                        card_class: "Standard",
                        limit: 5,
                    },
                },
            },
            attachment_data: {
                timestamp: 1680448188108,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1060310182355288104/1092103597862428764/EXE6-004-AirShoot.zip",
                author_name: "K1rbYat1Na",
                author_id: "239009201530208256",
                original_filename: "EXE6-004-AirShoot.zip",
                attachment_id: "1092103597862428764",
                thread_id: "1060310182355288104",
                thread_name: "[OFC] [CHIP] [EXE6] [BN6] Air Shoot (Air Shot)",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_alrysc_player_Yorihime: {
            data: {
                type: "players",
                id: "com.alrysc.player.Yorihime",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    preview: "images\\com_alrysc_player_Yorihime_preview.png",
                },
                description: "Yorihime.EXE from Gensou Network!",
            },
            attachment_data: {
                timestamp: 1679892596122,
                discord_url:
                    "https://cdn.discordapp.com/attachments/967943141749567599/1089773276089290762/Yorihime.zip",
                author_name: "Alrysc",
                author_id: "362428610444787712",
                original_filename: "Yorihime.zip",
                attachment_id: "1089773276089290762",
                thread_id: "967943141749567599",
                thread_name: "[CUS] [GENSO] [NAVI] Yorihime.EXE",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_D3stroy3d_player_Groundman: {
            data: {
                type: "players",
                id: "com.D3stroy3d.player.Groundman",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    preview:
                        "images\\com_D3stroy3d_player_Groundman_preview.png",
                },
                description: "A ground breaking experience",
            },
            attachment_data: {
                timestamp: 1674760740435,
                discord_url:
                    "https://cdn.discordapp.com/attachments/959588141616988232/1068248713287438407/GroundMan_Redux.zip",
                author_name: "D3str0y3d255",
                author_id: "414013449585033216",
                original_filename: "GroundMan_Redux.zip",
                attachment_id: "1068248713287438407",
                thread_id: "959588141616988232",
                thread_name: "[OFC][NAVI] Groundman",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_alrysc_player_YumekoEXE: {
            data: {
                type: "players",
                id: "com.alrysc.player.YumekoEXE",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    preview: "images\\com_alrysc_player_YumekoEXE_preview.png",
                },
                description: "Mayumi Shinki's navi!",
            },
            attachment_data: {
                timestamp: 1675119075716,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1069751579755954286/1069751680503132241/YumekoEXE.zip",
                author_name: "Alrysc",
                author_id: "362428610444787712",
                original_filename: "YumekoEXE.zip",
                attachment_id: "1069751680503132241",
                thread_id: "1069751579755954286",
                thread_name: "[GENSO] [NAVI] Yumeko.EXE",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_alrysc_player_IkuEXE: {
            data: {
                type: "players",
                id: "com.alrysc.player.IkuEXE",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    preview: "images\\com_alrysc_player_IkuEXE_preview.png",
                },
                description: "Tenshi Hinanawi's navi!",
            },
            attachment_data: {
                timestamp: 1675129253157,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1069752166673289348/1069794367671390319/IkuEXE.zip",
                author_name: "Alrysc",
                author_id: "362428610444787712",
                original_filename: "IkuEXE.zip",
                attachment_id: "1069794367671390319",
                thread_id: "1069752166673289348",
                thread_name: "[GENSO] [NAVI] Iku.EXE",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_alrysc_card_KogasaX: {
            data: {
                type: "cards",
                id: "com.alrysc.card.KogasaX",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_alrysc_card_KogasaX_icon.png",
                    preview: "images\\com_alrysc_card_KogasaX_preview.png",
                    codes: ["K", "X"],
                    props: {
                        can_boost: true,
                        shortname: "KogasaX",
                        damage: 190,
                        time_freeze: true,
                        element: "Aqua",
                        description: "Raindrops make foe slip!",
                        card_class: "Mega",
                        limit: 1,
                    },
                },
            },
            attachment_data: {
                timestamp: 1665542370080,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1029082625882734622/1029584065596248144/KogasaX.zip",
                author_name: "Alrysc",
                author_id: "362428610444787712",
                original_filename: "KogasaX.zip",
                attachment_id: "1029584065596248144",
                thread_id: "1029082625882734622",
                thread_name: "[GENSO] [CUS] [CHIP] Kogasa Series",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_alrysc_card_KogasaV3: {
            data: {
                type: "cards",
                id: "com.alrysc.card.KogasaV3",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_alrysc_card_KogasaV3_icon.png",
                    preview: "images\\com_alrysc_card_KogasaV3_preview.png",
                    codes: ["K", "T"],
                    props: {
                        can_boost: true,
                        shortname: "KogasaV3",
                        damage: 160,
                        time_freeze: true,
                        element: "Aqua",
                        description: "Raindrops make foe slip!",
                        card_class: "Mega",
                        limit: 1,
                    },
                },
            },
            attachment_data: {
                timestamp: 1665542370080,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1029082625882734622/1029584065248120943/KogasaV3.zip",
                author_name: "Alrysc",
                author_id: "362428610444787712",
                original_filename: "KogasaV3.zip",
                attachment_id: "1029584065248120943",
                thread_id: "1029082625882734622",
                thread_name: "[GENSO] [CUS] [CHIP] Kogasa Series",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_alrysc_card_KogasaV2: {
            data: {
                type: "cards",
                id: "com.alrysc.card.KogasaV2",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_alrysc_card_KogasaV2_icon.png",
                    preview: "images\\com_alrysc_card_KogasaV2_preview.png",
                    codes: ["K", "T"],
                    props: {
                        can_boost: true,
                        shortname: "KogasaV2",
                        damage: 140,
                        time_freeze: true,
                        element: "Aqua",
                        description: "Raindrops make foe slip!",
                        card_class: "Mega",
                        limit: 2,
                    },
                },
            },
            attachment_data: {
                timestamp: 1665542370080,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1029082625882734622/1029584064916762756/KogasaV2.zip",
                author_name: "Alrysc",
                author_id: "362428610444787712",
                original_filename: "KogasaV2.zip",
                attachment_id: "1029584064916762756",
                thread_id: "1029082625882734622",
                thread_name: "[GENSO] [CUS] [CHIP] Kogasa Series",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_alrysc_card_KogasaV1: {
            data: {
                type: "cards",
                id: "com.alrysc.card.KogasaV1",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_alrysc_card_KogasaV1_icon.png",
                    preview: "images\\com_alrysc_card_KogasaV1_preview.png",
                    codes: ["K", "T", "*"],
                    props: {
                        can_boost: true,
                        shortname: "Kogasa",
                        damage: 120,
                        time_freeze: true,
                        element: "Aqua",
                        description: "Raindrops make foe slip!",
                        card_class: "Mega",
                        limit: 4,
                    },
                },
            },
            attachment_data: {
                timestamp: 1665542370080,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1029082625882734622/1029584064623153222/KogasaV1.zip",
                author_name: "Alrysc",
                author_id: "362428610444787712",
                original_filename: "KogasaV1.zip",
                attachment_id: "1029584064623153222",
                thread_id: "1029082625882734622",
                thread_name: "[GENSO] [CUS] [CHIP] Kogasa Series",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_hinoken_firemanV2: {
            data: {
                type: "enemies",
                id: "com.hinoken.firemanV2",
                dependencies: [],
                subpackages: ["com.hinoken.Enemy.firemanvs2"],
                name: "FireMan",
                detail: {
                    preview: "images\\com_hinoken_firemanV2_preview.png",
                },
                description: "Something is off..",
            },
            attachment_data: {
                timestamp: 1675213067704,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1070112574110179328/1070145911491153960/hinoken_firemanv2.zip",
                author_name: "DJRezzed",
                author_id: "714433270309453856",
                original_filename: "hinoken_firemanv2.zip",
                attachment_id: "1070145911491153960",
                thread_id: "1070112574110179328",
                thread_name: "[MIX][MOB] FireMan.exe",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_hinoken_fireman: {
            data: {
                type: "enemies",
                id: "com.hinoken.fireman",
                dependencies: [],
                subpackages: ["com.hinoken.Enemy.firemanvs"],
                name: "FireMan",
                detail: {
                    preview: "images\\com_hinoken_fireman_preview.png",
                },
                description:
                    "A mysterious navi appe....IS THAT OUR OVEN? Not again...",
            },
            attachment_data: {
                timestamp: 1675213067704,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1070112574110179328/1070145911092678656/hinoken_fireman.zip",
                author_name: "DJRezzed",
                author_id: "714433270309453856",
                original_filename: "hinoken_fireman.zip",
                attachment_id: "1070145911092678656",
                thread_id: "1070112574110179328",
                thread_name: "[MIX][MOB] FireMan.exe",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_hinoken_firemanV3: {
            data: {
                type: "enemies",
                id: "com.hinoken.firemanV3",
                dependencies: [],
                subpackages: ["com.hinoken.Enemy.firemanvs3"],
                name: "FireMan",
                detail: {
                    preview: "images\\com_hinoken_firemanV3_preview.png",
                },
                description: "I can barely see anthing...its too bright",
            },
            attachment_data: {
                timestamp: 1675213067704,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1070112574110179328/1070145910585163776/hinoken_firemanv3.zip",
                author_name: "DJRezzed",
                author_id: "714433270309453856",
                original_filename: "hinoken_firemanv3.zip",
                attachment_id: "1070145910585163776",
                thread_id: "1070112574110179328",
                thread_name: "[MIX][MOB] FireMan.exe",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_k1rbyat1na_card_EXE1_038_TripleLance: {
            data: {
                type: "cards",
                id: "com.k1rbyat1na.card.EXE1-038-TripleLance",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_k1rbyat1na_card_EXE1_038_TripleLance_icon.png",
                    preview:
                        "images\\com_k1rbyat1na_card_EXE1_038_TripleLance_preview.png",
                    codes: ["K", "L", "M", "N", "O"],
                    props: {
                        can_boost: true,
                        shortname: "TriLance",
                        damage: 60,
                        time_freeze: false,
                        element: "None",
                        description: "Fires a 3-lance burst",
                        long_description: "Fires a 3-shot lance",
                        card_class: "Standard",
                        limit: 5,
                    },
                },
            },
            attachment_data: {
                timestamp: 1680448576391,
                discord_url:
                    "https://cdn.discordapp.com/attachments/975505821670703207/1092105226418405457/EXE1-038-TripleLance.zip",
                author_name: "K1rbYat1Na",
                author_id: "239009201530208256",
                original_filename: "EXE1-038-TripleLance.zip",
                attachment_id: "1092105226418405457",
                thread_id: "975505821670703207",
                thread_name:
                    "[OFC] [CHIP] [EXE1] [BN1] [EXEOSS] Triple Arrow, Triple Spear, Triple Lance",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_k1rbyat1na_card_EXE1_037_TripleSpear: {
            data: {
                type: "cards",
                id: "com.k1rbyat1na.card.EXE1-037-TripleSpear",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_k1rbyat1na_card_EXE1_037_TripleSpear_icon.png",
                    preview:
                        "images\\com_k1rbyat1na_card_EXE1_037_TripleSpear_preview.png",
                    codes: ["F", "G", "H", "I", "J"],
                    props: {
                        can_boost: true,
                        shortname: "TriSpear",
                        damage: 50,
                        time_freeze: false,
                        element: "None",
                        description: "Fires a 3-spear burst",
                        long_description: "Fires a 3-shot spear",
                        card_class: "Standard",
                        limit: 5,
                    },
                },
            },
            attachment_data: {
                timestamp: 1680448576391,
                discord_url:
                    "https://cdn.discordapp.com/attachments/975505821670703207/1092105226099626104/EXE1-037-TripleSpear.zip",
                author_name: "K1rbYat1Na",
                author_id: "239009201530208256",
                original_filename: "EXE1-037-TripleSpear.zip",
                attachment_id: "1092105226099626104",
                thread_id: "975505821670703207",
                thread_name:
                    "[OFC] [CHIP] [EXE1] [BN1] [EXEOSS] Triple Arrow, Triple Spear, Triple Lance",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_k1rbyat1na_card_EXE1_036_TripleArrow: {
            data: {
                type: "cards",
                id: "com.k1rbyat1na.card.EXE1-036-TripleArrow",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_k1rbyat1na_card_EXE1_036_TripleArrow_icon.png",
                    preview:
                        "images\\com_k1rbyat1na_card_EXE1_036_TripleArrow_preview.png",
                    codes: ["A", "B", "C", "D", "E"],
                    props: {
                        can_boost: true,
                        shortname: "TriArrow",
                        damage: 40,
                        time_freeze: false,
                        element: "None",
                        description: "Fires a 3-arrow burst",
                        long_description: "Fires a 3-shot arrow",
                        card_class: "Standard",
                        limit: 5,
                    },
                },
            },
            attachment_data: {
                timestamp: 1680448576391,
                discord_url:
                    "https://cdn.discordapp.com/attachments/975505821670703207/1092105225709568060/EXE1-036-TripleArrow.zip",
                author_name: "K1rbYat1Na",
                author_id: "239009201530208256",
                original_filename: "EXE1-036-TripleArrow.zip",
                attachment_id: "1092105225709568060",
                thread_id: "975505821670703207",
                thread_name:
                    "[OFC] [CHIP] [EXE1] [BN1] [EXEOSS] Triple Arrow, Triple Spear, Triple Lance",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_k1rbyat1na_card_EXE2_054_Trident: {
            data: {
                type: "cards",
                id: "com.k1rbyat1na.card.EXE2-054-Trident",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_k1rbyat1na_card_EXE2_054_Trident_icon.png",
                    preview:
                        "images\\com_k1rbyat1na_card_EXE2_054_Trident_preview.png",
                    codes: ["E", "I", "K", "O", "T"],
                    props: {
                        can_boost: true,
                        shortname: "Trident",
                        damage: 60,
                        time_freeze: false,
                        element: "None",
                        description: "3 volleys of spears!",
                        long_description: "Launch 3 spears in a row!",
                        card_class: "Standard",
                        limit: 5,
                    },
                },
            },
            attachment_data: {
                timestamp: 1680448398180,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1071044748162388068/1092104478762733568/EXE2-054-Trident.zip",
                author_name: "K1rbYat1Na",
                author_id: "239009201530208256",
                original_filename: "EXE2-054-Trident.zip",
                attachment_id: "1092104478762733568",
                thread_id: "1071044748162388068",
                thread_name:
                    "[OFC] [CHIP] [EXE2] [BN2] Double Needle, Triple Needle, Tetra Needle (Quad Needle), Trident",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_k1rbyat1na_card_EXE2_053_TetraNeedle: {
            data: {
                type: "cards",
                id: "com.k1rbyat1na.card.EXE2-053-TetraNeedle",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_k1rbyat1na_card_EXE2_053_TetraNeedle_icon.png",
                    preview:
                        "images\\com_k1rbyat1na_card_EXE2_053_TetraNeedle_preview.png",
                    codes: ["C", "H", "I", "P", "U"],
                    props: {
                        can_boost: true,
                        shortname: "TetraNdl",
                        damage: 50,
                        time_freeze: false,
                        element: "None",
                        description: "4 volleys of needles!",
                        long_description: "Launch 4 needles in a row!",
                        card_class: "Standard",
                        limit: 5,
                    },
                },
            },
            attachment_data: {
                timestamp: 1680448398180,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1071044748162388068/1092104478364286976/EXE2-053-TetraNeedle.zip",
                author_name: "K1rbYat1Na",
                author_id: "239009201530208256",
                original_filename: "EXE2-053-TetraNeedle.zip",
                attachment_id: "1092104478364286976",
                thread_id: "1071044748162388068",
                thread_name:
                    "[OFC] [CHIP] [EXE2] [BN2] Double Needle, Triple Needle, Tetra Needle (Quad Needle), Trident",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_k1rbyat1na_card_EXE2_052_TripleNeedle: {
            data: {
                type: "cards",
                id: "com.k1rbyat1na.card.EXE2-052-TripleNeedle",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_k1rbyat1na_card_EXE2_052_TripleNeedle_icon.png",
                    preview:
                        "images\\com_k1rbyat1na_card_EXE2_052_TripleNeedle_preview.png",
                    codes: ["C", "I", "M", "T", "V"],
                    props: {
                        can_boost: true,
                        shortname: "TriplNdl",
                        damage: 50,
                        time_freeze: false,
                        element: "None",
                        description: "3 volleys of needles!",
                        long_description: "Launch 3 needles in a row!",
                        card_class: "Standard",
                        limit: 5,
                    },
                },
            },
            attachment_data: {
                timestamp: 1680448398180,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1071044748162388068/1092104478100041789/EXE2-052-TripleNeedle.zip",
                author_name: "K1rbYat1Na",
                author_id: "239009201530208256",
                original_filename: "EXE2-052-TripleNeedle.zip",
                attachment_id: "1092104478100041789",
                thread_id: "1071044748162388068",
                thread_name:
                    "[OFC] [CHIP] [EXE2] [BN2] Double Needle, Triple Needle, Tetra Needle (Quad Needle), Trident",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_k1rbyat1na_card_EXE2_051_DoubleNeedle: {
            data: {
                type: "cards",
                id: "com.k1rbyat1na.card.EXE2-051-DoubleNeedle",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\com_k1rbyat1na_card_EXE2_051_DoubleNeedle_icon.png",
                    preview:
                        "images\\com_k1rbyat1na_card_EXE2_051_DoubleNeedle_preview.png",
                    codes: ["A", "C", "F", "I", "J"],
                    props: {
                        can_boost: true,
                        shortname: "DoublNdl",
                        damage: 50,
                        time_freeze: false,
                        element: "None",
                        description: "2 volleys of needles!",
                        long_description: "Launch 2 needles in a row!",
                        card_class: "Standard",
                        limit: 5,
                    },
                },
            },
            attachment_data: {
                timestamp: 1680448398180,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1071044748162388068/1092104477655437432/EXE2-051-DoubleNeedle.zip",
                author_name: "K1rbYat1Na",
                author_id: "239009201530208256",
                original_filename: "EXE2-051-DoubleNeedle.zip",
                attachment_id: "1092104477655437432",
                thread_id: "1071044748162388068",
                thread_name:
                    "[OFC] [CHIP] [EXE2] [BN2] Double Needle, Triple Needle, Tetra Needle (Quad Needle), Trident",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_Thor_Gutsman_V2: {
            data: {
                type: "enemies",
                id: "com.Thor.Gutsman_V2",
                dependencies: ["com.Thor.enemy.Gutsman_V1"],
                subpackages: [],
                name: "GutsMan V2",
                detail: {
                    preview: "images\\com_Thor_Gutsman_V2_preview.png",
                },
                description: "BN3 GutsMan V2 (Alpha) Battle!",
            },
            attachment_data: {
                timestamp: 1642490499058,
                discord_url:
                    "https://cdn.discordapp.com/attachments/928447687605485580/932897511008526366/Gutsman_V2.zip",
                author_name: "SusThor",
                author_id: "715825982644420668",
                original_filename: "Gutsman_V2.zip",
                attachment_id: "932897511008526366",
                thread_id: "928447687605485580",
                thread_name: "[OFW][BN3][MOB] GutsMan Fights",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_Thor_Gutsman_V1: {
            data: {
                type: "enemies",
                id: "com.Thor.Gutsman_V1",
                dependencies: [],
                subpackages: ["com.Thor.enemy.Gutsman_V1"],
                name: "GutsMan V1",
                detail: {
                    preview: "images\\com_Thor_Gutsman_V1_preview.png",
                },
                description: "BN3 GutsMan V1 Battle!",
            },
            attachment_data: {
                timestamp: 1657586704873,
                discord_url:
                    "https://cdn.discordapp.com/attachments/928447687605485580/996215587380408340/Gutsman_V1.zip",
                author_name: "SusThor",
                author_id: "715825982644420668",
                original_filename: "Gutsman_V1.zip",
                attachment_id: "996215587380408340",
                thread_id: "928447687605485580",
                thread_name: "[OFW][BN3][MOB] GutsMan Fights",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_Thor_Gutsman_V4: {
            data: {
                type: "enemies",
                id: "com.Thor.Gutsman_V4",
                dependencies: ["com.Thor.enemy.Gutsman_V1"],
                subpackages: [],
                name: "GutsMan SP",
                detail: {
                    preview: "images\\com_Thor_Gutsman_V4_preview.png",
                },
                description: "BN3 GutsMan SP (Omega) Battle!",
            },
            attachment_data: {
                timestamp: 1642490499058,
                discord_url:
                    "https://cdn.discordapp.com/attachments/928447687605485580/932897510651994142/Gutsman_V4.zip",
                author_name: "SusThor",
                author_id: "715825982644420668",
                original_filename: "Gutsman_V4.zip",
                attachment_id: "932897510651994142",
                thread_id: "928447687605485580",
                thread_name: "[OFW][BN3][MOB] GutsMan Fights",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_Thor_Gutsman_V3: {
            data: {
                type: "enemies",
                id: "com.Thor.Gutsman_V3",
                dependencies: ["com.Thor.enemy.Gutsman_V1"],
                subpackages: [],
                name: "GutsMan V3",
                detail: {
                    preview: "images\\com_Thor_Gutsman_V3_preview.png",
                },
                description: "BN3 GutsMan V3 (Beta) Battle!",
            },
            attachment_data: {
                timestamp: 1642490499058,
                discord_url:
                    "https://cdn.discordapp.com/attachments/928447687605485580/932897510450688010/Gutsman_V3.zip",
                author_name: "SusThor",
                author_id: "715825982644420668",
                original_filename: "Gutsman_V3.zip",
                attachment_id: "932897510450688010",
                thread_id: "928447687605485580",
                thread_name: "[OFW][BN3][MOB] GutsMan Fights",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        hoov_cards_montar3: {
            data: {
                type: "cards",
                id: "hoov.cards.montar3",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\hoov_cards_montar3_icon.png",
                    preview: "images\\hoov_cards_montar3_preview.png",
                    codes: ["F", "L", "X"],
                    props: {
                        can_boost: true,
                        shortname: "HevMontr",
                        damage: 190,
                        time_freeze: false,
                        element: "Cursor",
                        description: "Cursor w/ D-Pad, B to Atk",
                        limit: 3,
                    },
                },
            },
            attachment_data: {
                timestamp: 1672544984980,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1058954474317680790/1058955161395011614/HeavyMontar.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "HeavyMontar.zip",
                attachment_id: "1058955161395011614",
                thread_id: "1058954474317680790",
                thread_name: "[CUS][CHIP] Montar Chip Series",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        hoov_cards_montar1: {
            data: {
                type: "cards",
                id: "hoov.cards.montar1",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\hoov_cards_montar1_icon.png",
                    preview: "images\\hoov_cards_montar1_preview.png",
                    codes: ["J", "T", "X", "*"],
                    props: {
                        can_boost: true,
                        shortname: "Montar",
                        damage: 100,
                        time_freeze: false,
                        element: "Cursor",
                        description: "Cursor w/ D-Pad, B to Atk",
                        limit: 4,
                    },
                },
            },
            attachment_data: {
                timestamp: 1672544984980,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1058954474317680790/1058955161130774539/Montar.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "Montar.zip",
                attachment_id: "1058955161130774539",
                thread_id: "1058954474317680790",
                thread_name: "[CUS][CHIP] Montar Chip Series",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        hoov_cards_montar2: {
            data: {
                type: "cards",
                id: "hoov.cards.montar2",
                dependencies: [],
                subpackages: [],
                name: "",
                detail: {
                    icon: "images\\hoov_cards_montar2_icon.png",
                    preview: "images\\hoov_cards_montar2_preview.png",
                    codes: ["B", "X", "Z"],
                    props: {
                        can_boost: true,
                        shortname: "M-Montar",
                        damage: 140,
                        time_freeze: false,
                        element: "Cursor",
                        description: "Cursor w/ D-Pad, B to Atk",
                        limit: 3,
                    },
                },
            },
            attachment_data: {
                timestamp: 1672544984980,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1058954474317680790/1058955160807821432/M-Montar.zip",
                author_name: "Hooviey",
                author_id: "736271336376107068",
                original_filename: "M-Montar.zip",
                attachment_id: "1058955160807821432",
                thread_id: "1058954474317680790",
                thread_name: "[CUS][CHIP] Montar Chip Series",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
        com_alrysc_block_dollfriend: {
            data: {
                type: "blocks",
                id: "com.alrysc.block.dollfriend",
                dependencies: [],
                subpackages: [],
                name: "DollFrnd",
                detail: {
                    color: "Yellow",
                    is_program: true,
                    shape: [
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                    ],
                },
                description: "Bring friend to battle!",
            },
            attachment_data: {
                timestamp: 1679082625525,
                discord_url:
                    "https://cdn.discordapp.com/attachments/1086375707992657991/1086376013015031950/DollFrnd.zip",
                author_name: "Alrysc",
                author_id: "362428610444787712",
                original_filename: "DollFrnd.zip",
                attachment_id: "1086376013015031950",
                thread_id: "1086375707992657991",
                thread_name: "[CUS] [NCP] DollFriend",
                channel_id: "865079018704994355",
                guild_id: "455429604455219211",
            },
        },
    });

    // onMount(async () => {
    //     const response = await fetch(`${endpoint}/mod_list`, );
    //     const data = await response.json();

    //     if (data) modList.set(data);
    // });

    $: console.log($modList);
    const opened = writable(false);
    const selectedMod = writable({});

    $: console.log($selectedMod);
</script>

<Modal {opened}>
    <Box css={{ display: "flex" }}>
        <BattleChip mod={$selectedMod} />
        <div>
            <div class="battle-chip-modal-title">
                {$selectedMod?.attachment_data?.original_filename || ""}
            </div>
            <div class="battle-chip-modal-body">
                {$selectedMod?.data?.detail?.props?.long_description || ""}
            </div>
        </div>
    </Box>
</Modal>

<Grid
    cols={22}
    override={{
        px: "1rem",
        overflowY: "scroll",
        h: "82vh",
        overflowX: "hidden",
    }}
>
    {#each Object.keys($modList) as modName}
        <Grid.Col xs={10} lg={2}>
            <BattleChip
                mod={$modList[modName]}
                on:click={() => {
                    selectedMod.set($modList[modName]);
                    opened.set(true);
                }}
            /></Grid.Col
        >
    {/each}
</Grid>

import { SvelteKitAuth } from "@auth/sveltekit";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

import Discord from "@auth/core/providers/discord";
import { DISCORD_CLIENT_ID, DISCORD_SECRET } from "$env/static/private";

export const prisma = new PrismaClient();

export const handle = SvelteKitAuth({
    trustHost: true,
    providers: [
        Discord({ clientId: DISCORD_CLIENT_ID, clientSecret: DISCORD_SECRET }),
    ],
    adapter: PrismaAdapter(prisma),
});

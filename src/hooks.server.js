import { SvelteKitAuth } from "@auth/sveltekit";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

import Discord from "@auth/core/providers/discord";
import { DISCORD_CLIENT_ID, DISCORD_SECRET } from "$env/static/private";

export const prisma = new PrismaClient();

export const handle = SvelteKitAuth({
    callbacks: {
        async session({ session, user }) {
            session.user.id = user.id;

            return session;
        },
    },
    trustHost: true,
    useSecureCookies: true,
    providers: [
        Discord({ clientId: DISCORD_CLIENT_ID, clientSecret: DISCORD_SECRET }),
    ],
    adapter: PrismaAdapter(prisma),
    secret: process.env.AUTH_SECRET,
});

import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { generateFromEmail } from "unique-username-generator";

import { db } from "@/lib/db";
import authConfig from "./next-auth.config";

export const { 
    handlers: {GET, POST}, auth, signIn, 
} = NextAuth({ 
    adapter: PrismaAdapter(db), 
    pages: { signIn: "/sign-in",}, 
    session: { strategy: "jwt"}, 
    callbacks: {
        async session({ token, session }) {
            if(token.sub) {
                session.user.id = token.sub;
            }

            if(token.username) {
                session.user.username = token.username as string;
            }

            return session;
        },
        async jwt({ token }) {
            const id = token.sub;
            if(!id) return token;

            const dbUser = await db.user.findUnique({
                where: {id},
                select: {
                    username: true,
                },
            });

            if(!dbUser) return token;

            return {
                ...token,
                username: dbUser.username,
            };
        }
    },
    events: { 
        createUser: async ({ user }) => {
            const email = user.email || "";
            const username = generateFromEmail(email);

            await db.user.update({
                where: { email },
                data: {
                    username: username,
                    stream: {
                        create: {
                            name: `${username}'s stream`,
                        }
                    }
                }
            });
        }
     },
    ...authConfig
});
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "@/lib/db";
import authConfig from "./next-auth.config";

export const { handlers: {GET, POST}, auth, } = NextAuth({ adapter: PrismaAdapter(db), pages: { signIn: "/sign-in",}, session: { strategy: "jwt"}, ...authConfig});
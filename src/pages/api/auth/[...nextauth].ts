import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { env } from "../../../env/server.mjs";
// import {prisma} from '../../../server/db/client'

export const authOptions: NextAuthOptions = {
	// Configure one or more authentication providers
	callbacks: {
		// async signIn({ account, profile }) {
		// 	console.log({ account, profile });
		// 	if (account.provider === "google") {
		// 		return profile.email_verified && profile.email.endsWith("@example.com");
		// 	}
		// 	return true; // Do different verification for other providers that don't have `email_verified`
		// },
		// session(data, { session, user }) {
		// 	console.log({ data });
		// 	if (session.user) {
		// 		session.user.id = user.id;
		// 	}
		// 	return session;
		// },
	},
	// adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		// ...add more providers here
	],
};

export default NextAuth(authOptions);

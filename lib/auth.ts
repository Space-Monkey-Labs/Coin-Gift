import { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import GoogleProvider from "next-auth/providers/google"

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // Custom Coinbase Provider (we'll add this next)
    {
      id: "coinbase",
      name: "Coinbase",
      type: "oauth",
      authorization: {
        url: "https://www.coinbase.com/oauth/authorize",
        params: {
          scope: "wallet:user:read wallet:accounts:read",
          response_type: "code",
        },
      },
      token: "https://api.coinbase.com/oauth/token",
      userinfo: "https://api.coinbase.com/v2/user",
      clientId: process.env.COINBASE_CLIENT_ID!,
      clientSecret: process.env.COINBASE_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: profile.data.id,
          name: profile.data.name,
          email: profile.data.email,
          image: profile.data.avatar_url,
          coinbaseId: profile.data.id,
        }
      },
    },
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        token.accessToken = account.access_token
        token.coinbaseId = user.coinbaseId
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string
      session.user.coinbaseId = token.coinbaseId as string
      return session
    },
  },
  pages: {
    signIn: "/auth/signin",
    signUp: "/auth/signup",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export default authOptions
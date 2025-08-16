import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    accessToken?: string
    user: {
      id: string
      coinbaseId?: string
      walletAddress?: string
    } & DefaultSession["user"]
  }

  interface User {
    coinbaseId?: string
    walletAddress?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string
    coinbaseId?: string
  }
}
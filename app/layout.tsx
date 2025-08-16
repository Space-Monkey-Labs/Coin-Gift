import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import { cn } from "@/components/ui/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "CoinGift - Send Crypto, Share Joy",
    template: "%s | CoinGift"
  },
  description: "The easiest way to gift cryptocurrency. Beautiful, secure, and delightful gift cards that make crypto accessible to everyone.",
  keywords: ["cryptocurrency", "gift cards", "bitcoin", "ethereum", "crypto gifts", "blockchain"],
  authors: [{ name: "CoinGift Team" }],
  creator: "CoinGift",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://coingift.app",
    title: "CoinGift - Send Crypto, Share Joy",
    description: "The easiest way to gift cryptocurrency. Beautiful, secure, and delightful gift cards that make crypto accessible to everyone.",
    siteName: "CoinGift",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoinGift - Send Crypto, Share Joy",
    description: "The easiest way to gift cryptocurrency. Beautiful, secure, and delightful gift cards that make crypto accessible to everyone.",
    creator: "@coingift",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>
        {children}
      </body>
    </html>
  )
}
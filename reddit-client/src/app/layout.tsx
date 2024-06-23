import "../styles/globals.css"
import { Inter as FontSans } from "next/font/google"
import Header from "@/components/header/header"

import { cn } from "@/lib/utils"
import Head from "next/head";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>Reddit Client</title>
        <meta name="description">
          A minimal Reddit client built with Next.js and Tailwind CSS.
        </meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}

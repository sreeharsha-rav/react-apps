import "../styles/globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import Head from "next/head";
import Header from "@/components/header";
import { Metadata } from "next";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const styles = {
  wrapper: `flex min-h-screen bg-black flex-col font-sans antialiased`,
};

export const metadata: Metadata = {
  title: "Reddit Client",
  description: "A minimal Reddit client built with Next.js and Tailwind CSS.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn(styles.wrapper, fontSans.variable)}>
        <Header />
        {children}
      </body>
    </html>
  )
}

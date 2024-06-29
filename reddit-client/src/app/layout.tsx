import "../styles/globals.css";
import { Inter as FontSans } from "next/font/google";

import Header from "@/components/header/index";
import Banner from "@/components/banner/banner";

import { cn } from "@/lib/utils";
import Head from "next/head";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const styles = {
  wrapper: `flex min-h-screen flex-col bg-black text-white font-sans antialiased`,
  main: `mx-auto flex w-full max-w-5xl flex-1 space-x-6 py-5 px-6`,
  content: `w-full space-y-4 lg:w-2/3`,
  infoContainer: `hidden w-1/3 lg:block`,
};

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
      <body className={cn(styles.wrapper, fontSans.variable)}>
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  )
}

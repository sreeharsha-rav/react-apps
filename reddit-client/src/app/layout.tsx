import "../styles/globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import Head from "next/head";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const styles = {
  wrapper: `flex min-h-screen bg-black flex-col font-sans antialiased`,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <Head>
        <title>Reddit Client</title>
        <meta name="description">
          A minimal Reddit client built with Next.js and Tailwind CSS.
        </meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={cn(styles.wrapper, fontSans.variable)}>
        {children}
      </body>
    </html>
  )
}

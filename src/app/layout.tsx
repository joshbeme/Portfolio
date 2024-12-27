import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "nes.css/css/nes.min.css";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joshua Owens",
  description: "Joshua Owens portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body className={`nes-text text-black ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}

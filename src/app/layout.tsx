import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import Navbar from "@/components/Navbar/Navbar";
import { Flex } from "@chakra-ui/react";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MANGA TRACKER",
  description: "",
  keywords: ["MANGA TRACKER", "MANGA", "ANIME", "READING", "READ", "TRACK"],
  authors: {
    name: "T_YOU Tecnologia",
    url: "https://www.instagram.com/tyoutecnologia/",
  },
  icons: "/favicon.png",
  robots: { index: true, follow: true },
  twitter: {
    card: "summary_large_image",
    title: "MANGA TRACKER",
    description: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Flex  height={"100vh"} width={"100vw"} bgImage={"/bg-texture.png"} flexDirection={'column'} justify={'space-between'}>
            <Navbar />
            {children}
            <Footer/>
          </Flex>
        </Providers>
      </body>
    </html>
  );
}

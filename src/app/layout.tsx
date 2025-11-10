import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ui/scroll-progress";
import Footer from "@/components/Footer";
import HoveringGlassHeader from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "App Design Experts",
  description: "App Design Experts - Transforming Ideas into Stunning Digital Experiences",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollProgress />
        <HoveringGlassHeader/>
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navigation/Navbar";
import { MobileBottomNav } from "@/components/navigation/MobileBottomNav";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: ["software engineer", "full stack developer", "portfolio", "Neel Patel"],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="min-h-screen bg-canvas text-text-body font-sans antialiased">
        <Navbar />
        <main id="main-content" tabIndex={-1} className="pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}

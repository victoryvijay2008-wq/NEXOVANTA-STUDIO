import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";

export const viewport: Viewport = {
  themeColor: "#050811",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Web Development, AI Applications & SaaS Studio`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.shortDescription,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.shortDescription,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.shortDescription,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#050811] text-[#f8fafc] antialiased min-h-screen selection:bg-cyan-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Verdant | Open-Source Data Platform",
  description: "Your data. Any cloud. Full control. Verdant gives engineering teams a fully managed open-source data platform — Kafka, PostgreSQL, Redis, and more — deployed across any cloud in minutes.",
  keywords: ["data platform", "open-source", "Kafka", "PostgreSQL", "Redis", "multi-cloud", "data infrastructure"],
  icons: {
    icon: "/verdant-logo.svg",
    apple: "/verdant-logo.svg",
  },
  openGraph: {
    title: "Verdant | Open-Source Data Platform",
    description: "Your data. Any cloud. Full control.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0F0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0F0A]">{children}</body>
    </html>
  );
}

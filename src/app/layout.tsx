import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { AstryxProvider } from "@/components/AstryxProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rebuild Labs — AI Consulting & Engineering",
  description:
    "Stop experimenting. Start shipping AI that works. We design, engineer and deploy AI systems and custom software that solve operational problems.",
  keywords: [
    "AI consulting",
    "AI engineering",
    "custom software development",
    "GenAI",
    "agentic systems",
    "AI automation",
    "enterprise AI",
    "cloud architecture",
  ],
  authors: [{ name: "Rebuild Labs" }],
  creator: "Rebuild Labs",
  metadataBase: new URL("https://rebuildlabs.in"),
  icons: {
    icon: '/brand/logo-icon-transparent.png',
    shortcut: '/brand/logo-icon-transparent.png',
    apple: '/brand/logo-icon-transparent.png',
  },
  openGraph: {
    title: "Rebuild Labs — AI Consulting & Engineering",
    description:
      "Stop experimenting. Start shipping AI that works. We design, engineer and deploy AI systems and custom software that solve operational problems.",
    url: "https://rebuildlabs.in",
    siteName: "Rebuild Labs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/brand/Rebuild Labs Corporate Tech Lockup.png",
        width: 1774,
        height: 887,
        alt: "Rebuild Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rebuild Labs — AI Consulting & Engineering",
    description:
      "Stop experimenting. Start shipping AI that works. We design, engineer and deploy AI systems and custom software that solve operational problems.",
    images: ["/brand/Rebuild Labs Corporate Tech Lockup.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <AstryxProvider>{children}</AstryxProvider>
      </body>
    </html>
  );
}

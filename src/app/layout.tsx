import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://doujin-voice.com'),
  title: {
    default: "同人ボイスレビュー｜doujin-voice.com",
    template: "%s | 同人ボイスレビュー",
  },
  description: "FANZA同人音声作品のレビュー・ランキングサイト",
  openGraph: {
    siteName: "同人ボイスレビュー｜doujin-voice.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={spaceGrotesk.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

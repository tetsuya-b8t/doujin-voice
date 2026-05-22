import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
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
    <html lang="ja">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

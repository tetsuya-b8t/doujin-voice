import type { Metadata } from "next";
import { Space_Grotesk, M_PLUS_Rounded_1c } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgeGate from "@/components/AgeGate";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const mPlusRounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
  variable: "--font-mplus-rounded",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://doujin-voice.com'),
  title: {
    default: "同人ボイスレビュー｜doujin-voice.com",
    template: "%s | 同人ボイスレビュー",
  },
  description: "FANZA同人音声作品のレビュー・ランキングサイト（R18・成人向け）。ASMR・NTR・TS・百合など豊富なジャンルをレビュー。",
  robots: {
    index: true,
    follow: true,
  },
  other: {
    rating: 'adult',
  },
  openGraph: {
    siteName: "同人ボイスレビュー｜doujin-voice.com",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${spaceGrotesk.variable} ${mPlusRounded.variable}`}>
      <body className="min-h-screen flex flex-col">
        <AgeGate />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}
    </html>
  );
}

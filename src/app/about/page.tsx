import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'サイト概要',
  description: '同人ボイスレビュー doujin-voice.com のサイト概要・免責事項。',
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-black mb-6">サイト概要</h1>

      <section className="bg-card border border-gray-800 rounded-xl p-6 mb-6">
        <h2 className="text-lg font-bold mb-3 text-accent">当サイトについて</h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          「同人ボイスレビュー｜doujin-voice.com」は、FANZA同人に掲載されている音声作品のレビュー・ランキングを提供する情報サイトです。
          ASMR・NTR・TS・百合・妊婦など幅広いジャンルをカバーし、作品選びのお手伝いをします。
        </p>
      </section>

      <section className="bg-card border border-gray-800 rounded-xl p-6 mb-6">
        <h2 className="text-lg font-bold mb-3 text-accent">アフィリエイトについて</h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          当サイトはFANZA同人（DMM）のアフィリエイトプログラムを利用しています。
          「FANZAで購入する」リンクを経由してご購入いただいた場合、当サイトに一定の報酬が発生します。
          掲載内容はアフィリエイト報酬に関係なく、独自の評価基準に基づいています。
        </p>
      </section>

      <section className="bg-card border border-gray-800 rounded-xl p-6">
        <h2 className="text-lg font-bold mb-3 text-accent">免責事項</h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          当サイトの情報は可能な限り正確を期していますが、内容の正確性・完全性・最新性を保証するものではありません。
          掲載情報はFANZA同人の商品情報に基づいており、価格・内容は予告なく変更される場合があります。
          当サイトに掲載の作品はすべて18歳以上を対象としたコンテンツです。
        </p>
      </section>
    </div>
  );
}

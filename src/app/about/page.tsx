import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'サイト概要',
  description: '同人ボイスレビュー doujin-voice.com のサイト概要・運営方針・免責事項。',
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">サイト概要</h1>

      <div className="space-y-6">
        <section className="bg-card border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-bold mb-3 text-accent">当サイトについて</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            「同人ボイスレビュー｜doujin-voice.com」は、FANZA同人に掲載されている音声作品のレビュー・ランキングを提供する情報サイトです。
            ASMR・NTR・TS・百合・妊婦など幅広いジャンルをカバーし、あなたの作品選びをサポートします。
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mt-3">
            音声作品は試聴できる部分が限られており、購入前に内容を把握するのが難しいジャンルです。
            当サイトでは各作品の特徴・評価・おすすめポイントを分かりやすくまとめ、
            後悔のない作品選びができるよう情報を提供しています。
          </p>
        </section>

        <section className="bg-card border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-bold mb-3 text-accent">取り扱いジャンル</h2>
          <ul className="text-gray-300 text-sm space-y-2">
            <li className="flex gap-3">
              <span className="text-accent font-bold min-w-[4rem]">ASMR</span>
              <span>耳かき・囁き・添い寝など、リラクゼーション系音声作品</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold min-w-[4rem]">NTR</span>
              <span>背徳感・修羅場系の寝取られ・寝取り音声ドラマ</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold min-w-[4rem]">TS</span>
              <span>性転換・女体化をテーマにした音声作品</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold min-w-[4rem]">百合</span>
              <span>女性同士の恋愛・純愛をテーマにした音声作品</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold min-w-[4rem]">妊婦</span>
              <span>妊娠・出産・育児をテーマにした癒し系音声作品</span>
            </li>
          </ul>
        </section>

        <section className="bg-card border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-bold mb-3 text-accent">評価基準について</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            当サイトの評価は以下の観点を総合して星評価（5点満点）を算出しています。
          </p>
          <ul className="text-gray-300 text-sm mt-3 space-y-1 list-disc list-inside">
            <li>声優の演技・声質のクオリティ</li>
            <li>音声・音質の録音クオリティ</li>
            <li>シナリオ・ストーリーの完成度</li>
            <li>ジャンルとしての完成度・満足度</li>
            <li>ボリューム・コストパフォーマンス</li>
          </ul>
        </section>

        <section className="bg-card border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-bold mb-3 text-accent">アフィリエイトについて</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            当サイトはFANZA同人（DMM）のアフィリエイトプログラムを利用しています。
            「FANZAで購入する」リンクを経由してご購入いただいた場合、当サイトに一定の報酬が発生することがあります。
            ただし、掲載内容はアフィリエイト報酬に関係なく、独自の評価基準に基づいて公正に行っています。
          </p>
        </section>

        <section className="bg-card border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-bold mb-3 text-accent">年齢制限</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            当サイトは18歳以上の方を対象としたコンテンツを含みます。
            18歳未満の方のアクセスはご遠慮ください。
          </p>
        </section>

        <section className="bg-card border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-bold mb-3 text-accent">免責事項</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            当サイトの情報は可能な限り正確を期していますが、内容の正確性・完全性・最新性を保証するものではありません。
            掲載情報はFANZA同人の商品情報に基づいており、価格・内容は予告なく変更される場合があります。
            当サイトのご利用によって生じたいかなる損害についても、運営者は責任を負いかねます。
          </p>
        </section>

        <section className="bg-card border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-bold mb-3 text-accent">サイト情報</h2>
          <dl className="text-sm space-y-2">
            <div className="flex gap-4">
              <dt className="text-gray-500 min-w-[6rem]">サイト名</dt>
              <dd className="text-gray-300">同人ボイスレビュー</dd>
            </div>
            <div className="flex gap-4">
              <dt className="text-gray-500 min-w-[6rem]">URL</dt>
              <dd className="text-gray-300">https://doujin-voice.com</dd>
            </div>
            <div className="flex gap-4">
              <dt className="text-gray-500 min-w-[6rem]">開設</dt>
              <dd className="text-gray-300">2024年1月</dd>
            </div>
            <div className="flex gap-4">
              <dt className="text-gray-500 min-w-[6rem]">お問い合わせ</dt>
              <dd className="text-gray-300"><a href="/contact" className="text-accent hover:underline">こちら</a></dd>
            </div>
          </dl>
        </section>
      </div>
    </div>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '利用規約',
  description: '同人ボイスレビューの利用規約について説明します。',
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">利用規約</h1>

      {/* Age warning banner */}
      <div className="border border-accent/40 bg-accent/5 rounded-xl px-5 py-4 mb-8">
        <p className="text-sm text-ink font-bold mb-1">
          <span className="text-accent mr-2">R18</span>成人向けコンテンツに関する重要事項
        </p>
        <p className="text-xs text-ink-2 leading-relaxed">
          このサイトは18歳以上の方のみを対象としています。18歳未満の方は直ちにこのサイトを離れてください。
          当サイトにアクセスした時点で、あなたが18歳以上であることを確認したものとみなします。
        </p>
      </div>

      <div className="space-y-8 text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">1. サービスについて</h2>
          <p>
            同人ボイスレビュー（以下「当サイト」）は、FANZA同人音声作品のレビュー・ランキングを提供するサイトです。
            当サイトはFANZAのアフィリエイトサイトであり、商品の販売は行っておりません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">2. 年齢制限（重要）</h2>
          <p>
            当サイトは成人向け（R18）コンテンツへのリンクを含みます。
            <strong className="text-white">18歳未満の方のご利用は固くお断りしております。</strong>
            当サイトにアクセスした時点で、18歳以上であることに同意したものとみなします。
            18歳未満の方は直ちに当サイトを離脱してください。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">3. 免責事項</h2>
          <p>当サイトに掲載している情報の正確性・完全性について保証するものではありません。</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>掲載価格は変動する場合があります。最新情報はFANZA公式サイトにてご確認ください</li>
            <li>当サイトの利用によって生じたいかなる損害についても責任を負いません</li>
            <li>外部リンク先のコンテンツについての責任は負いません</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">4. 著作権</h2>
          <p>
            当サイトに掲載のテキスト・構成等の著作権は当サイトに帰属します。
            無断転載・複製を禁じます。なお、作品画像・タイトル等の著作権は各権利者に帰属します。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">5. 禁止事項</h2>
          <p>以下の行為を禁止します。</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>当サイトへの不正アクセス・サーバーへの過度な負荷をかける行為</li>
            <li>当サイトのコンテンツの無断転載・複製</li>
            <li>その他、当サイトの運営を妨害する行為</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">6. 利用規約の変更</h2>
          <p>
            当サイトは、必要に応じて利用規約を変更することがあります。
            変更後の利用規約は本ページに掲載した時点で効力を生じます。
          </p>
        </section>

        <p className="text-sm text-gray-500 pt-4 border-t border-gray-800">
          制定日：2025年5月1日
        </p>
      </div>
    </div>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '同人ボイスレビューのプライバシーポリシーについて説明します。',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>

      <div className="space-y-8 text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">1. 基本方針</h2>
          <p>
            同人ボイスレビュー（以下「当サイト」）は、ユーザーの個人情報の保護を重要な責務と考え、
            適切な管理・取り扱いを行います。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">2. 収集する情報</h2>
          <p>当サイトでは、以下の情報を収集することがあります。</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>アクセスログ（IPアドレス、ブラウザ情報、閲覧ページ等）</li>
            <li>お問い合わせフォームからご入力いただいた情報</li>
            <li>Cookieによるアクセス解析情報</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">3. アクセス解析ツール</h2>
          <p>
            当サイトはGoogleが提供するアクセス解析ツール「Google Analytics」を利用しています。
            Google Analyticsはトラフィックデータ収集のためにCookieを使用します。
            このデータは匿名で収集されており、個人を特定するものではありません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">4. アフィリエイトプログラム</h2>
          <p>
            当サイトはFANZA（株式会社デジタルコマース）のアフィリエイトプログラムに参加しています。
            商品リンクをクリックしてFANZAで購入された場合、当サイトに紹介料が支払われることがあります。
            なお、ユーザーの購買情報が当サイトに共有されることはありません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">5. 広告について</h2>
          <p>
            当サイトでは、第三者配信の広告サービスを利用する場合があります。
            広告配信事業者はCookieを使用して、ユーザーの興味に基づいた広告を表示することがあります。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">6. Cookieの無効化</h2>
          <p>
            ブラウザの設定によりCookieを無効にすることが可能です。ただし、一部機能が利用できなくなる場合があります。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">7. 個人情報の第三者提供</h2>
          <p>
            当サイトは、法令に基づく場合を除き、収集した個人情報を第三者に提供・開示することはありません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">8. プライバシーポリシーの変更</h2>
          <p>
            当サイトは、必要に応じてプライバシーポリシーを変更することがあります。
            変更後のポリシーは本ページに掲載した時点で効力を生じるものとします。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">9. お問い合わせ</h2>
          <p>
            プライバシーポリシーに関するお問い合わせは、
            <a href="/contact" className="text-accent hover:underline ml-1">お問い合わせページ</a>
            よりご連絡ください。
          </p>
        </section>

        <p className="text-sm text-gray-500 pt-4 border-t border-gray-800">
          制定日：2024年1月1日
        </p>
      </div>
    </div>
  );
}

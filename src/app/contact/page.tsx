import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: '同人ボイスレビュー doujin-voice.com へのお問い合わせ。',
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-black mb-6">お問い合わせ</h1>
      <div className="bg-card border border-gray-800 rounded-xl p-6">
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          当サイトへのお問い合わせは、下記メールアドレスまでご連絡ください。
        </p>
        <p className="text-sm font-bold">
          メール：{' '}
          <span className="text-accent">contact@doujin-voice.com</span>
        </p>
        <p className="text-gray-500 text-xs mt-6">
          ※ 掲載作品に関するご要望、誤情報のご指摘等も受け付けております。
          返信には数日かかる場合がありますのでご了承ください。
        </p>
      </div>
    </div>
  );
}

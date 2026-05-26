import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: '同人ボイスレビュー doujin-voice.com へのお問い合わせ。',
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-black mb-2">お問い合わせ</h1>
      <p className="text-ink-2 text-sm mb-8">掲載内容への誤りのご指摘、ご要望などはこちらからどうぞ。</p>

      <div className="bg-card border border-rule rounded-xl p-6 space-y-6">
        {/* Form */}
        <form
          action={`mailto:contact@doujin-voice.com`}
          method="get"
          encType="text/plain"
          className="space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-xs text-ink-2 mb-1.5">お名前</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="山田 太郎"
              className="w-full border border-rule rounded-lg px-4 py-2.5 text-sm text-ink bg-background placeholder:text-ink-2 outline-none"
              style={{ transitionProperty: 'border-color', transitionDuration: '150ms' }}
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs text-ink-2 mb-1.5">件名</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="誤情報のご指摘 / ご要望など"
              className="w-full border border-rule rounded-lg px-4 py-2.5 text-sm text-ink bg-background placeholder:text-ink-2 outline-none"
              style={{ transitionProperty: 'border-color', transitionDuration: '150ms' }}
            />
          </div>

          <div>
            <label htmlFor="body" className="block text-xs text-ink-2 mb-1.5">お問い合わせ内容</label>
            <textarea
              id="body"
              name="body"
              rows={5}
              placeholder="お問い合わせ内容をご記入ください。"
              className="w-full border border-rule rounded-lg px-4 py-2.5 text-sm text-ink bg-background placeholder:text-ink-2 outline-none resize-none"
              style={{ transitionProperty: 'border-color', transitionDuration: '150ms' }}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-white font-bold py-3 rounded-lg hover:opacity-90"
            style={{ transitionProperty: 'opacity', transitionDuration: '150ms' }}
          >
            メールで送信する
          </button>
        </form>

        <div className="border-t border-rule pt-5">
          <p className="text-xs text-ink-2 leading-relaxed">
            または直接メールにてご連絡ください：
            <a href="mailto:contact@doujin-voice.com" className="text-accent ml-1 hover:underline">
              contact@doujin-voice.com
            </a>
          </p>
          <p className="text-xs text-ink-2 mt-2">
            ※ 返信には数日かかる場合があります。
          </p>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-rule mt-16 py-8 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* R18 warning bar */}
        <div className="border border-rule rounded-lg px-4 py-2 mb-6 text-center">
          <p className="text-xs text-ink-2">
            <span className="text-accent font-bold mr-2">R18</span>
            このサイトは18歳以上の方を対象とした成人向けコンテンツを含みます。18歳未満の方のご利用はお断りしています。
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-ink-2">
            © 2025 同人ボイスレビュー｜doujin-voice.com &nbsp;／&nbsp; 運営：個人
          </p>
          <nav className="flex gap-6 text-sm text-ink-2">
            <Link href="/about" className="hover:text-accent" style={{ transitionProperty: 'color', transitionDuration: '150ms' }}>サイト概要</Link>
            <Link href="/privacy" className="hover:text-accent" style={{ transitionProperty: 'color', transitionDuration: '150ms' }}>プライバシーポリシー</Link>
            <Link href="/terms" className="hover:text-accent" style={{ transitionProperty: 'color', transitionDuration: '150ms' }}>利用規約</Link>
            <Link href="/contact" className="hover:text-accent" style={{ transitionProperty: 'color', transitionDuration: '150ms' }}>お問い合わせ</Link>
          </nav>
        </div>
        <p className="text-xs text-ink-2 mt-4 text-center">
          当サイトはFANZA同人のアフィリエイトプログラムを利用しています。
        </p>
      </div>
    </footer>
  );
}

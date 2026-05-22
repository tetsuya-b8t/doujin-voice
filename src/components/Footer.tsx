import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-16 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2024 同人ボイスレビュー｜doujin-voice.com
          </p>
          <nav className="flex gap-6 text-sm text-gray-500">
            <Link href="/about" className="hover:text-accent transition-colors">サイト概要</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">お問い合わせ</Link>
          </nav>
        </div>
        <p className="text-xs text-gray-700 mt-4 text-center">
          当サイトはFANZA同人のアフィリエイトプログラムを利用しています。
        </p>
      </div>
    </footer>
  );
}

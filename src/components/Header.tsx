'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CATEGORY_LABELS, Category } from '@/data/works';

const CATEGORIES: Category[] = ['asmr', 'ntr', 'ts', 'yuri', 'ninpu'];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="text-accent font-black text-lg tracking-tight">
          🎧 同人ボイスレビュー
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-400">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={`/category/${cat}`}
              className="hover:text-accent transition-colors uppercase font-bold"
            >
              {CATEGORY_LABELS[cat]}
            </Link>
          ))}
          <Link href="/ranking" className="text-accent font-bold hover:text-accent-hover transition-colors">
            ランキング
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <div className={`w-5 h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-5 h-0.5 bg-current my-1 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-card border-t border-gray-800 px-4 py-3 flex flex-col gap-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={`/category/${cat}`}
              className="text-gray-300 hover:text-accent uppercase font-bold text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {CATEGORY_LABELS[cat]}
            </Link>
          ))}
          <Link
            href="/ranking"
            className="text-accent font-bold text-sm"
            onClick={() => setMenuOpen(false)}
          >
            ランキング
          </Link>
        </div>
      )}
    </header>
  );
}

'use client';

/* Hallmark · component: Header · genre: atmospheric · design-system: design.md
 * 2-tier: logo row + genre nav row. No emoji. Specific transition properties only.
 */

import Link from 'next/link';
import { useState } from 'react';
import { CATEGORY_LABELS, Category } from '@/data/works';

const CATEGORIES: Category[] = ['asmr', 'ntr', 'ts', 'yuri', 'ninpu', 'hypno'];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-rule">
      {/* Tier 1: Logo + utility links */}
      <div className="max-w-6xl mx-auto px-4 h-12 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="font-display font-black text-sm tracking-[0.15em] uppercase text-white leading-tight">
            DOUJIN VOICE
          </span>
          <span className="text-[9px] text-ink-2 tracking-widest leading-tight">同人音声レビュー</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/column"
            className="text-ink-2 hover:text-white font-display font-bold text-xs uppercase tracking-widest"
            style={{ transitionProperty: 'color', transitionDuration: '150ms' }}
          >
            コラム
          </Link>
          <Link
            href="/recommend"
            className="text-ink-2 hover:text-white font-display font-bold text-xs uppercase tracking-widest"
            style={{ transitionProperty: 'color', transitionDuration: '150ms' }}
          >
            診断
          </Link>
          <Link
            href="/ranking"
            className="text-ink-2 hover:text-white font-display font-bold text-xs uppercase tracking-widest"
            style={{ transitionProperty: 'color', transitionDuration: '150ms' }}
          >
            RANKING
          </Link>
          <Link
            href="/sale"
            className="text-accent hover:text-accent-hover font-display font-bold text-xs uppercase tracking-widest"
            style={{ transitionProperty: 'color', transitionDuration: '150ms' }}
          >
            SALE
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-ink-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <div
            className={`w-5 h-0.5 bg-current ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
            style={{ transitionProperty: 'transform', transitionDuration: '150ms' }}
          />
          <div
            className={`w-5 h-0.5 bg-current my-1 ${menuOpen ? 'opacity-0' : ''}`}
            style={{ transitionProperty: 'opacity', transitionDuration: '150ms' }}
          />
          <div
            className={`w-5 h-0.5 bg-current ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
            style={{ transitionProperty: 'transform', transitionDuration: '150ms' }}
          />
        </button>
      </div>

      {/* Tier 2: Genre nav (desktop) */}
      <div className="hidden md:block border-t border-rule">
        <nav className="max-w-6xl mx-auto px-4 grid grid-cols-6 h-9">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={`/category/${cat}`}
              className="flex items-center justify-center text-ink-2 hover:text-white font-display font-bold text-xs uppercase tracking-wider border-r border-rule last:border-r-0"
              style={{ transitionProperty: 'color', transitionDuration: '150ms' }}
            >
              {CATEGORY_LABELS[cat]}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-card border-t border-rule px-4 py-3 flex flex-col gap-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={`/category/${cat}`}
              className="text-ink-2 font-display font-bold text-sm uppercase tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              {CATEGORY_LABELS[cat]}
            </Link>
          ))}
          <div className="border-t border-rule pt-3 flex flex-col gap-3">
            <Link href="/column" className="text-ink-2 font-bold text-sm" onClick={() => setMenuOpen(false)}>コラム</Link>
            <Link href="/recommend" className="text-ink-2 font-bold text-sm" onClick={() => setMenuOpen(false)}>診断</Link>
            <Link href="/ranking" className="text-ink-2 font-bold text-sm" onClick={() => setMenuOpen(false)}>RANKING</Link>
            <Link href="/sale" className="text-accent font-bold text-sm" onClick={() => setMenuOpen(false)}>SALE</Link>
          </div>
        </div>
      )}
    </header>
  );
}

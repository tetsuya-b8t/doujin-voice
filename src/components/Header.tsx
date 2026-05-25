'use client';

/* Hallmark · component: Header · genre: cosme · design-system: design.md
 * White background. Rose logo (bold upright). Pill search. Underline tab nav.
 */

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { CATEGORY_LABELS, Category } from '@/data/works';

const CATEGORIES: Category[] = ['asmr', 'ntr', 'ts', 'yuri', 'ninpu', 'hypno'];

const NAV_LINKS = [
  { href: '/ranking', label: 'ランキング' },
  { href: '/sale', label: 'セール' },
  { href: '/column', label: 'コラム' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  const isCategoryActive = (cat: string) => pathname === `/category/${cat}`;

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-rule">
      {/* Tier 1: Logo + search + nav */}
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-5">
        <Link href="/" className="flex-shrink-0">
          <span className="font-black text-lg text-accent leading-none tracking-tight">
            doujin<span style={{ color: '#d4848a' }}>·</span>voice
          </span>
        </Link>

        {/* Search pill (desktop) */}
        <div className="hidden md:block flex-1 max-w-xs">
          <input
            type="text"
            placeholder="作品名・声優名で探す"
            className="w-full border border-rule rounded-full px-4 py-1.5 text-xs text-ink bg-background placeholder:text-ink-2 outline-none"
            style={{ transitionProperty: 'border-color', transitionDuration: '150ms' }}
          />
        </div>

        <nav className="hidden md:flex items-center gap-5 ml-auto">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs text-ink-2 hover:text-ink"
              style={{ transitionProperty: 'color', transitionDuration: '150ms' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-auto p-2 text-ink-2"
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

      {/* Tier 2: Category tabs (desktop) */}
      <div className="hidden md:block border-t border-rule overflow-x-auto">
        <nav className="max-w-6xl mx-auto px-4 flex">
          <Link
            href="/"
            className={`text-xs px-4 py-2.5 border-b-2 whitespace-nowrap font-medium ${
              isActive('/')
                ? 'text-accent border-accent font-bold'
                : 'text-ink-2 border-transparent hover:text-ink'
            }`}
            style={{ transitionProperty: 'color', transitionDuration: '150ms' }}
          >
            すべて
          </Link>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={`/category/${cat}`}
              className={`text-xs px-4 py-2.5 border-b-2 whitespace-nowrap font-medium ${
                isCategoryActive(cat)
                  ? 'text-accent border-accent font-bold'
                  : 'text-ink-2 border-transparent hover:text-ink'
              }`}
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
          <Link href="/" className="text-sm font-bold text-ink-2" onClick={() => setMenuOpen(false)}>すべて</Link>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={`/category/${cat}`}
              className="text-sm font-bold text-ink-2"
              onClick={() => setMenuOpen(false)}
            >
              {CATEGORY_LABELS[cat]}
            </Link>
          ))}
          <div className="border-t border-rule pt-3 flex flex-col gap-3">
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className="text-sm text-ink-2" onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

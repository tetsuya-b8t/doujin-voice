import Link from 'next/link';
import { CATEGORY_LABELS, getWorksByCategory } from '@/data/works';
import { CATEGORY_TAGLINE } from '@/data/categories';

/* Hallmark · component: genre-nav · genre: atmospheric · design-system: design.md
 * No emoji icons. No gradient cards. Typography-led. Card heights intentionally varied.
 * transition: border-color, color — never transition-all.
 */

const CATEGORIES = ['asmr', 'ntr', 'ts', 'yuri', 'ninpu', 'hypno'] as const;

// Accent bar color per category — single hue, no gradient
const CATEGORY_ACCENT: Record<string, string> = {
  asmr:  'bg-sky-400',
  ntr:   'bg-rose-400',
  ts:    'bg-amber-400',
  yuri:  'bg-pink-400',
  ninpu: 'bg-emerald-400',
  hypno: 'bg-violet-400',
};

export default function GenreNav() {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-bold text-ink-2 uppercase tracking-widest font-display">
          ジャンルで探す
        </h2>
      </div>

      {/* 1 feature card + 5 compact cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
        {CATEGORIES.map((cat, i) => {
          const count = getWorksByCategory(cat).length;
          const isFeature = i === 0;

          return (
            <Link
              key={cat}
              href={`/category/${cat}`}
              className={[
                'group block border border-rule rounded-xl bg-card overflow-hidden',
                'hover:border-white/20',
                isFeature ? 'md:col-span-2 md:row-span-1' : '',
              ].join(' ')}
              style={{
                transitionProperty: 'border-color',
                transitionDuration: '150ms',
              }}
            >
              {/* Accent top bar */}
              <div className={`h-0.5 w-full ${CATEGORY_ACCENT[cat]}`} />

              <div className={`p-4 ${isFeature ? 'md:p-6' : ''}`}>
                {/* Category abbreviation as typographic mark */}
                <p className={[
                  'font-display font-black leading-none text-white/15 select-none mb-3',
                  isFeature ? 'text-5xl' : 'text-3xl',
                ].join(' ')} aria-hidden>
                  {CATEGORY_LABELS[cat]}
                </p>

                <p className={[
                  'font-display font-bold text-white leading-tight',
                  isFeature ? 'text-xl' : 'text-base',
                ].join(' ')}>
                  {CATEGORY_LABELS[cat]}
                </p>

                <p className={[
                  'text-ink-2 mt-1 leading-snug',
                  isFeature ? 'text-sm' : 'text-xs line-clamp-2',
                ].join(' ')}>
                  {CATEGORY_TAGLINE[cat]}
                </p>

                <p className="text-ink-2 text-xs mt-3 font-display">
                  {count}<span className="ml-0.5 text-white/30">作品</span>
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

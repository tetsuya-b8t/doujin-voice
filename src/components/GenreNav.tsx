import Link from 'next/link';
import { CATEGORY_LABELS, getWorksByCategory } from '@/data/works';
import { CATEGORY_TAGLINE } from '@/data/categories';

/* Hallmark · component: genre-nav · genre: atmospheric · design-system: design.md
 * No faded-label decoration. Left-border accent on feature card. Typography-led.
 * transition: border-color, color — never transition-all.
 */

const CATEGORIES = ['asmr', 'ntr', 'ts', 'yuri', 'hypno'] as const;

const CATEGORY_BORDER: Record<string, string> = {
  asmr:  'border-l-sky-400',
  ntr:   'border-l-rose-400',
  ts:    'border-l-amber-400',
  yuri:  'border-l-pink-400',
  ninpu: 'border-l-emerald-400',
  hypno: 'border-l-violet-400',
};

const CATEGORY_DOT: Record<string, string> = {
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

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
        {CATEGORIES.map((cat, i) => {
          const count = getWorksByCategory(cat).length;
          const isFeature = i === 0;

          if (isFeature) {
            return (
              <Link
                key={cat}
                href={`/category/${cat}`}
                className={[
                  'group md:col-span-2 block border border-rule rounded-xl bg-card overflow-hidden',
                  'border-l-2', CATEGORY_BORDER[cat],
                  'hover:border-l-2 hover:bg-white/[0.03]',
                ].join(' ')}
                style={{ transitionProperty: 'background-color', transitionDuration: '150ms' }}
              >
                <div className="p-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className={`inline-block w-1.5 h-1.5 rounded-full ${CATEGORY_DOT[cat]}`} />
                    <span className="text-xs font-bold text-ink-2 uppercase tracking-widest font-display">
                      Pick up
                    </span>
                  </div>
                  <div>
                    <p className="font-display font-black text-white text-xl leading-tight">
                      {CATEGORY_LABELS[cat]}
                    </p>
                    <p className="text-ink-2 text-xs mt-1 leading-snug">
                      {CATEGORY_TAGLINE[cat]}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-ink-2 text-xs font-display">
                      {count}<span className="ml-0.5 text-white/30">作品</span>
                    </p>
                    <span
                      className="text-ink-2 text-sm font-display font-bold group-hover:text-white"
                      style={{ transitionProperty: 'color', transitionDuration: '150ms' }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            );
          }

          return (
            <Link
              key={cat}
              href={`/category/${cat}`}
              className={[
                'group block border border-rule rounded-xl bg-card overflow-hidden',
                'hover:bg-white/[0.03]',
              ].join(' ')}
              style={{ transitionProperty: 'background-color', transitionDuration: '150ms' }}
            >
              <div className="p-3 flex flex-col gap-2">
                <div className="flex items-center gap-1.5">
                  <span className={`inline-block w-1.5 h-1.5 rounded-full flex-shrink-0 ${CATEGORY_DOT[cat]}`} />
                  <p className="font-display font-black text-white text-base leading-tight">
                    {CATEGORY_LABELS[cat]}
                  </p>
                </div>
                <p className="text-ink-2 text-xs leading-snug line-clamp-2">
                  {CATEGORY_TAGLINE[cat]}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-ink-2 text-xs font-display">
                    {count}<span className="ml-0.5 text-white/30">作品</span>
                  </p>
                  <span
                    className="text-ink-2 text-xs font-display group-hover:text-white"
                    style={{ transitionProperty: 'color', transitionDuration: '150ms' }}
                  >
                    →
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

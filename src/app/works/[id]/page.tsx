import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { works, getWorkById, getWorksByCategory, Category, CATEGORY_LABELS } from '@/data/works';
import { articles } from '@/data/articles';
import StarRating from '@/components/StarRating';
import WorkCard from '@/components/WorkCard';

/* Hallmark · page: work detail · genre: atmospheric · design-system: design.md
 * 3:4 jacket left, info right. No price. Accent vertical bar. Token colors only.
 */

export const dynamicParams = false;

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return works.map((w) => ({ id: w.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const work = getWorkById(id);
  if (!work) return {};
  return {
    title: work.title,
    description: work.description,
    openGraph: {
      title: `${work.title} | 同人ボイスレビュー`,
      description: work.description,
      images: [{ url: work.thumbnailUrl }],
    },
  };
}

const CATEGORY_COLUMN: Record<Category, string> = {
  asmr: 'what-is-asmr',
  ntr: 'ntr-ranking',
  ts: 'what-is-ts',
  yuri: 'yuri-best',
  ninpu: 'what-is-ninpu',
  hypno: 'what-is-hypno',
};

const CATEGORY_ACCENT: Record<Category, string> = {
  asmr:  'bg-sky-400',
  ntr:   'bg-rose-400',
  ts:    'bg-amber-400',
  yuri:  'bg-pink-400',
  ninpu: 'bg-emerald-400',
  hypno: 'bg-violet-400',
};

export default async function WorkDetailPage({ params }: Props) {
  const { id } = await params;
  const work = getWorkById(id);
  if (!work) notFound();

  const relatedWorks = getWorksByCategory(work.category)
    .filter((w) => w.id !== work.id)
    .slice(0, 4);

  const columnSlug = CATEGORY_COLUMN[work.category];
  const columnArticle = articles.find((a) => a.slug === columnSlug);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Work header card */}
      <div className="bg-card border border-rule rounded-xl overflow-hidden">
        <div className="md:flex md:min-h-[300px]">
          {/* Jacket — 3:4 on mobile, full height on desktop */}
          <div className="relative h-64 md:h-auto md:w-2/5 flex-shrink-0">
            <div className={`absolute left-0 top-0 bottom-0 w-0.5 z-10 ${CATEGORY_ACCENT[work.category]}`} />
            <Image
              src={work.thumbnailUrl}
              alt={work.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              unoptimized
            />
          </div>

          {/* Info column */}
          <div className="p-6 flex flex-col justify-between border-t border-rule md:border-t-0 md:border-l md:border-l-rule">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-display font-bold text-xs uppercase tracking-widest text-ink-2">
                  {CATEGORY_LABELS[work.category]}
                </span>
                <StarRating rating={work.rating} />
              </div>

              <h1 className="text-xl font-black text-white leading-tight mb-3">
                {work.title}
              </h1>

              <dl className="text-sm space-y-1 text-ink-2 mb-4">
                <div>
                  <dt className="inline text-ink-2/50">サークル: </dt>
                  <dd className="inline">{work.circle}</dd>
                </div>
                <div>
                  <dt className="inline text-ink-2/50">CV: </dt>
                  <dd className="inline">{work.cv}</dd>
                </div>
              </dl>

              <div className="flex flex-wrap gap-1 mb-5">
                {work.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tag/${encodeURIComponent(tag)}`}
                    className="text-xs bg-paper-3 text-ink-2 hover:text-white hover:bg-paper-3 px-2 py-0.5 rounded"
                    style={{ transitionProperty: 'color', transitionDuration: '150ms' }}
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href={work.affiliateUrl}
              className="block w-full text-center bg-accent hover:bg-accent-hover text-white font-black py-3 rounded-lg text-base"
              style={{ transitionProperty: 'background-color', transitionDuration: '150ms' }}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              FANZAで購入する →
            </Link>
          </div>
        </div>
      </div>

      {/* Description */}
      <section className="mt-8">
        <h2 className="text-sm font-black font-display uppercase tracking-widest mb-3 pb-2 border-b border-rule text-white">
          作品紹介
        </h2>
        <p className="text-ink-2 text-sm leading-relaxed whitespace-pre-wrap">{work.description}</p>
      </section>

      {/* Related column */}
      {columnArticle && (
        <Link href={`/column/${columnArticle.slug}`} className="block mt-8">
          <div
            className="bg-card border border-rule hover:border-white/20 rounded-lg p-4 flex items-center gap-4"
            style={{ transitionProperty: 'border-color', transitionDuration: '150ms' }}
          >
            <div className="w-0.5 h-8 bg-accent flex-shrink-0" />
            <div>
              <p className="text-[10px] text-ink-2 mb-1 font-display uppercase tracking-widest">このジャンルをもっと知る</p>
              <p className="text-sm font-bold text-ink group-hover:text-white">{columnArticle.title}</p>
            </div>
            <span className="ml-auto text-ink-2 text-sm font-display font-bold">→</span>
          </div>
        </Link>
      )}

      {/* Related works */}
      {relatedWorks.length > 0 && (
        <section className="mt-10">
          <h2 className="text-sm font-black font-display uppercase tracking-widest mb-4 pb-2 border-b border-rule text-white">
            同じジャンルのおすすめ
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedWorks.map((w) => (
              <WorkCard key={w.id} work={w} />
            ))}
          </div>
        </section>
      )}

      <div className="mt-8 flex gap-6 text-xs text-ink-2">
        <Link
          href="/"
          className="hover:text-white"
          style={{ transitionProperty: 'color', transitionDuration: '150ms' }}
        >
          ← トップに戻る
        </Link>
        <Link
          href={`/category/${work.category}`}
          className="hover:text-white"
          style={{ transitionProperty: 'color', transitionDuration: '150ms' }}
        >
          カテゴリ一覧 →
        </Link>
      </div>
    </div>
  );
}

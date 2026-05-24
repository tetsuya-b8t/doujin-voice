import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { articles, getArticleBySlug } from '@/data/articles';
import { getWorkById, CATEGORY_LABELS } from '@/data/works';
import StarRating from '@/components/StarRating';
import WorkCard from '@/components/WorkCard';

/* Hallmark · page: review detail · genre: atmospheric · design-system: design.md
 * Sidebar: jacket + rating + meta. Main: article sections. No price. Token colors only.
 */

export const dynamicParams = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles
    .filter((a) => a.category === 'review')
    .map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: `${article.title} | 同人ボイスレビュー`,
      description: article.description,
      images: article.relatedWorkIds[0]
        ? [{ url: getWorkById(article.relatedWorkIds[0])?.thumbnailUrl ?? '' }]
        : [],
    },
  };
}

export default async function ReviewDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article || article.category !== 'review') notFound();

  const primaryWork = article.relatedWorkIds[0]
    ? getWorkById(article.relatedWorkIds[0])
    : undefined;

  const relatedWorks = article.relatedWorkIds
    .slice(1, 4)
    .map((id) => getWorkById(id))
    .filter((w) => w !== undefined);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Page header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-0.5 h-3 rounded-sm bg-accent" />
        <span className="font-display font-bold text-[10px] uppercase tracking-[0.15em] text-ink-2">REVIEW</span>
        <time className="text-[10px] text-ink-2 ml-2">{article.publishedAt}</time>
      </div>

      <h1 className="text-2xl md:text-3xl font-black text-white leading-snug mb-8">{article.title}</h1>

      <div className="lg:flex lg:gap-8">
        {/* Sidebar: jacket + meta */}
        <aside className="lg:w-56 flex-shrink-0 mb-8 lg:mb-0">
          <div className="lg:sticky lg:top-24 space-y-4">
            {/* Jacket */}
            {primaryWork && (
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-rule">
                <Image
                  src={primaryWork.thumbnailUrl}
                  alt={primaryWork.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="224px"
                  unoptimized
                />
              </div>
            )}

            {/* Rating */}
            {primaryWork && (
              <div className="bg-card border border-rule rounded-lg p-4 space-y-3">
                <div>
                  <p className="font-display font-bold text-[9px] uppercase tracking-[0.15em] text-ink-2 mb-1">総合評価</p>
                  <StarRating rating={primaryWork.rating} />
                </div>
                <div className="border-t border-rule pt-3 space-y-1.5 text-xs text-ink-2">
                  <div>
                    <span className="text-ink-2/50">ジャンル: </span>
                    <span className="font-bold uppercase font-display">
                      {CATEGORY_LABELS[primaryWork.category]}
                    </span>
                  </div>
                  <div>
                    <span className="text-ink-2/50">CV: </span>
                    <span>{primaryWork.cv}</span>
                  </div>
                  <div>
                    <span className="text-ink-2/50">サークル: </span>
                    <span>{primaryWork.circle}</span>
                  </div>
                </div>
                <Link
                  href={primaryWork.affiliateUrl}
                  className="block w-full text-center bg-accent hover:bg-accent-hover text-white font-black py-2.5 rounded-lg text-xs"
                  style={{ transitionProperty: 'background-color', transitionDuration: '150ms' }}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  FANZAで購入する →
                </Link>
              </div>
            )}

            {/* Tags */}
            {article.tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {article.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-paper-3 text-ink-2 px-2 py-0.5 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* Main: article body */}
        <div className="flex-1 min-w-0">
          <p className="text-sm text-ink-2 leading-relaxed mb-8 border-l-2 border-accent pl-4">
            {article.description}
          </p>

          <div className="space-y-10">
            {article.sections.map((section, i) => (
              <section key={i}>
                {section.heading && (
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-0.5 h-4 bg-accent flex-shrink-0 mt-1" />
                    <h2 className="text-base font-bold text-white leading-snug">{section.heading}</h2>
                  </div>
                )}
                <p className="text-sm text-ink leading-[1.9] whitespace-pre-wrap">{section.body}</p>
              </section>
            ))}
          </div>

          {/* Related works */}
          {relatedWorks.length > 0 && (
            <section className="mt-12">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-rule">
                <h2 className="text-sm font-black font-display uppercase tracking-widest text-white">一緒に聴きたい作品</h2>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {relatedWorks.map((work) => (
                  <WorkCard key={work!.id} work={work!} />
                ))}
              </div>
            </section>
          )}

          <div className="mt-10 flex gap-6 text-xs text-ink-2">
            <Link
              href="/column"
              className="hover:text-white"
              style={{ transitionProperty: 'color', transitionDuration: '150ms' }}
            >
              ← コラム一覧
            </Link>
            <Link
              href="/"
              className="hover:text-white"
              style={{ transitionProperty: 'color', transitionDuration: '150ms' }}
            >
              トップへ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { articles, getArticleBySlug, ARTICLE_CATEGORY_LABELS } from '@/data/articles';
import { getWorkById } from '@/data/works';
import WorkCard from '@/components/WorkCard';

/* Hallmark · page: column detail · genre: atmospheric · design-system: design.md
 * Guide and ranking articles only. Review articles route to /review/[slug].
 */

export const dynamicParams = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles
    .filter((a) => a.category !== 'review')
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
    },
  };
}

const CATEGORY_BAR: Record<string, string> = {
  guide:   'bg-sky-400',
  ranking: 'bg-amber-400',
};

export default async function ColumnDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article || article.category === 'review') notFound();

  const relatedWorks = article.relatedWorkIds
    .map((id) => getWorkById(id))
    .filter((w) => w !== undefined);

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      {/* Article header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className={`w-0.5 h-3 rounded-sm ${CATEGORY_BAR[article.category] ?? 'bg-ink-2'}`} />
          <span className="font-display font-bold text-[10px] uppercase tracking-[0.15em] text-ink-2">
            {ARTICLE_CATEGORY_LABELS[article.category]}
          </span>
          <time className="text-[10px] text-ink-2 ml-2">{article.publishedAt}</time>
        </div>

        <h1 className="text-2xl md:text-3xl font-black text-white leading-snug mb-4">{article.title}</h1>

        {relatedWorks[0]?.thumbnailUrl && (
          <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden mb-6">
            <Image
              src={relatedWorks[0].thumbnailUrl}
              alt={article.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 672px"
            />
          </div>
        )}

        <p className="text-sm text-ink-2 leading-relaxed">{article.description}</p>

        <div className="flex flex-wrap gap-1 mt-3">
          {article.tags.map((tag) => (
            <span key={tag} className="text-xs bg-paper-3 text-ink-2 px-2 py-0.5 rounded">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Article body */}
      <div className="border-t border-rule pt-8 space-y-10">
        {article.sections.map((section, i) => (
          <section key={i}>
            {section.heading && (
              <div className="flex items-baseline gap-3 mb-4">
                <div className="w-0.5 h-4 bg-accent flex-shrink-0 self-start mt-1" />
                <h2 className="text-base font-bold text-white leading-snug">{section.heading}</h2>
              </div>
            )}
            <p className="text-sm text-ink leading-[1.85] whitespace-pre-wrap">{section.body}</p>
          </section>
        ))}
      </div>

      {/* Related works */}
      {relatedWorks.length > 0 && (
        <section className="mt-12">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-rule">
            <h2 className="text-sm font-black text-white font-display uppercase tracking-widest">関連作品</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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
  );
}

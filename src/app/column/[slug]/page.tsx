import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { articles, getArticleBySlug, ARTICLE_CATEGORY_LABELS } from '@/data/articles';
import { getWorkById } from '@/data/works';
import WorkCard from '@/components/WorkCard';

export const dynamicParams = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
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

const CATEGORY_COLORS: Record<string, string> = {
  guide: 'bg-blue-900 text-blue-300',
  ranking: 'bg-yellow-900 text-yellow-300',
  review: 'bg-green-900 text-green-300',
};

export default async function ColumnDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const relatedWorks = article.relatedWorkIds
    .map((id) => getWorkById(id))
    .filter((w) => w !== undefined);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-bold px-2 py-0.5 rounded ${CATEGORY_COLORS[article.category]}`}>
            {ARTICLE_CATEGORY_LABELS[article.category]}
          </span>
          <time className="text-xs text-gray-500">{article.publishedAt}</time>
        </div>
        <h1 className="text-xl font-black text-white leading-tight mb-3">{article.title}</h1>
        <p className="text-sm text-gray-400 leading-relaxed">{article.description}</p>
        <div className="flex flex-wrap gap-1 mt-3">
          {article.tags.map((tag) => (
            <span key={tag} className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 space-y-8">
        {article.sections.map((section, i) => (
          <section key={i}>
            {section.heading && (
              <h2 className="text-lg font-bold text-white mb-4 pl-3 border-l-4 border-accent">
                {section.heading}
              </h2>
            )}
            <p className="text-base text-gray-200 leading-loose">{section.body}</p>
          </section>
        ))}
      </div>

      {relatedWorks.length > 0 && (
        <section className="mt-10">
          <h2 className="text-base font-black mb-4 pb-2 border-b border-gray-800">関連作品</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {relatedWorks.map((work) => (
              <WorkCard key={work!.id} work={work!} />
            ))}
          </div>
        </section>
      )}

      <div className="mt-8 flex gap-4 text-sm text-gray-500">
        <Link href="/column" className="hover:text-accent transition-colors">
          ← コラム一覧
        </Link>
        <Link href="/" className="hover:text-accent transition-colors">
          トップへ
        </Link>
      </div>
    </div>
  );
}

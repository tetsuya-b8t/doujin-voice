import Link from 'next/link';
import type { Article } from '@/data/articles';
import ArticleCard from './ArticleCard';
import { getWorkById } from '@/data/works';

type Props = {
  articles: Article[];
};

export default function EditorialSection({ articles }: Props) {
  if (articles.length === 0) return null;

  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-xs text-accent uppercase tracking-widest mb-1">Column</p>
          <h2 className="text-xl font-black text-ink">編集部おすすめコラム</h2>
        </div>
        <Link href="/column" className="text-sm text-accent hover:underline font-bold">
          全コラムを読む →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.map((article) => {
          const firstWork = article.relatedWorkIds[0]
            ? getWorkById(article.relatedWorkIds[0])
            : undefined;
          return (
            <ArticleCard
              key={article.slug}
              article={article}
              coverImageUrl={firstWork?.thumbnailUrl}
            />
          );
        })}
      </div>
    </section>
  );
}

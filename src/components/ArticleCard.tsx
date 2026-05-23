import Link from 'next/link';
import { Article, ARTICLE_CATEGORY_LABELS } from '@/data/articles';

type Props = {
  article: Article;
};

const CATEGORY_COLORS: Record<string, string> = {
  guide: 'bg-blue-500/15 text-blue-300 border border-blue-500/30',
  ranking: 'bg-yellow-500/15 text-yellow-300 border border-yellow-500/30',
  review: 'bg-green-500/15 text-green-300 border border-green-500/30',
};

export default function ArticleCard({ article }: Props) {
  return (
    <Link href={`/column/${article.slug}`} className="block group">
      <div className="bg-card rounded-lg border border-white/10 hover:border-white/30 transition-all duration-200 hover:-translate-y-0.5 p-5 h-full flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-bold px-2 py-0.5 rounded ${CATEGORY_COLORS[article.category]}`}>
            {ARTICLE_CATEGORY_LABELS[article.category]}
          </span>
          <time className="text-xs text-gray-500">{article.publishedAt}</time>
        </div>
        <h2 className="text-base font-bold text-gray-100 line-clamp-2 group-hover:text-white transition-colors mb-3 leading-snug">
          {article.title}
        </h2>
        <p className="text-sm text-gray-300 line-clamp-3 leading-relaxed flex-1">
          {article.description}
        </p>
        <div className="flex flex-wrap gap-1 mt-3">
          {article.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs bg-gray-800 text-gray-500 px-2 py-0.5 rounded">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

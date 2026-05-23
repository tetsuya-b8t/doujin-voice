import Link from 'next/link';
import type { Article } from '@/data/articles';

const CATEGORY_COLOR: Record<string, string> = {
  guide: 'text-blue-400',
  ranking: 'text-yellow-400',
  review: 'text-green-400',
};

const CATEGORY_LABEL: Record<string, string> = {
  guide: 'ガイド',
  ranking: 'ランキング',
  review: 'レビュー',
};

type Props = {
  articles: Article[];
};

export default function ColumnWidget({ articles }: Props) {
  return (
    <div className="bg-card border border-white/10 rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-black text-white">注目コラム</h3>
        <Link href="/column" className="text-xs text-accent hover:underline">
          すべて見る →
        </Link>
      </div>
      <ul className="space-y-3">
        {articles.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/column/${article.slug}`}
              className="block hover:bg-white/5 rounded-lg p-1.5 -mx-1.5 transition-colors"
            >
              <span className={`text-xs font-bold ${CATEGORY_COLOR[article.category] ?? 'text-gray-400'}`}>
                {CATEGORY_LABEL[article.category] ?? article.category}
              </span>
              <p className="text-gray-200 text-xs leading-snug mt-0.5 line-clamp-2">{article.title}</p>
              <p className="text-gray-600 text-xs mt-1">{article.publishedAt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

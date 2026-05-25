import Link from 'next/link';
import type { Article } from '@/data/articles';

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
    <div className="bg-card border border-rule rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-black text-ink flex items-center gap-2">
          <span className="w-0.5 h-3.5 bg-accent rounded-full inline-block" />
          注目コラム
        </h3>
        <Link href="/column" className="text-xs text-ink-2 hover:text-accent" style={{ transitionProperty: 'color', transitionDuration: '150ms' }}>
          すべて見る →
        </Link>
      </div>
      <ul className="space-y-3">
        {articles.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/column/${article.slug}`}
              className="block hover:bg-background rounded-lg p-1.5 -mx-1.5"
              style={{ transitionProperty: 'background-color', transitionDuration: '150ms' }}
            >
              <span className="text-xs font-bold text-accent">
                {CATEGORY_LABEL[article.category] ?? article.category}
              </span>
              <p className="text-ink text-xs leading-snug mt-0.5 line-clamp-2">{article.title}</p>
              <p className="text-ink-2 text-xs mt-1">{article.publishedAt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

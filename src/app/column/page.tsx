import type { Metadata } from 'next';
import { articles } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';

export const metadata: Metadata = {
  title: 'コラム・ガイド',
  description: '同人音声の選び方・ジャンル解説・おすすめランキングなど、初心者から上級者まで役立つコラムを掲載。',
  openGraph: {
    title: 'コラム・ガイド | 同人ボイスレビュー',
    description: '同人音声の選び方・ジャンル解説・おすすめランキング',
  },
};

export default function ColumnPage() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-black mb-3 tracking-tight">コラム・ガイド</h1>
      <p className="text-gray-300 text-base mb-10 max-w-xl leading-relaxed">
        同人音声の選び方・ジャンル解説・おすすめランキングを掲載しています。
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sorted.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}

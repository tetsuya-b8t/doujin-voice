import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Category, CATEGORY_LABELS, getWorksByCategory } from '@/data/works';
import WorkCard from '@/components/WorkCard';

const VALID_CATEGORIES: Category[] = ['asmr', 'ntr', 'ts', 'yuri', 'ninpu'];

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return VALID_CATEGORIES.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!VALID_CATEGORIES.includes(slug as Category)) return {};
  const label = CATEGORY_LABELS[slug as Category];
  return {
    title: `${label}作品一覧`,
    description: `FANZA同人音声の${label}カテゴリ作品一覧。人気・評価の高い作品をレビュー。`,
    openGraph: {
      title: `${label}作品一覧 | 同人ボイスレビュー`,
      description: `FANZA同人音声の${label}カテゴリ作品一覧`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  if (!VALID_CATEGORIES.includes(slug as Category)) notFound();

  const category = slug as Category;
  const categoryWorks = getWorksByCategory(category);
  const label = CATEGORY_LABELS[category];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <span className="bg-accent text-white text-xs font-black px-2 py-1 rounded uppercase">{label}</span>
        <h1 className="text-2xl font-black mt-2">{label}作品一覧</h1>
        <p className="text-gray-500 text-sm mt-1">{categoryWorks.length}件</p>
      </div>
      {categoryWorks.length === 0 ? (
        <p className="text-gray-500">このカテゴリの作品はまだありません。</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categoryWorks.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      )}
    </div>
  );
}

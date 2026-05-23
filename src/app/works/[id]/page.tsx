import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { works, getWorkById, getWorksByCategory, Category } from '@/data/works';
import { articles } from '@/data/articles';
import StarRating from '@/components/StarRating';
import CategoryBadge from '@/components/CategoryBadge';
import WorkCard from '@/components/WorkCard';

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
      <div className="bg-card border border-gray-800 rounded-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-72 flex-shrink-0">
            <Image
              src={work.thumbnailUrl}
              alt={work.title}
              width={300}
              height={300}
              className="w-full aspect-square object-cover"
              unoptimized
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <CategoryBadge category={work.category} active />
              <StarRating rating={work.rating} />
            </div>
            <h1 className="text-xl font-bold text-white leading-tight mb-3">
              {work.title}
            </h1>
            <dl className="text-sm space-y-1 text-gray-400 mb-4">
              <div><dt className="inline text-gray-600">サークル: </dt><dd className="inline">{work.circle}</dd></div>
              <div><dt className="inline text-gray-600">CV: </dt><dd className="inline">{work.cv}</dd></div>
              <div><dt className="inline text-gray-600">価格: </dt><dd className="inline text-accent font-bold text-base">¥{work.price.toLocaleString()}</dd></div>
            </dl>
            <div className="flex flex-wrap gap-1 mb-4">
              {work.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tag/${encodeURIComponent(tag)}`}
                  className="text-xs bg-gray-800 text-gray-400 hover:text-accent hover:bg-gray-700 px-2 py-0.5 rounded transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
            <Link
              href={work.affiliateUrl}
              className="block w-full text-center bg-accent hover:bg-accent-hover text-white font-black py-3 rounded-lg transition-colors text-lg"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              FANZAで購入する →
            </Link>
          </div>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="text-lg font-black mb-3 pb-2 border-b border-gray-800">作品紹介</h2>
        <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{work.description}</p>
      </section>

      {columnArticle && (
        <Link href={`/column/${columnArticle.slug}`} className="block mt-8">
          <div className="bg-card border border-white/10 hover:border-white/30 rounded-lg p-4 transition-all flex items-center gap-4">
            <div className="text-2xl">📖</div>
            <div>
              <p className="text-xs text-gray-500 mb-1">このジャンルをもっと知る</p>
              <p className="text-sm font-bold text-gray-100 hover:text-white">{columnArticle.title}</p>
            </div>
            <span className="ml-auto text-gray-500 text-sm">→</span>
          </div>
        </Link>
      )}

      {relatedWorks.length > 0 && (
        <section className="mt-10">
          <h2 className="text-lg font-black mb-4 pb-2 border-b border-gray-800">同じジャンルのおすすめ</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedWorks.map((w) => (
              <WorkCard key={w.id} work={w} />
            ))}
          </div>
        </section>
      )}

      <div className="mt-8 flex gap-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-accent transition-colors">← トップに戻る</Link>
        <Link href={`/category/${work.category}`} className="hover:text-accent transition-colors">カテゴリ一覧 →</Link>
      </div>
    </div>
  );
}

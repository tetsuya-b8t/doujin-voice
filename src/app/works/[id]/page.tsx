import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { works, getWorkById } from '@/data/works';

export const dynamicParams = false;
import StarRating from '@/components/StarRating';
import CategoryBadge from '@/components/CategoryBadge';

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

export default async function WorkDetailPage({ params }: Props) {
  const { id } = await params;
  const work = getWorkById(id);
  if (!work) notFound();

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
                <span key={tag} className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded">
                  #{tag}
                </span>
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

      <div className="mt-8">
        <Link href="/" className="text-sm text-gray-500 hover:text-accent transition-colors">
          ← トップに戻る
        </Link>
      </div>
    </div>
  );
}

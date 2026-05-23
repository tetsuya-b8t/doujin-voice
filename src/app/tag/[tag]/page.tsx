import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllTags, getWorksByTag } from '@/data/works';
import WorkCard from '@/components/WorkCard';

export const dynamicParams = false;

type Props = {
  params: Promise<{ tag: string }>;
};

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag: encodeURIComponent(tag) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  return {
    title: `#${decoded} の同人音声一覧`,
    description: `「${decoded}」タグが付いた同人音声作品の一覧。人気・高評価順で紹介。`,
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const tagWorks = getWorksByTag(decoded);

  if (tagWorks.length === 0) notFound();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <span className="text-xs text-gray-500 uppercase tracking-wider">タグ</span>
        <h1 className="text-3xl font-black mt-1">
          <span className="text-accent">#</span>{decoded}
        </h1>
        <p className="text-gray-500 text-sm mt-2">{tagWorks.length}件の作品</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tagWorks.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
    </div>
  );
}

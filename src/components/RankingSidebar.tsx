import Link from 'next/link';
import Image from 'next/image';
import { Work } from '@/data/works';
import StarRating from './StarRating';

type Props = {
  works: Work[];
};

const RANK_STYLES = [
  'text-yellow-400',
  'text-gray-400',
  'text-amber-700',
  'text-gray-600',
  'text-gray-600',
];

export default function RankingSidebar({ works }: Props) {
  return (
    <aside className="bg-card rounded-xl border border-gray-800 p-4">
      <h2 className="text-sm font-bold text-gray-200 mb-4">週間ランキング Top5</h2>
      <ol className="space-y-3">
        {works.slice(0, 5).map((work, i) => (
          <li key={work.id}>
            <Link href={`/works/${work.id}`} className="flex items-center gap-3 group">
              <span className={`text-xl font-black w-6 text-center ${RANK_STYLES[i]}`}>
                {i + 1}
              </span>
              <Image
                src={work.thumbnailUrl}
                alt={work.title}
                width={48}
                height={48}
                className="rounded object-cover flex-shrink-0"
                unoptimized
              />
              <div className="min-w-0">
                <p className="text-xs text-gray-200 line-clamp-2 group-hover:text-white transition-colors">
                  {work.title}
                </p>
                <StarRating rating={work.rating} size="sm" />
              </div>
            </Link>
          </li>
        ))}
      </ol>
      <Link href="/ranking" className="mt-4 block text-center text-xs text-gray-400 hover:text-white transition-colors">
        全ランキングを見る →
      </Link>
    </aside>
  );
}

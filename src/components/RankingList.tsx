import Link from 'next/link';
import Image from 'next/image';
import { Work } from '@/data/works';
import StarRating from './StarRating';
import CategoryBadge from './CategoryBadge';

type Props = {
  works: Work[];
};

const RANK_STYLES: Record<number, string> = {
  1: 'text-yellow-400 text-3xl',
  2: 'text-gray-400 text-3xl',
  3: 'text-amber-700 text-3xl',
};

export default function RankingList({ works }: Props) {
  return (
    <ol className="space-y-3">
      {works.map((work, i) => {
        const rank = i + 1;
        return (
          <li key={work.id} className="bg-card border border-gray-800 rounded-xl overflow-hidden hover:border-accent transition-colors">
            <Link href={`/works/${work.id}`} className="flex items-center gap-4 p-4 group">
              <span className={`font-black w-10 text-center flex-shrink-0 ${RANK_STYLES[rank] ?? 'text-gray-600 text-xl'}`}>
                {rank}
              </span>
              <Image
                src={work.thumbnailUrl}
                alt={work.title}
                width={72}
                height={72}
                className="rounded object-cover flex-shrink-0"
                unoptimized
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <CategoryBadge category={work.category} />
                  <StarRating rating={work.rating} size="sm" />
                </div>
                <p className="text-sm md:text-base font-bold text-gray-100 line-clamp-2 group-hover:text-accent transition-colors">
                  {work.title}
                </p>
                <p className="text-xs text-gray-500 mt-1">{work.circle} / CV: {work.cv}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-lg font-black text-accent">¥{work.price.toLocaleString()}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}

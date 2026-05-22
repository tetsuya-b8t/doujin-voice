import Link from 'next/link';
import Image from 'next/image';
import { Work } from '@/data/works';
import StarRating from './StarRating';
import CategoryBadge from './CategoryBadge';

type Props = {
  work: Work;
  rank?: number;
};

const RANK_COLORS: Record<number, string> = {
  1: 'bg-yellow-500 text-black',
  2: 'bg-gray-400 text-black',
  3: 'bg-amber-700 text-white',
};

export default function WorkCard({ work, rank }: Props) {
  return (
    <Link href={`/works/${work.id}`} className="block group">
      <div className="bg-card rounded-lg overflow-hidden border border-gray-800 hover:border-accent transition-colors duration-200">
        <div className="relative">
          <Image
            src={work.thumbnailUrl}
            alt={work.title}
            width={300}
            height={300}
            className="w-full aspect-square object-cover"
            unoptimized
          />
          {rank !== undefined && rank <= 3 && (
            <span
              className={`absolute top-2 left-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${RANK_COLORS[rank]}`}
            >
              {rank}
            </span>
          )}
          {rank !== undefined && rank > 3 && (
            <span className="absolute top-2 left-2 bg-gray-800 text-gray-300 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold">
              {rank}
            </span>
          )}
        </div>
        <div className="p-3">
          <div className="flex items-center gap-2 mb-1">
            <CategoryBadge category={work.category} />
            <StarRating rating={work.rating} size="sm" />
          </div>
          <p className="text-sm font-medium text-gray-100 line-clamp-2 group-hover:text-accent transition-colors">
            {work.title}
          </p>
          <p className="text-xs text-gray-500 mt-1">{work.circle}</p>
          <p className="text-sm font-bold text-accent mt-2">¥{work.price.toLocaleString()}</p>
        </div>
      </div>
    </Link>
  );
}

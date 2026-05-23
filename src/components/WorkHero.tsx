import Image from 'next/image';
import Link from 'next/link';
import { Work } from '@/data/works';
import CategoryBadge from './CategoryBadge';
import StarRating from './StarRating';

type Props = {
  work: Work;
};

export default function WorkHero({ work }: Props) {
  return (
    <div className="bg-card border border-gray-800 rounded-xl overflow-hidden">
      <div className="md:flex">
        <div className="md:w-64 flex-shrink-0">
          <Image
            src={work.thumbnailUrl}
            alt={work.title}
            width={300}
            height={300}
            className="w-full md:h-full object-cover"
            unoptimized
          />
        </div>
        <div className="p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-rose-500/80 text-white text-xs font-bold px-2 py-1 rounded">PICK UP</span>
              <CategoryBadge category={work.category} active />
              <StarRating rating={work.rating} />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
              {work.title}
            </h2>
            <p className="text-sm text-gray-500 mb-1">CV: {work.cv}｜{work.circle}</p>
            <p className="text-gray-400 text-sm mt-3 line-clamp-3">{work.description}</p>
            <div className="flex flex-wrap gap-1 mt-3">
              {work.tags.map((tag) => (
                <span key={tag} className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-center gap-4 flex-wrap">
            <p className="text-2xl font-black text-white">¥{work.price.toLocaleString()}</p>
            <Link
              href={work.affiliateUrl}
              className="bg-accent hover:bg-accent-hover text-white font-bold px-6 py-2 rounded-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              FANZAで購入する →
            </Link>
            <Link href={`/works/${work.id}`} className="text-sm text-gray-400 hover:text-white transition-colors">
              詳細を見る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

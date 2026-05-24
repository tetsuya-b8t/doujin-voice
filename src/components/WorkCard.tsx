import Link from 'next/link';
import Image from 'next/image';
import { Work, CATEGORY_LABELS, Category } from '@/data/works';
import StarRating from './StarRating';

/* Hallmark · component: WorkCard · genre: atmospheric · design-system: design.md
 * Premium catalog: 3:4 jacket, accent left-bar per genre, hover title overlay. No price.
 */

type Props = {
  work: Work;
  rank?: number;
};

const CATEGORY_ACCENT: Record<Category, string> = {
  asmr:  'bg-sky-400',
  ntr:   'bg-rose-400',
  ts:    'bg-amber-400',
  yuri:  'bg-pink-400',
  ninpu: 'bg-emerald-400',
  hypno: 'bg-violet-400',
};

export default function WorkCard({ work, rank }: Props) {
  return (
    <Link href={`/works/${work.id}`} className="block group">
      <div
        className="relative border border-rule rounded-lg bg-card overflow-hidden hover:border-white/20"
        style={{ transitionProperty: 'border-color', transitionDuration: '150ms' }}
      >
        {/* Category accent bar */}
        <div className={`absolute left-0 top-0 bottom-0 w-0.5 z-10 ${CATEGORY_ACCENT[work.category]}`} />

        {/* 3:4 jacket */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={work.thumbnailUrl}
            alt={work.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            unoptimized
          />
          {/* Rank ghost number */}
          {rank !== undefined && (
            <span className="absolute top-2 left-3 font-display font-black text-5xl text-white/10 leading-none select-none z-10 pointer-events-none">
              {rank}
            </span>
          )}
          {/* Hover title overlay */}
          <div
            className="absolute inset-0 bg-background/0 group-hover:bg-background/80 flex items-end p-3"
            style={{ transitionProperty: 'background-color', transitionDuration: '150ms' }}
          >
            <p
              className="text-white font-bold text-sm leading-snug line-clamp-2 opacity-0 group-hover:opacity-100"
              style={{ transitionProperty: 'opacity', transitionDuration: '150ms' }}
            >
              {work.title}
            </p>
          </div>
        </div>

        {/* Footer: rating + genre label */}
        <div className="px-3 py-2 flex items-center justify-between">
          <StarRating rating={work.rating} size="sm" />
          <span className="font-display font-bold text-ink-2 text-xs uppercase tracking-wide">
            {CATEGORY_LABELS[work.category]}
          </span>
        </div>
      </div>
    </Link>
  );
}

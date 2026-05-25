import Link from 'next/link';
import Image from 'next/image';
import { Work, CATEGORY_LABELS } from '@/data/works';
import StarRating from './StarRating';

/* Hallmark · component: WorkCard · genre: cosme · design-system: design.md
 * Rounded card: 3:4 jacket, amber star rating, rose tag pill, hover border.
 */

type Props = {
  work: Work;
  rank?: number;
};

export default function WorkCard({ work, rank }: Props) {
  return (
    <Link href={`/works/${work.id}`} className="block group">
      <div
        className="relative border border-rule rounded-xl bg-card overflow-hidden hover:border-accent/40"
        style={{ transitionProperty: 'border-color', transitionDuration: '150ms' }}
      >
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
          {rank !== undefined && (
            <span className="absolute top-2 left-3 font-display font-black text-5xl text-black/10 leading-none select-none z-10 pointer-events-none">
              {rank}
            </span>
          )}
          {/* Hover overlay */}
          <div
            className="absolute inset-0 bg-card/0 group-hover:bg-card/80 flex items-end p-3"
            style={{ transitionProperty: 'background-color', transitionDuration: '150ms' }}
          >
            <p
              className="text-ink font-bold text-sm leading-snug line-clamp-2 opacity-0 group-hover:opacity-100"
              style={{ transitionProperty: 'opacity', transitionDuration: '150ms' }}
            >
              {work.title}
            </p>
          </div>
        </div>

        {/* Footer: rating + tag */}
        <div className="px-3 py-2 flex items-center justify-between">
          <StarRating rating={work.rating} size="sm" />
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-tag-bg border border-tag-border text-accent font-medium">
            {CATEGORY_LABELS[work.category]}
          </span>
        </div>
      </div>
    </Link>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { Work, CATEGORY_LABELS } from '@/data/works';
import StarRating from './StarRating';

/* Hallmark · component: WorkHero · genre: atmospheric · design-system: design.md
 * Premium catalog hero: left 50% jacket bleed, right info column with CTA. No price display.
 */

type Props = {
  work: Work;
};

export default function WorkHero({ work }: Props) {
  return (
    <div className="bg-card border border-rule rounded-xl overflow-hidden">
      <div className="md:flex md:min-h-[300px]">
        {/* Left: jacket bleed */}
        <div className="relative h-56 md:h-auto md:w-1/2 flex-shrink-0">
          <Image
            src={work.thumbnailUrl}
            alt={work.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
          />
        </div>

        {/* Right: info column */}
        <div className="flex flex-col justify-between p-6 md:p-8 border-t border-rule md:border-t-0 md:border-l md:border-l-rule">
          <div>
            <p className="font-display font-bold text-xs tracking-[0.2em] uppercase text-ink-2 mb-1">
              FEATURED WORK
            </p>
            <div className="w-6 h-0.5 bg-accent mb-4" />
            <div className="flex items-center gap-3 mb-3">
              <span className="font-display font-bold text-xs uppercase tracking-widest text-ink-2">
                {CATEGORY_LABELS[work.category]}
              </span>
              <StarRating rating={work.rating} />
            </div>
            <h2 className="text-xl md:text-2xl font-black text-ink leading-tight mb-2">
              {work.title}
            </h2>
            <p className="text-sm text-ink-2 mb-3">CV: {work.cv}｜{work.circle}</p>
            <p className="text-ink-2 text-sm leading-relaxed line-clamp-3">{work.description}</p>
            <div className="flex flex-wrap gap-1 mt-3">
              {work.tags.map((tag) => (
                <span key={tag} className="text-xs bg-paper-3 text-ink-2 px-2 py-0.5 rounded">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4 flex-wrap">
            <Link
              href={work.affiliateUrl}
              className="bg-accent hover:bg-accent-hover text-white font-black px-6 py-2.5 rounded-lg text-sm"
              style={{ transitionProperty: 'background-color', transitionDuration: '150ms' }}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              FANZAで購入する →
            </Link>
            <Link
              href={`/works/${work.id}`}
              className="text-sm text-ink-2 hover:text-accent"
              style={{ transitionProperty: 'color', transitionDuration: '150ms' }}
            >
              詳細を見る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

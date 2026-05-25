import Link from 'next/link';
import Image from 'next/image';
import { Article, ARTICLE_CATEGORY_LABELS } from '@/data/articles';

/* Hallmark · component: ArticleCard · genre: atmospheric · design-system: design.md
 * 21:9 cinema cover, border-color hover only, category as vertical-bar + uppercase label.
 */

type Props = {
  article: Article;
  coverImageUrl?: string;
};

const CATEGORY_BAR: Record<string, string> = {
  guide:   'bg-sky-400',
  ranking: 'bg-amber-400',
  review:  'bg-accent',
};

export default function ArticleCard({ article, coverImageUrl }: Props) {
  const href = article.category === 'review'
    ? `/review/${article.slug}`
    : `/column/${article.slug}`;

  return (
    <Link href={href} className="block group">
      <div
        className="bg-card rounded-lg border border-rule hover:border-accent/40 h-full flex flex-col overflow-hidden"
        style={{ transitionProperty: 'border-color', transitionDuration: '150ms' }}
      >
        {/* Cover image — 21:9 cinema ratio */}
        <div className="relative w-full aspect-[21/9] overflow-hidden bg-paper-3">
          {coverImageUrl && (
            <Image
              src={coverImageUrl}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          )}
          {/* Date overlay */}
          <time className="absolute bottom-1.5 right-2 text-[10px] text-ink-2 bg-background/80 px-1.5 py-0.5 rounded">
            {article.publishedAt}
          </time>
        </div>

        <div className="p-4 flex flex-col flex-1">
          {/* Category: vertical bar + uppercase label */}
          <div className="flex items-center gap-2 mb-3">
            <div className={`w-0.5 h-3 rounded-sm flex-shrink-0 ${CATEGORY_BAR[article.category] ?? 'bg-ink-2'}`} />
            <span className="font-display font-bold text-[10px] uppercase tracking-[0.15em] text-ink-2">
              {ARTICLE_CATEGORY_LABELS[article.category]}
            </span>
          </div>

          <h2 className="text-base font-bold text-ink line-clamp-2 group-hover:text-accent mb-2 leading-snug"
              style={{ transitionProperty: 'color', transitionDuration: '150ms' }}>
            {article.title}
          </h2>

          <p className="text-sm text-ink-2 line-clamp-2 leading-relaxed flex-1">
            {article.description}
          </p>

          <p className="text-xs font-display font-bold text-ink-2 mt-3 group-hover:text-accent text-right"
             style={{ transitionProperty: 'color', transitionDuration: '150ms' }}>
            続きを読む →
          </p>
        </div>
      </div>
    </Link>
  );
}

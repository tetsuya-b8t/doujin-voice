import Link from 'next/link';
import Image from 'next/image';
import { Work } from '@/data/works';
import StarRating from './StarRating';

type Props = {
  works: Work[];
};

export default function RankingSidebar({ works }: Props) {
  return (
    <aside className="bg-card rounded-xl border border-rule p-4">
      <h2 className="text-sm font-bold text-ink mb-4 pb-3 border-b border-rule flex items-center gap-2">
        <span className="w-0.5 h-3.5 bg-accent rounded-full inline-block" />
        週間ランキング Top5
      </h2>
      <ol className="space-y-3">
        {works.slice(0, 5).map((work, i) => (
          <li key={work.id}>
            <Link href={`/works/${work.id}`} className="flex items-center gap-3 group">
              <span className="text-base font-black w-6 text-center flex-shrink-0" style={{ color: i === 0 ? '#e8a030' : '#bbb' }}>
                {i + 1}
              </span>
              <Image
                src={work.thumbnailUrl}
                alt={work.title}
                width={48}
                height={48}
                className="rounded-lg object-cover flex-shrink-0"
                unoptimized
              />
              <div className="min-w-0">
                <p className="text-xs text-ink line-clamp-2 group-hover:text-accent" style={{ transitionProperty: 'color', transitionDuration: '150ms' }}>
                  {work.title}
                </p>
                <StarRating rating={work.rating} size="sm" />
              </div>
            </Link>
          </li>
        ))}
      </ol>
      <Link
        href="/ranking"
        className="mt-4 block text-center text-xs text-ink-2 hover:text-accent"
        style={{ transitionProperty: 'color', transitionDuration: '150ms' }}
      >
        全ランキングを見る →
      </Link>
    </aside>
  );
}

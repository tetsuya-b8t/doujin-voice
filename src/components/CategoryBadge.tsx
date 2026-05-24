import { Category, CATEGORY_LABELS } from '@/data/works';

/* Hallmark · component: CategoryBadge · genre: atmospheric · design-system: design.md */

type Props = {
  category: Category;
  active?: boolean;
};

export default function CategoryBadge({ category, active = false }: Props) {
  return (
    <span
      className={`inline-block px-2 py-0.5 rounded text-xs font-display font-bold uppercase ${
        active
          ? 'bg-accent text-white'
          : 'bg-paper-3 text-ink-2 border border-rule'
      }`}
    >
      {CATEGORY_LABELS[category]}
    </span>
  );
}

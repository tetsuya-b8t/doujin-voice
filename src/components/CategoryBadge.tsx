import { Category, CATEGORY_LABELS } from '@/data/works';

type Props = {
  category: Category;
  active?: boolean;
};

export default function CategoryBadge({ category, active = false }: Props) {
  return (
    <span
      className={`inline-block px-2 py-0.5 rounded text-xs font-bold uppercase ${
        active
          ? 'bg-accent text-white'
          : 'bg-card text-gray-300 border border-gray-700'
      }`}
    >
      {CATEGORY_LABELS[category]}
    </span>
  );
}

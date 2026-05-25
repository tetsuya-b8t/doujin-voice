type Props = {
  rating: number;
  size?: 'sm' | 'md';
};

export default function StarRating({ rating, size = 'md' }: Props) {
  const textSize = size === 'sm' ? 'text-xs' : 'text-sm';
  return (
    <span className={`font-bold ${textSize}`} style={{ color: '#e8a030' }}>
      ★{rating.toFixed(1)}
    </span>
  );
}

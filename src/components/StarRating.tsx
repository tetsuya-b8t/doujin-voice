type Props = {
  rating: number;
  size?: 'sm' | 'md';
};

export default function StarRating({ rating, size = 'md' }: Props) {
  const textSize = size === 'sm' ? 'text-xs' : 'text-sm';
  return (
    <span className={`text-yellow-400 font-bold ${textSize}`}>
      ★{rating.toFixed(1)}
    </span>
  );
}

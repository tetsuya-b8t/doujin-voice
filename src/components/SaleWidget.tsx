import Link from 'next/link';
import { getActiveSales, getDiscountRate } from '@/data/sales';
import { works } from '@/data/works';

export default function SaleWidget() {
  const sales = getActiveSales().slice(0, 4);
  if (sales.length === 0) return null;

  return (
    <div className="bg-card border border-pink-900/40 rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-black text-white flex items-center gap-1">
          <span className="text-pink-400">SALE</span> 開催中
        </h3>
        <Link href="/sale" className="text-xs text-accent hover:underline">
          すべて見る →
        </Link>
      </div>
      <ul className="space-y-2">
        {sales.map((sale) => {
          const work = works.find((w) => w.id === sale.workId);
          if (!work) return null;
          const discount = getDiscountRate(sale);
          return (
            <li key={sale.workId}>
              <Link
                href={`/works/${work.id}`}
                className="flex items-start gap-2 hover:bg-white/5 rounded-lg p-1.5 -mx-1.5 transition-colors"
              >
                <span className="shrink-0 bg-pink-600 text-white text-xs font-black px-1.5 py-0.5 rounded mt-0.5">
                  -{discount}%
                </span>
                <div className="min-w-0">
                  <p className="text-gray-200 text-xs leading-snug line-clamp-2">{work.title}</p>
                  <p className="text-accent text-xs font-bold mt-0.5">
                    ¥{sale.salePrice.toLocaleString()}
                    <span className="text-gray-500 line-through ml-1 font-normal">
                      ¥{sale.originalPrice.toLocaleString()}
                    </span>
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

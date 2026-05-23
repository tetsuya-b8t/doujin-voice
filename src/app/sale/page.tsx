import type { Metadata } from 'next';
import Link from 'next/link';
import { getActiveSales, getDiscountRate, freePickups } from '@/data/sales';
import { works } from '@/data/works';
import WorkCard from '@/components/WorkCard';

export const metadata: Metadata = {
  title: 'セール・無料情報｜doujin-voice.com',
  description: 'FANZA同人音声の期間限定セール・割引情報と無料試聴ピックアップ。お得な作品を見逃さないために。',
};

export const revalidate = 3600;

export default function SalePage() {
  const sales = getActiveSales();
  const freeWorks = freePickups
    .map((fp) => ({ pickup: fp, work: works.find((w) => w.id === fp.workId) }))
    .filter((x) => x.work != null);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8">
        <p className="text-xs text-accent uppercase tracking-widest mb-1">お得情報</p>
        <h1 className="text-3xl font-black text-white mb-2">セール・無料情報</h1>
        <p className="text-gray-400 text-sm">期間限定セールと無料試聴ピックアップ。随時更新中。</p>
      </div>

      {freeWorks.length > 0 && (
        <section className="mb-12">
          <h2 className="text-lg font-black text-white mb-4 flex items-center gap-2">
            <span className="text-green-400">FREE</span> 無料・試聴強化作品
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {freeWorks.map(({ pickup, work }) => (
              <div key={work!.id} className="relative">
                <div className="absolute top-2 left-2 z-10 bg-green-600 text-white text-xs font-black px-2 py-0.5 rounded">
                  {pickup.reason}
                </div>
                <WorkCard work={work!} />
              </div>
            ))}
          </div>
        </section>
      )}

      {sales.length > 0 ? (
        <section>
          <h2 className="text-lg font-black text-white mb-4 flex items-center gap-2">
            <span className="text-pink-400">SALE</span> 期間限定割引
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {sales.map((sale) => {
              const work = works.find((w) => w.id === sale.workId);
              if (!work) return null;
              const discount = getDiscountRate(sale);
              return (
                <div key={sale.workId} className="relative">
                  <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
                    <span className="bg-pink-600 text-white text-xs font-black px-2 py-0.5 rounded">
                      -{discount}% OFF
                    </span>
                    <span className="bg-gray-900/80 text-gray-300 text-xs px-2 py-0.5 rounded">
                      {sale.saleEnds}まで
                    </span>
                  </div>
                  <WorkCard work={work} />
                  <div className="mt-1 px-1 text-center">
                    <span className="text-accent font-black text-sm">¥{sale.salePrice.toLocaleString()}</span>
                    <span className="text-gray-500 line-through text-xs ml-2">
                      ¥{sale.originalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ) : (
        <div className="text-center py-16 text-gray-500">
          <p className="text-4xl mb-4">🏷️</p>
          <p>現在開催中のセールはありません</p>
          <Link href="/" className="text-accent hover:underline text-sm mt-2 inline-block">
            トップに戻る
          </Link>
        </div>
      )}
    </div>
  );
}

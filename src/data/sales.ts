export type SaleEntry = {
  workId: string;
  originalPrice: number;
  salePrice: number;
  saleEnds: string; // "YYYY-MM-DD"
};

export type FreePickup = {
  workId: string;
  reason: string; // なぜ今おすすめか一言
};

// 手動更新：FANZAセール情報
export const currentSales: SaleEntry[] = [
  { workId: '1', originalPrice: 1320, salePrice: 660, saleEnds: '2026-05-31' },
  { workId: '3', originalPrice: 1540, salePrice: 770, saleEnds: '2026-05-31' },
  { workId: '5', originalPrice: 1650, salePrice: 825, saleEnds: '2026-05-28' },
  { workId: '8', originalPrice: 1320, salePrice: 528, saleEnds: '2026-05-30' },
  { workId: '12', originalPrice: 1100, salePrice: 550, saleEnds: '2026-05-29' },
  { workId: '15', originalPrice: 1540, salePrice: 616, saleEnds: '2026-05-31' },
];

// 体験無料・試聴強化作品のピックアップ
export const freePickups: FreePickup[] = [
  { workId: '2', reason: '試聴20分公開中' },
  { workId: '7', reason: '前編が期間限定無料' },
  { workId: '19', reason: '新作記念試聴延長' },
];

export function getDiscountRate(sale: SaleEntry): number {
  return Math.round((1 - sale.salePrice / sale.originalPrice) * 100);
}

export function isSaleActive(sale: SaleEntry): boolean {
  return new Date(sale.saleEnds) >= new Date(new Date().toDateString());
}

export function getActiveSales(): SaleEntry[] {
  return currentSales.filter(isSaleActive);
}

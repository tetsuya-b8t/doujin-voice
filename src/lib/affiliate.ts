const AF_ID = process.env.NEXT_PUBLIC_DMM_AF_ID ?? '';

/**
 * DMM商品URLをFANZAアフィリエイトリンクに変換する。
 * AF_IDが未設定の場合は元のURLをそのまま返す。
 *
 * @param productUrl - DMM商品ページURL
 * @param channelId  - クリック元を識別するチャンネルID（計測用）
 */
export function buildAffiliateUrl(productUrl: string, channelId = 'rank'): string {
  if (!AF_ID || !productUrl) return productUrl;
  const encoded = encodeURIComponent(productUrl);
  return `https://al.dmm.co.jp/?lurl=${encoded}&af_id=${AF_ID}&ch=pc_detail&ch_id=${channelId}`;
}

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import type { Category } from '@/data/works';

const FANZA_API = 'https://api.dmm.com/affiliate/v3/ItemList';
const HITS_PER_PAGE = 100;
const MAX_PAGES = 5;

type Genre = { id: string; name: string };
type Voice = { id: number; name: string };
type FanzaItem = {
  content_id: string;
  title: string;
  prices?: { price: string };
  review?: { count: number; average: string };
  imageURL?: { list: string; large?: string };
  affiliateURL?: string;
  maker?: { id: string; name: string };
  iteminfo?: { genre?: Genre[]; voice?: Voice[] };
  comment?: string;
};

function detectCategory(item: FanzaItem): Category {
  const genres = item.iteminfo?.genre?.map(g => g.name) ?? [];
  const t = item.title;
  if (genres.some(g => /催眠/.test(g)) || /催眠/.test(t)) return 'hypno';
  if (genres.some(g => /NTR|寝取られ|寝取り/.test(g)) || /NTR|寝取られ|寝取り/.test(t)) return 'ntr';
  if (genres.some(g => /TS|性転換|女体化|男の娘/.test(g)) || /TS|女体化/.test(t)) return 'ts';
  if (genres.some(g => /百合|レズ|ガールズラブ/.test(g))) return 'yuri';
  if (genres.some(g => /妊婦|妊娠/.test(g))) return 'ninpu';
  return 'asmr';
}

async function fetchPage(page: number): Promise<FanzaItem[]> {
  const params = new URLSearchParams({
    api_id: process.env.DMM_API_ID ?? '',
    affiliate_id: process.env.DMM_AFFILIATE_ID ?? '',
    site: 'FANZA',
    service: 'doujin',
    floor: 'digital_doujin',
    sort: 'rank',
    hits: String(HITS_PER_PAGE),
    offset: String((page - 1) * HITS_PER_PAGE + 1),
    output: 'json',
  });
  const res = await fetch(`${FANZA_API}?${params}`, { cache: 'no-store' });
  if (!res.ok) return [];
  const json = await res.json() as { result?: { items?: FanzaItem[] } };
  return json?.result?.items ?? [];
}

export async function GET(req: NextRequest) {
  const auth = req.headers.get('authorization');
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 });
  }

  const db = createClient(url, key);
  let total = 0;

  for (let page = 1; page <= MAX_PAGES; page++) {
    const items = await fetchPage(page);
    if (items.length === 0) break;

    const rows = items.map(item => ({
      fanza_id: item.content_id,
      title: item.title,
      circle: item.maker?.name ?? '不明',
      cv: item.iteminfo?.voice?.map(v => v.name).join(' / ') ?? '不明',
      category: detectCategory(item),
      price: parseInt(item.prices?.price ?? '0', 10) || 0,
      rating: parseFloat(item.review?.average ?? '0'),
      tags: item.iteminfo?.genre?.map(g => g.name) ?? [],
      description: item.comment ?? item.title,
      affiliate_url: item.affiliateURL ?? '',
      thumbnail_url: item.imageURL?.large ?? item.imageURL?.list ?? '',
    }));

    const { error } = await db
      .from('works')
      .upsert(rows, { onConflict: 'fanza_id' });

    if (error) {
      return NextResponse.json({ error: error.message, total }, { status: 500 });
    }

    total += rows.length;
    if (items.length < HITS_PER_PAGE) break;
  }

  return NextResponse.json({ success: true, total });
}

import { supabase } from './supabase';
import type { Work, Category } from '@/data/works';

type DbWork = {
  id: string;
  fanza_id: string;
  title: string;
  circle: string;
  cv: string;
  category: Category;
  price: number;
  rating: number;
  tags: string[];
  description: string;
  affiliate_url: string;
  thumbnail_url: string;
  created_at: string;
};

function toWork(row: DbWork): Work {
  return {
    id: row.fanza_id,
    title: row.title,
    circle: row.circle,
    cv: row.cv,
    category: row.category,
    price: row.price,
    rating: row.rating,
    tags: row.tags,
    description: row.description,
    affiliateUrl: row.affiliate_url,
    thumbnailUrl: row.thumbnail_url,
  };
}

export async function fetchAllWorks(): Promise<Work[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('works')
    .select('*')
    .order('created_at', { ascending: false });
  if (error || !data) return [];
  return data.map(toWork);
}

export async function fetchWorkById(fanzaId: string): Promise<Work | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('works')
    .select('*')
    .eq('fanza_id', fanzaId)
    .single();
  if (error || !data) return null;
  return toWork(data);
}

export async function fetchWorksByCategory(category: Category): Promise<Work[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('works')
    .select('*')
    .eq('category', category)
    .order('rating', { ascending: false });
  if (error || !data) return [];
  return data.map(toWork);
}

export async function fetchTopWorks(n: number): Promise<Work[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('works')
    .select('*')
    .order('rating', { ascending: false })
    .limit(n);
  if (error || !data) return [];
  return data.map(toWork);
}

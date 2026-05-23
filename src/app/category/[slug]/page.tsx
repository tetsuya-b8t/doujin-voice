import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Category, CATEGORY_LABELS, getWorksByCategory } from '@/data/works';
import { articles } from '@/data/articles';
import WorkCard from '@/components/WorkCard';

export const dynamicParams = false;

const VALID_CATEGORIES: Category[] = ['asmr', 'ntr', 'ts', 'yuri', 'ninpu', 'hypno'];

const CATEGORY_DESC: Record<Category, string> = {
  asmr: '耳元で囁かれる感覚と立体音響を楽しむジャンル。バイノーラル録音で再現された耳かき・添い寝・囁きが、ヘッドフォン越しに本物の気配を作り出す。眠れない夜に試してほしい一本が必ずある。',
  ntr: '背徳感と複雑な感情体験が独自の引力を持つジャンル。許されないとわかっていて聴き続けてしまう——その感情の渦がNTR音声にしかない中毒性を生む。',
  ts: 'TS（性転換）設定で「別の自分」の体験をするジャンル。現実では絶対にできない感覚を音声が再現する。戸惑いと受け入れのプロセスが、他のどのジャンルにもない没入感を作り出す。',
  yuri: '女性二人の声が重なる瞬間だけで空気が変わる。じれじれした純愛から始まる百合音声は、観客でありながらその場にいる感覚を生む独特のジャンルだ。',
  ninpu: '妊婦というシチュエーションが生む「生命と愛情の密度」が唯一無二。日常の会話と温もりの中に、他のジャンルにはない深さと優しさが宿っている。',
  hypno: '声が脳の防衛ラインを下げ、誘導の言葉があなたの内側に直接入ってくる。従うことが快感になる——そのプロセスを体験できるのがこのジャンルだけだ。',
};

const CATEGORY_COLUMN: Record<Category, string> = {
  asmr: 'what-is-asmr',
  ntr: 'ntr-ranking',
  ts: 'what-is-ts',
  yuri: 'yuri-best',
  ninpu: 'what-is-ninpu',
  hypno: 'what-is-hypno',
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return VALID_CATEGORIES.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!VALID_CATEGORIES.includes(slug as Category)) return {};
  const label = CATEGORY_LABELS[slug as Category];
  return {
    title: `${label}作品一覧`,
    description: `FANZA同人音声の${label}カテゴリ作品一覧。人気・評価の高い作品をレビュー。`,
    openGraph: {
      title: `${label}作品一覧 | 同人ボイスレビュー`,
      description: `FANZA同人音声の${label}カテゴリ作品一覧`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  if (!VALID_CATEGORIES.includes(slug as Category)) notFound();

  const category = slug as Category;
  const categoryWorks = getWorksByCategory(category);
  const label = CATEGORY_LABELS[category];
  const columnSlug = CATEGORY_COLUMN[category];
  const columnArticle = articles.find((a) => a.slug === columnSlug);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <span className="bg-accent text-white text-xs font-black px-2 py-1 rounded uppercase">{label}</span>
        <h1 className="text-2xl font-black mt-2">{label}作品一覧</h1>
        <p className="text-gray-400 text-sm mt-2 max-w-2xl leading-relaxed">{CATEGORY_DESC[category]}</p>
        <p className="text-gray-500 text-sm mt-2">{categoryWorks.length}件</p>
      </div>

      {columnArticle && (
        <Link href={`/column/${columnArticle.slug}`} className="block mb-8">
          <div className="bg-card border border-white/10 hover:border-accent/50 rounded-lg p-4 transition-all flex items-center gap-4">
            <div className="text-xl">📖</div>
            <div>
              <p className="text-xs text-gray-500 mb-0.5">{label}をもっと知りたい方へ</p>
              <p className="text-sm font-bold text-gray-200">{columnArticle.title}</p>
            </div>
            <span className="ml-auto text-gray-400 text-sm flex-shrink-0">解説を読む →</span>
          </div>
        </Link>
      )}

      {categoryWorks.length === 0 ? (
        <p className="text-gray-500">このカテゴリの作品はまだありません。</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categoryWorks.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      )}
    </div>
  );
}

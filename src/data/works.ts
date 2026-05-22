export type Category = 'asmr' | 'ntr' | 'ts' | 'yuri' | 'ninpu';

export type Work = {
  id: string;
  title: string;
  circle: string;
  cv: string;
  category: Category;
  price: number;
  rating: number;
  tags: string[];
  description: string;
  affiliateUrl: string;
  thumbnailUrl: string;
};

export const CATEGORY_LABELS: Record<Category, string> = {
  asmr: 'ASMR',
  ntr: 'NTR',
  ts: 'TS',
  yuri: '百合',
  ninpu: '妊婦',
};

export const works: Work[] = [
  {
    id: '1',
    title: '【ASMR】もう離さない♥ 甘えたい夜の耳かき添い寝',
    circle: 'スウィートボイス制作',
    cv: '星宮ひかり',
    category: 'asmr',
    price: 1320,
    rating: 4.9,
    tags: ['耳かき', '添い寝', '甘々', 'バイノーラル'],
    description: '大好きな彼女があなたの膝枕で耳かきをしてくれる作品。バイノーラル録音で臨場感抜群。甘い言葉と丁寧な耳かきで眠れない夜もぐっすり。全90分の大ボリューム。',
    affiliateUrl: '#',
    thumbnailUrl: 'https://placehold.co/300x300/1a1a1a/e63946?text=ASMR',
  },
  {
    id: '2',
    title: '【NTR】彼女が上司に寝取られた夜〜後悔と興奮の記録〜',
    circle: '禁断シアター',
    cv: '深川なつみ',
    category: 'ntr',
    price: 1100,
    rating: 4.7,
    tags: ['NTR', '寝取られ', '修羅場', '独占欲'],
    description: '長年付き合った彼女が上司に奪われていく様子を描く官能音声ドラマ。リアルな心理描写と濃密なシーンが話題作。寝取られ系の中でも完成度の高い一作。',
    affiliateUrl: '#',
    thumbnailUrl: 'https://placehold.co/300x300/1a1a1a/e63946?text=NTR',
  },
  {
    id: '3',
    title: '【TS】気づいたら女の子になってた件〜新しい体の使い方〜',
    circle: '転生音声工房',
    cv: '桜田ゆい',
    category: 'ts',
    price: 880,
    rating: 4.6,
    tags: ['TS', '女体化', '戸惑い', '自己探求'],
    description: '突然女の子の体になった主人公が自分の新しい体に戸惑いながらも探求していく音声作品。TS入門にも最適な優しいトーンで描かれた一作。',
    affiliateUrl: '#',
    thumbnailUrl: 'https://placehold.co/300x300/1a1a1a/e63946?text=TS',
  },
  {
    id: '4',
    title: '【百合】クラスメートの秘密〜放課後の二人だけの時間〜',
    circle: '百合音声倶楽部',
    cv: '水瀬あおい',
    category: 'yuri',
    price: 990,
    rating: 4.8,
    tags: ['百合', '学園', '初恋', '純愛'],
    description: '放課後の教室で二人だけになってしまった同級生との甘くて切ない時間。純粋な百合愛を描いた王道作品。淡い初恋の雰囲気が絶妙に表現されている。',
    affiliateUrl: '#',
    thumbnailUrl: 'https://placehold.co/300x300/1a1a1a/e63946?text=百合',
  },
  {
    id: '5',
    title: '【妊婦】臨月の妻との甘い夜〜愛おしさが溢れて〜',
    circle: 'あまあまサウンド',
    cv: '月城さくら',
    category: 'ninpu',
    price: 1210,
    rating: 4.5,
    tags: ['妊婦', '夫婦', '愛情深い', 'ほのぼの'],
    description: '臨月を迎えた妻との穏やかで愛に溢れた夜を描く音声作品。出産前の特別な時間を丁寧に描写。夫婦愛の温かさが伝わる癒し系の一作。',
    affiliateUrl: '#',
    thumbnailUrl: 'https://placehold.co/300x300/1a1a1a/e63946?text=妊婦',
  },
  {
    id: '6',
    title: '【ASMR】図書館司書さんの耳元朗読サービス〜閉館後の秘密〜',
    circle: 'ライブラリーサウンド',
    cv: '白川りの',
    category: 'asmr',
    price: 770,
    rating: 4.4,
    tags: ['ASMR', '図書館', '朗読', 'お姉さん系'],
    description: '閉館後の図書館で司書さんが耳元で本を読み聞かせてくれる作品。静かな環境音と落ち着いた声質がたまらない。睡眠前にも最適な癒し音声。',
    affiliateUrl: '#',
    thumbnailUrl: 'https://placehold.co/300x300/1a1a1a/e63946?text=ASMR',
  },
  {
    id: '7',
    title: '【NTR】親友の彼女に告白されて〜禁断の関係が始まる〜',
    circle: '夜想音声',
    cv: '神田あかね',
    category: 'ntr',
    price: 1320,
    rating: 4.6,
    tags: ['NTR', '友人の彼女', '禁断', '背徳感'],
    description: '親友の彼女から突然告白された主人公。断れなかったことから始まる禁断の関係を描く。背徳感と甘さが絶妙にブレンドされた高品質な音声ドラマ。',
    affiliateUrl: '#',
    thumbnailUrl: 'https://placehold.co/300x300/1a1a1a/e63946?text=NTR',
  },
  {
    id: '8',
    title: '【TS】女子校に転校してきた私の百合な毎日',
    circle: '転生音声工房',
    cv: '若宮ことは',
    category: 'ts',
    price: 1100,
    rating: 4.7,
    tags: ['TS', '女子校', '百合', '学園生活'],
    description: 'TS後に女子校に転校した主人公が繰り広げる甘酸っぱい学園生活。TSと百合の合わせ技が絶妙で、キャラクターの成長も丁寧に描かれている人気シリーズ。',
    affiliateUrl: '#',
    thumbnailUrl: 'https://placehold.co/300x300/1a1a1a/e63946?text=TS',
  },
  {
    id: '9',
    title: '【百合】先輩と後輩〜部活帰りの告白〜',
    circle: '純愛音声制作',
    cv: '東條りりか',
    category: 'yuri',
    price: 660,
    rating: 4.3,
    tags: ['百合', 'センパイ後輩', '部活', '告白'],
    description: '部活帰りに後輩から思わぬ告白を受けた先輩の視点で描かれる百合音声。初々しい恋心と戸惑いが丁寧に表現された純愛作品。入門編にも最適。',
    affiliateUrl: '#',
    thumbnailUrl: 'https://placehold.co/300x300/1a1a1a/e63946?text=百合',
  },
  {
    id: '10',
    title: '【ASMR】ヤンデレ彼女の独占欲〜逃がさないよ、ずっと一緒にいようね〜',
    circle: 'ダーク・スウィート',
    cv: '紫藤まりあ',
    category: 'asmr',
    price: 1430,
    rating: 4.8,
    tags: ['ASMR', 'ヤンデレ', '独占欲', 'どS'],
    description: '徐々に執着を強めていくヤンデレ彼女の音声作品。甘さの中に狂気を感じさせる独特の世界観が中毒性抜群。ヤンデレ好きなら絶対に押さえておきたい一作。',
    affiliateUrl: '#',
    thumbnailUrl: 'https://placehold.co/300x300/1a1a1a/e63946?text=ASMR',
  },
];

export function getWorkById(id: string): Work | undefined {
  return works.find((w) => w.id === id);
}

export function getWorksByCategory(category: Category): Work[] {
  return works.filter((w) => w.category === category);
}

export function getTopWorks(n: number): Work[] {
  return [...works].sort((a, b) => b.rating - a.rating).slice(0, n);
}

export function getPickupWork(): Work {
  return getTopWorks(1)[0];
}

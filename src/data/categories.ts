import type { Category } from './works';

export const CATEGORY_EMOJI: Record<Category, string> = {
  asmr: '🎧',
  ntr: '🌙',
  ts: '✨',
  yuri: '💜',
  ninpu: '🤍',
  hypno: '💫',
};

export const CATEGORY_TAGLINE: Record<Category, string> = {
  asmr: '耳元で溶ける、至福の立体音響',
  ntr: '背徳感が止まらない、禁断の引力',
  ts: '別の自分になる、非日常の没入体験',
  yuri: '二人の距離が縮まる、じれじれ純愛',
  ninpu: '温もりと愛情の密度、唯一無二の優しさ',
  hypno: '意識を委ねる、従うことが快感になる夜',
};

export const CATEGORY_DESC: Record<Category, string> = {
  asmr: '耳元で囁かれる感覚と立体音響を楽しむジャンル。バイノーラル録音で再現された耳かき・添い寝・囁きが、ヘッドフォン越しに本物の気配を作り出す。眠れない夜に試してほしい一本が必ずある。',
  ntr: '背徳感と複雑な感情体験が独自の引力を持つジャンル。許されないとわかっていて聴き続けてしまう——その感情の渦がNTR音声にしかない中毒性を生む。',
  ts: 'TS（性転換）設定で「別の自分」の体験をするジャンル。現実では絶対にできない感覚を音声が再現する。戸惑いと受け入れのプロセスが、他のどのジャンルにもない没入感を作り出す。',
  yuri: '女性二人の声が重なる瞬間だけで空気が変わる。じれじれした純愛から始まる百合音声は、観客でありながらその場にいる感覚を生む独特のジャンルだ。',
  ninpu: '妊婦というシチュエーションが生む「生命と愛情の密度」が唯一無二。日常の会話と温もりの中に、他のジャンルにはない深さと優しさが宿っている。',
  hypno: '声が脳の防衛ラインを下げ、誘導の言葉があなたの内側に直接入ってくる。従うことが快感になる——そのプロセスを体験できるのがこのジャンルだけだ。',
};

export const CATEGORY_COLUMN: Record<Category, string> = {
  asmr: 'what-is-asmr',
  ntr: 'ntr-ranking',
  ts: 'what-is-ts',
  yuri: 'yuri-best',
  ninpu: 'what-is-ninpu',
  hypno: 'what-is-hypno',
};

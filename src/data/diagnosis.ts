import type { Category } from './works';

export type DiagnosisOption = {
  label: string;
  scores: Record<Category, number>;
};

export type DiagnosisQuestion = {
  question: string;
  emoji: string;
  options: DiagnosisOption[];
};

export const QUESTIONS: DiagnosisQuestion[] = [
  {
    question: '今夜、どんな気分？',
    emoji: '🌙',
    options: [
      { label: '癒されたい・ただ眠りたい', scores: { asmr: 3, yuri: 1, ninpu: 1, ntr: 0, ts: 0, hypno: 0 } },
      { label: 'ドキドキ感・背徳感がほしい', scores: { ntr: 3, ts: 1, asmr: 0, yuri: 0, ninpu: 0, hypno: 1 } },
      { label: '非日常・特別な体験がしたい', scores: { ts: 2, hypno: 2, ntr: 1, asmr: 0, yuri: 0, ninpu: 0 } },
    ],
  },
  {
    question: '声との距離感は？',
    emoji: '🎙️',
    options: [
      { label: '耳元でそっと囁かれたい', scores: { asmr: 2, hypno: 1, yuri: 1, ntr: 0, ts: 0, ninpu: 1 } },
      { label: 'ストーリーの世界に没入したい', scores: { ntr: 2, yuri: 2, ts: 1, asmr: 0, hypno: 0, ninpu: 0 } },
      { label: '支配・誘導される感覚がほしい', scores: { hypno: 3, ntr: 1, ts: 1, asmr: 0, yuri: 0, ninpu: 0 } },
    ],
  },
  {
    question: '刺激の強さは？',
    emoji: '⚡',
    options: [
      { label: '優しく穏やかに包まれたい', scores: { asmr: 2, ninpu: 2, yuri: 1, ntr: 0, ts: 0, hypno: 0 } },
      { label: '甘くてドキドキする感じ', scores: { yuri: 2, ts: 1, ntr: 1, asmr: 1, ninpu: 0, hypno: 0 } },
      { label: 'がっつり強めの刺激がほしい', scores: { ntr: 2, hypno: 2, ts: 1, asmr: 0, yuri: 0, ninpu: 0 } },
    ],
  },
  {
    question: '主人公との関係性は？',
    emoji: '💫',
    options: [
      { label: '恋人・パートナーのような関係', scores: { yuri: 2, ninpu: 2, asmr: 1, ntr: 0, ts: 0, hypno: 0 } },
      { label: '見知らぬ相手との刺激的な関係', scores: { ntr: 2, hypno: 2, ts: 1, asmr: 0, yuri: 0, ninpu: 0 } },
      { label: '自分が別の誰かになる感覚', scores: { ts: 3, hypno: 1, asmr: 0, ntr: 0, yuri: 0, ninpu: 0 } },
    ],
  },
];

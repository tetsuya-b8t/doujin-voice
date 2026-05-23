'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getWorksByCategory, Category, CATEGORY_LABELS } from '@/data/works';
import WorkCard from '@/components/WorkCard';

type Step = 0 | 1 | 2 | 'result';

type Answer = {
  q0?: number;
  q1?: number;
  q2?: number;
};

const QUESTIONS = [
  {
    question: '今夜、どんな気分？',
    options: ['癒されたい・ただ眠りたい', 'ドキドキ感・背徳感がほしい', '非日常・特別な体験がしたい'],
  },
  {
    question: '声との距離感は？',
    options: ['耳元でそっと囁かれたい', 'ストーリーの世界に没入したい', '支配・誘導される感覚がほしい'],
  },
  {
    question: '刺激の強さは？',
    options: ['優しく穏やかに包まれたい', '少し甘くてドキドキする感じ', 'がっつり強めの刺激がほしい'],
  },
];

function getRecommendedCategory(answers: Required<Answer>): Category {
  const { q0, q1, q2 } = answers;

  if (q0 === 0) {
    if (q2 === 0) return 'asmr';
    if (q2 === 1) return 'yuri';
    return 'ninpu';
  }
  if (q0 === 1) {
    if (q2 === 2) return 'ntr';
    if (q1 === 1) return 'ts';
    return 'ntr';
  }
  // q0 === 2
  if (q1 === 2) return 'hypno';
  if (q2 === 1) return 'ts';
  return 'hypno';
}

const CATEGORY_MESSAGE: Record<Category, string> = {
  asmr: '今夜のあなたには「ASMR」が合っている。耳元で誰かの気配を感じながら、静かに溶けていく夜を。',
  ntr: '背徳感と複雑な感情を楽しみたい夜。「NTR音声」の引力は、一度入ったら戻れない。',
  ts: '非日常の体験をしたいなら「TS音声」。別の自分になる感覚が、今夜の刺激になる。',
  yuri: '甘くてじれじれする夜には「百合音声」。二人の距離が縮まるあの空気を、耳元で体験してほしい。',
  ninpu: '温もりと愛情の密度を求めるなら「妊婦音声」。他のジャンルにはない深さと優しさがある。',
  hypno: '意識を委ねたい夜には「催眠音声」。従うことが快感に変わる体験を、今夜試してほしい。',
};

export default function RecommendPage() {
  const [step, setStep] = useState<Step>(0);
  const [answers, setAnswers] = useState<Answer>({});

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = { ...answers, [`q${step}`]: optionIndex } as Answer;
    setAnswers(newAnswers);

    if (step === 2) {
      setStep('result');
    } else {
      setStep((step as number + 1) as Step);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
  };

  if (step === 'result') {
    const category = getRecommendedCategory(answers as Required<Answer>);
    const works = getWorksByCategory(category).slice(0, 3);

    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <p className="text-xs text-accent uppercase tracking-wider mb-2">診断結果</p>
          <h1 className="text-3xl font-black mb-2">{CATEGORY_LABELS[category]}</h1>
          <p className="text-gray-300 leading-relaxed max-w-xl mx-auto">{CATEGORY_MESSAGE[category]}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={`/category/${category}`}
            className="text-center bg-accent hover:bg-accent-hover text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            {CATEGORY_LABELS[category]}をもっと見る
          </Link>
          <button
            onClick={reset}
            className="text-center border border-white/20 hover:border-white/40 text-gray-300 font-bold py-3 px-6 rounded-lg transition-colors"
          >
            もう一度診断する
          </button>
        </div>
      </div>
    );
  }

  const currentQ = QUESTIONS[step as number];
  const progress = ((step as number) / 3) * 100;

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-black mb-2">今夜の一本を診断</h1>
        <p className="text-gray-400 text-sm">3問答えるだけで、あなたに合うジャンルがわかる</p>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-xs text-gray-500 mb-2">
          <span>Q{(step as number) + 1} / 3</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1 bg-gray-800 rounded-full">
          <div
            className="h-1 bg-accent rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="bg-card border border-white/10 rounded-xl p-8">
        <h2 className="text-xl font-bold text-white mb-6 text-center">{currentQ.question}</h2>
        <div className="space-y-3">
          {currentQ.options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              className="w-full text-left px-5 py-4 rounded-lg border border-white/10 hover:border-accent/50 hover:bg-accent/5 text-gray-200 transition-all"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getWorksByCategory, Category, CATEGORY_LABELS } from '@/data/works';
import { articles } from '@/data/articles';
import { QUESTIONS, DiagnosisOption } from '@/data/diagnosis';
import { CATEGORY_COLUMN } from '@/data/categories';
import WorkCard from '@/components/WorkCard';

type Step = number | 'result';

type Scores = Record<Category, number>;

function calcScores(selectedOptions: DiagnosisOption[]): Scores {
  const total: Scores = { asmr: 0, ntr: 0, ts: 0, yuri: 0, ninpu: 0, hypno: 0 };
  for (const opt of selectedOptions) {
    for (const [cat, score] of Object.entries(opt.scores) as [Category, number][]) {
      total[cat] += score;
    }
  }
  return total;
}

function topTwoCategories(scores: Scores): [Category, Category] {
  const sorted = (Object.entries(scores) as [Category, number][]).sort((a, b) => b[1] - a[1]);
  return [sorted[0][0], sorted[1][0]];
}

const CATEGORY_MESSAGE: Record<Category, string> = {
  asmr: '今夜のあなたには「ASMR」が合っている。耳元で誰かの気配を感じながら、静かに溶けていく夜を。',
  ntr: '背徳感と複雑な感情を楽しみたい夜。「NTR音声」の引力は、一度入ったら戻れない。',
  ts: '非日常の体験をしたいなら「TS音声」。別の自分になる感覚が、今夜の刺激になる。',
  yuri: '甘くてじれじれする夜には「百合音声」。二人の距離が縮まるあの空気を、耳元で体験してほしい。',
  ninpu: '温もりと愛情の密度を求めるなら「妊婦音声」。他のジャンルにはない深さと優しさがある。',
  hypno: '意識を委ねたい夜には「催眠音声」。従うことが快感に変わる体験を、今夜試してほしい。',
};

type Props = {
  initialStep: number;
  initialSelected: DiagnosisOption[];
};

export default function RecommendClient({ initialStep, initialSelected }: Props) {
  const [step, setStep] = useState<Step>(initialStep);
  const [selected, setSelected] = useState<DiagnosisOption[]>(initialSelected);

  const handleAnswer = (option: DiagnosisOption) => {
    const newSelected = [...selected, option];
    setSelected(newSelected);
    if (step === QUESTIONS.length - 1) {
      setStep('result');
    } else {
      setStep((step as number) + 1);
    }
  };

  const reset = () => {
    setStep(0);
    setSelected([]);
  };

  if (step === 'result') {
    const scores = calcScores(selected);
    const [primary, secondary] = topTwoCategories(scores);
    const works = getWorksByCategory(primary).slice(0, 3);
    const columnSlug = CATEGORY_COLUMN[primary];
    const columnArticle = columnSlug ? articles.find((a) => a.slug === columnSlug) : null;

    const shareText = encodeURIComponent(
      `同人音声診断の結果は「${CATEGORY_LABELS[primary]}」でした！ #同人ボイスレビュー`
    );
    const shareUrl = encodeURIComponent('https://doujin-voice.com/recommend');

    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <p className="text-xs text-accent uppercase tracking-wider mb-2">診断結果</p>
          <h1 className="text-4xl font-black mb-3">{CATEGORY_LABELS[primary]}</h1>
          <p className="text-gray-300 leading-relaxed max-w-xl mx-auto mb-4">{CATEGORY_MESSAGE[primary]}</p>
          <p className="text-xs text-gray-500">
            次点：<span className="text-gray-400">{CATEGORY_LABELS[secondary]}</span>も合うかも
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Link
            href={`/category/${primary}`}
            className="text-center bg-accent hover:bg-accent-hover text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            {CATEGORY_LABELS[primary]}をもっと見る
          </Link>
          <a
            href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center border border-white/20 hover:border-sky-400/50 hover:text-sky-400 text-gray-300 font-bold py-3 px-6 rounded-lg transition-colors"
          >
            結果をシェア
          </a>
          <button
            onClick={reset}
            className="text-center border border-white/20 hover:border-white/40 text-gray-300 font-bold py-3 px-6 rounded-lg transition-colors"
          >
            もう一度診断する
          </button>
        </div>

        {columnArticle && (
          <Link
            href={`/column/${columnArticle.slug}`}
            className="block bg-card border border-white/10 hover:border-accent/40 rounded-xl p-5 transition-all"
          >
            <p className="text-xs text-accent uppercase tracking-wider mb-1">解説コラム</p>
            <p className="text-white font-bold">{columnArticle.title} →</p>
          </Link>
        )}
      </div>
    );
  }

  const currentQ = QUESTIONS[step as number];
  const progress = ((step as number) / QUESTIONS.length) * 100;

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-black mb-2">今夜の一本を診断</h1>
        <p className="text-gray-400 text-sm">4問答えるだけで、あなたに合うジャンルがわかる</p>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-xs text-gray-500 mb-2">
          <span>Q{(step as number) + 1} / {QUESTIONS.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1 bg-gray-800 rounded-full">
          <div
            className="h-1 bg-accent rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="bg-card border border-white/10 rounded-xl p-8">
        <div className="text-center text-4xl mb-4">{currentQ.emoji}</div>
        <h2 className="text-xl font-bold text-white mb-6 text-center">{currentQ.question}</h2>
        <div className="space-y-3">
          {currentQ.options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(option)}
              className="w-full text-left px-5 py-4 rounded-lg border border-white/10 hover:border-accent/50 hover:bg-accent/5 text-gray-200 transition-all"
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

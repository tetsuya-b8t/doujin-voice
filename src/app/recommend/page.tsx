import type { Metadata } from 'next';
import { QUESTIONS } from '@/data/diagnosis';
import RecommendClient from './RecommendClient';

export const metadata: Metadata = {
  title: 'ジャンル診断｜今夜の一本を探す｜doujin-voice.com',
  description: '4問に答えるだけで、あなたに合った同人音声ジャンルがわかる。ASMR・NTR・TS・百合・妊婦・催眠から最適な一本をご提案。',
};

type Props = {
  searchParams: Promise<{ q0?: string }>;
};

export default async function RecommendPage({ searchParams }: Props) {
  const { q0 } = await searchParams;

  const q0Index = q0 !== undefined ? Number(q0) : undefined;
  const hasInitialAnswer =
    q0Index !== undefined &&
    !isNaN(q0Index) &&
    q0Index >= 0 &&
    q0Index < QUESTIONS[0].options.length;

  const initialStep = hasInitialAnswer ? 1 : 0;
  const initialSelected = hasInitialAnswer ? [QUESTIONS[0].options[q0Index!]] : [];

  return <RecommendClient initialStep={initialStep} initialSelected={initialSelected} />;
}

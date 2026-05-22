import type { Metadata } from 'next';
import { getTopWorks } from '@/data/works';
import RankingList from '@/components/RankingList';

export const metadata: Metadata = {
  title: 'ランキング',
  description: 'FANZA同人音声作品の人気ランキング。評価・人気順に全作品を掲載。',
  openGraph: {
    title: 'ランキング | 同人ボイスレビュー',
    description: 'FANZA同人音声作品の人気ランキング',
  },
};

export default function RankingPage() {
  const ranked = getTopWorks(10);
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-black mb-2">人気ランキング</h1>
      <p className="text-gray-500 text-sm mb-6">評価の高い順にランキングを表示しています</p>
      <RankingList works={ranked} />
    </div>
  );
}

import type { Metadata } from 'next';
import { works, getPickupWork, getTopWorks } from '@/data/works';
import WorkHero from '@/components/WorkHero';
import WorkGrid from '@/components/WorkGrid';
import RankingSidebar from '@/components/RankingSidebar';

export const metadata: Metadata = {
  title: '同人ボイスレビュー｜doujin-voice.com',
  description: 'FANZA同人音声作品のレビュー・ランキングサイト。ASMR・NTR・TS・百合・妊婦など豊富なジャンルをレビュー。',
  openGraph: {
    title: '同人ボイスレビュー｜doujin-voice.com',
    description: 'FANZA同人音声作品のレビュー・ランキングサイト',
  },
};

export default function HomePage() {
  const pickup = getPickupWork();
  const popular = getTopWorks(8);
  const newWorks = [...works].slice(-8).reverse();
  const featured = works.filter((w) => w.rating >= 4.5).slice(0, 8);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-8">
        <WorkHero work={pickup} />
      </section>
      <div className="lg:flex gap-8">
        <div className="flex-1 min-w-0">
          <WorkGrid newWorks={newWorks} popularWorks={popular} featuredWorks={featured} />
        </div>
        <div className="mt-8 lg:mt-0 lg:w-64 flex-shrink-0">
          <RankingSidebar works={popular} />
        </div>
      </div>
    </div>
  );
}

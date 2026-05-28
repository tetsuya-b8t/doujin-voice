'use client';

import { useState } from 'react';
import { Work } from '@/data/works';
import WorkCard from './WorkCard';

type Tab = 'new' | 'popular' | 'featured';

const TAB_LABELS: Record<Tab, string> = {
  new: '新着',
  popular: '人気',
  featured: '注目',
};

type Props = {
  newWorks: Work[];
  popularWorks: Work[];
  featuredWorks: Work[];
};

export default function WorkGrid({ newWorks, popularWorks, featuredWorks }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>('popular');

  const tabWorks: Record<Tab, Work[]> = {
    new: newWorks,
    popular: popularWorks,
    featured: featuredWorks,
  };

  const currentWorks = tabWorks[activeTab];

  return (
    <section>
      <div className="flex gap-1 mb-4 border-b border-rule">
        {(Object.keys(TAB_LABELS) as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-bold -mb-px border-b-2 ${
              activeTab === tab
                ? 'text-accent border-accent'
                : 'text-ink-2 border-transparent hover:text-ink'
            }`}
            style={{ transitionProperty: 'color', transitionDuration: '150ms' }}
          >
            {TAB_LABELS[tab]}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentWorks.map((work, i) => (
          <WorkCard
            key={work.id}
            work={work}
            rank={activeTab === 'popular' ? i + 1 : undefined}
          />
        ))}
      </div>
    </section>
  );
}

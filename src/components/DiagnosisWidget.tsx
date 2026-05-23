'use client';

/* Hallmark · component: interactive-widget · genre: atmospheric · design-system: design.md
 * states: default · hover · focus · active
 * No gradient backgrounds. Left-biased layout. transition: specific properties only.
 */

import { useRouter } from 'next/navigation';
import { QUESTIONS } from '@/data/diagnosis';

export default function DiagnosisWidget() {
  const router = useRouter();
  const q1 = QUESTIONS[0];

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      {/* Header strip — solid accent-ruled, no gradient */}
      <div className="border-l-2 border-accent px-6 py-4 bg-card">
        <div className="flex items-baseline gap-3">
          <span className="text-accent text-xs font-bold uppercase tracking-widest font-display">
            診断
          </span>
          <span className="text-white/20 text-xs">Q1 / 4</span>
        </div>
        <p className="text-white font-black text-lg mt-1 font-display leading-snug">
          {q1.question}
        </p>
        <p className="text-ink-2 text-xs mt-1">選ぶだけ。あと3問で今夜の一本が決まる。</p>
      </div>

      {/* Options */}
      <div className="divide-y divide-white/5 bg-card/60">
        {q1.options.map((option, i) => (
          <button
            key={i}
            onClick={() => router.push(`/recommend?q0=${i}`)}
            className="w-full text-left flex items-center justify-between px-6 py-4 text-sm text-ink-2 hover:text-white hover:bg-white/5 focus-visible:bg-white/5 focus-visible:text-white transition-colors"
            style={{ transitionProperty: 'color, background-color', transitionDuration: '150ms' }}
          >
            <span>{option.label}</span>
            <span className="text-accent ml-4 font-display font-bold" aria-hidden>→</span>
          </button>
        ))}
      </div>
    </div>
  );
}

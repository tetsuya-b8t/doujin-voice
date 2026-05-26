'use client';

/* Hallmark · component: AgeGate · genre: atmospheric · design-system: design.md
 * Full-screen age verification overlay. Required for FANZA adult affiliate compliance.
 */

import { useEffect, useState } from 'react';
import Link from 'next/link';

const AGE_KEY = 'age-verified';

export default function AgeGate() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(AGE_KEY)) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  function confirm() {
    localStorage.setItem(AGE_KEY, '1');
    setShow(false);
  }

  function deny() {
    window.location.href = 'https://www.google.com';
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ backgroundColor: 'oklch(11% 0.025 300 / 0.97)', backdropFilter: 'blur(4px)' }}
    >
      <div className="bg-card border border-rule rounded-xl p-8 max-w-sm w-full mx-4 text-center">
        <p className="text-xs text-ink-2 mb-2 font-display tracking-widest uppercase">Age Verification</p>
        <h2 className="text-2xl font-black mb-2 text-ink">成人向けコンテンツ</h2>
        <p className="text-ink-2 text-sm mb-1">このサイトは <span className="text-accent font-bold">R18（18歳以上向け）</span> の</p>
        <p className="text-ink-2 text-sm mb-6">同人音声作品を取り扱っています。</p>
        <div className="h-px w-16 bg-accent mx-auto mb-6" />
        <p className="text-ink text-sm font-bold mb-6">あなたは18歳以上ですか？</p>
        <div className="flex flex-col gap-3">
          <button
            onClick={confirm}
            className="w-full bg-accent text-white font-bold py-3 rounded-lg hover:opacity-90"
            style={{ transitionProperty: 'opacity', transitionDuration: '150ms' }}
          >
            はい、18歳以上です
          </button>
          <button
            onClick={deny}
            className="w-full border border-rule text-ink-2 py-3 rounded-lg text-sm hover:border-accent hover:text-ink"
            style={{ transitionProperty: 'border-color, color', transitionDuration: '150ms' }}
          >
            いいえ（退出する）
          </button>
        </div>
        <p className="text-xs text-ink-2 mt-5 leading-relaxed">
          「はい」をクリックすることで、{' '}
          <Link href="/terms" className="underline hover:text-accent" style={{ transitionProperty: 'color', transitionDuration: '150ms' }}>
            利用規約
          </Link>
          {' '}に同意したものとみなします。
        </p>
      </div>
    </div>
  );
}

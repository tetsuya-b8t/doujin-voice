# Design — 同人ボイスレビュー

Hallmark-managed design system. Every page redesign reads this file first.

## Genre
atmospheric

## Macrostructure family
- Marketing/content pages: Workbench (content + sidebar)
- Detail pages: Long Document

## Theme
Dark atmospheric — deep purple-tinted paper × pink accent.
All text tokens satisfy WCAG AAA (7:1) on dark backgrounds.

- `--color-background` oklch(11% 0.025 300)   /* deep dark, purple-tinted */
- `--color-card`       oklch(15% 0.03 290)    /* card surface */
- `--color-paper-3`    oklch(20% 0.025 290)   /* elevated surface */
- `--color-ink`        oklch(92% 0.01 270)    /* primary text — AAA ✓ */
- `--color-ink-2`      oklch(78% 0.015 280)   /* muted text — AAA ✓ */
- `--color-rule`       oklch(22% 0.02 290)    /* border */
- `--color-accent`     oklch(67% 0.20 342)    /* pink brand accent */
- `--color-accent-hover` oklch(60% 0.21 342)
- `--color-focus`      oklch(72% 0.22 342)
- `--color-star`       oklch(72% 0.15 68)     /* amber — ratings */

### Category accents
- `--color-cat-asmr`   oklch(65% 0.15 220)    /* sky */
- `--color-cat-ntr`    oklch(65% 0.18 15)     /* rose */
- `--color-cat-ts`     oklch(72% 0.15 68)     /* amber */
- `--color-cat-yuri`   oklch(72% 0.20 342)    /* pink */
- `--color-cat-ninpu`  oklch(65% 0.15 145)    /* emerald */
- `--color-cat-hypno`  oklch(65% 0.16 285)    /* violet */

## Typography
- Display: "Space Grotesk" — numbers, English labels, headings, price figures
- Body: "M PLUS Rounded 1c", "Hiragino Kaku Gothic ProN", system-ui — Japanese text
- Display tracking: -0.01em
- No gradient fills on any text

## Spacing
4-point named scale via CSS custom properties (--space-3xs … --space-2xl).

## Motion
- No motion library (motion-cut)
- Transitions: border-color, background-color, color, transform — never transition-all
- Duration: 150ms short, 220ms medium
- Easing: cubic-bezier(0.16, 1, 0.3, 1)
- Reduced-motion: opacity-only, ≤ 150ms

## Microinteractions stance
- Silent success
- Hover: color shift or border shift — never gradient-animate or scale-105 across all cards
- Focus rings: instant, no transition, 2px solid --color-focus
- No emoji as primary UI icons

## CTA voice
- Primary: bg-accent px-6 py-2.5 rounded-lg font-bold, transition: background-color
- Secondary: border border-rule text-ink-2, hover: border-accent/50 text-ink

## What pages MUST share
- OKLCH color tokens from this file
- Space Grotesk for all numeric/English display contexts
- Accent color: pink oklch(67% 0.20 342)
- No gradient backgrounds on interactive widgets
- overflow-x: clip on html and body

## What pages MAY differ on
- Section padding rhythm
- Card density

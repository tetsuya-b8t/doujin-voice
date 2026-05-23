# Design — 同人ボイスレビュー

Hallmark-managed design system. Every page redesign reads this file first.

## Genre
atmospheric

## Macrostructure family
- Marketing/content pages: Workbench (content + sidebar)
- Detail pages: Long Document

## Theme
- `--color-paper`   oklch(11% 0.025 300)   /* deep dark, purple-tinted */
- `--color-paper-2` oklch(15% 0.03 290)    /* card surface */
- `--color-paper-3` oklch(20% 0.025 290)   /* elevated surface */
- `--color-ink`     oklch(88% 0.01 270)    /* primary text */
- `--color-ink-2`   oklch(55% 0.015 280)   /* muted text */
- `--color-rule`    oklch(22% 0.02 290)    /* border */
- `--color-accent`  oklch(67% 0.20 342)    /* pink brand accent */
- `--color-accent-hover` oklch(60% 0.21 342)
- `--color-focus`   oklch(72% 0.22 342)

## Typography
- Display: "Space Grotesk" — numbers, English labels, headings, price figures
- Body: "Hiragino Kaku Gothic ProN", "Hiragino Sans", system-ui — Japanese text
- Display tracking: -0.01em
- No gradient fills on any text

## Spacing
4-point named scale via CSS custom properties.

## Motion
- No motion library (motion-cut)
- Transitions: border-color, background-color, color, transform — never transition-all
- Duration: 150ms short, 220ms medium
- Easing: cubic-bezier(0.16, 1, 0.3, 1)
- Reduced-motion: opacity-only, ≤ 150ms

## Microinteractions stance
- Silent success
- Hover: color shift or 1px translate — never gradient-animate or scale-105 across all cards
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

## What pages MAY differ on
- Section padding rhythm
- Card density

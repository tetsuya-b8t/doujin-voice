# doujin-voice プロジェクト記録

> このファイルが技術・戦略・進捗の全記録。CLAUDE.mdは役割と参照先のみ。

---

## プロジェクト概要

| 項目 | 内容 |
|------|------|
| サイト名 | doujin-voice.com |
| 目的 | FANZAアフィリエイトサイト（同人音声作品レビュー・紹介） |
| 本番URL | https://doujin-voice.com |
| GitHub | https://github.com/tetsuya-b8t/doujin-voice |
| Vercel | 自動デプロイ済み |

---

## 技術スタック

| 項目 | 内容 |
|------|------|
| フレームワーク | Next.js 16（App Router, SSG） |
| 言語 | TypeScript |
| スタイル | Tailwind CSS v4（background #0f0f0f, accent #e63946） |
| DB | Supabase（worksテーブル） |
| デプロイ | Vercel |
| ドメイン | お名前.com（doujin-voice.com） |

---

## 環境変数

```
NEXT_PUBLIC_SUPABASE_URL=     # Supabaseプロジェクト設定から取得
NEXT_PUBLIC_SUPABASE_ANON_KEY= # Supabaseプロジェクト設定から取得
```
実際の値は `.env.local`（ローカル）およびVercelの環境変数に設定済み。

## Supabase

- Project ID: `cxebodapwqowjwnopmda`
- リージョン: ap-northeast-2（Seoul）
- worksテーブル：fanza_id, title, circle, cv, category, price, rating, tags, description, affiliate_url, thumbnail_url
- DBが空なら静的データにフォールバック

---

## ページ構成

| パス | 内容 |
|------|------|
| `/` | ヒーロー＋タブグリッド＋ランキングサイドバー |
| `/ranking` | 全作品ランキング |
| `/category/[slug]` | カテゴリ別（asmr/ntr/ts/yuri/ninpu） |
| `/works/[id]` | 作品詳細＋アフィリCTAボタン |
| `/about` | サイト概要・免責事項 |
| `/privacy` | プライバシーポリシー |
| `/terms` | 利用規約 |
| `/contact` | お問い合わせ |

---

## FANZAアフィリエイト

- 申請：affiliate.dmm.com にて申請済み（2026-05-22）
- ステータス：**審査待ち**
- API仕様：`https://api.dmm.com/affiliate/v3/ItemList`、service=doujin、floor=digital_doujin
- 審査通過後すぐにAPI自動化パイプライン着手

---

## 現在の状態・TODO

### 完了済み
- [x] サイト構築・Vercelデプロイ
- [x] DNS設定（お名前.com → Vercel）
- [x] Supabase連携（DBが空なら静的データにフォールバック）
- [x] プライバシーポリシー・利用規約ページ
- [x] FANZAアフィリエイト申請

### 完了（追加分3）
- [x] FANZAアフィリエイト承認（af_id: doujinvoice-002）
- [x] アフィリエイトリンク設置（src/lib/affiliate.ts、ch_id別計測対応）
  - hero / detail / review の3箇所を buildAffiliateUrl() 経由に切り替え
  - NEXT_PUBLIC_DMM_AF_ID を .env.local に追加（Vercel にも要追加）
- [x] デザイン全面刷新（dark atmospheric 統一）
  - globals.css を ivory/cosme から dark atmospheric（WCAG AAA対応）に完全移行
  - ink(92%) / ink-2(78%) で7:1以上のコントラスト確保
  - カテゴリアクセント6色をトークン化（--color-cat-*）
  - ハードコードHex（WorkGrid/RankingSidebar/Header）を全トークン参照に
  - text-white を text-ink に統一（セマンティクス修正）
  - design.md を現行システムと同期

### 完了（追加分4）
- [x] 催眠音声レビュー記事追加（/review/review-hypno-shinso-yudo）
- [x] ASMRランキング5選記事追加（/column/asmr-ranking）
  - 文体ガイド準拠・antislop済み（低リスク）
  - 両記事とも2026-05-28付けでデプロイ済み

### 未対応
- [ ] Vercel に NEXT_PUBLIC_DMM_AF_ID=doujinvoice-002 を追加（本番リンク有効化）
- [ ] FANZA API自動化パイプライン構築（api_id 取得後）
- [ ] 作品データのSupabaseへの移行（現在は静的データ）

### 完了（追加分2）
- [x] Google Analytics設置（G-T7LCYN3646）
- [x] Search Console設定・確認完了
- [x] サイトマップ（next-sitemap）追加 → https://doujin-voice.com/sitemap.xml
- [x] robots.txt自動生成
- [x] SEO強化（robots/twitter card/OGP locale/description改善）
- [x] Supabaseクライアントをnull安全に修正（環境変数なしでもビルド通過）

### 完了（追加分）
- [x] コラム/ブログ機能追加（/column、/column/[slug]）
  - 記事8本（ジャンル解説5本・ランキング3本）
  - `src/data/articles.ts`・`src/components/ArticleCard.tsx` 新規作成
  - ヘッダーに「コラム」ナビリンク追加（PC・モバイル両方）
  - 記事詳細ページに関連作品カード表示

---

## 将来構想

- FANZA Product API → Claude生成 → 自動記事化パイプライン
- SEO強化（記事ブログ追加）
- 収益化後：Supabase有料プランへ移行検討

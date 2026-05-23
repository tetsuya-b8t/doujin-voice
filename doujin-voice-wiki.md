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

### 未対応
- [ ] FANZAアフィリエイト審査通過 → APIキー取得
- [ ] FANZA API自動化パイプライン構築
- [ ] アフィリエイトリンクをサイトに組み込む
- [ ] Google Analytics / Search Console 設置
- [ ] サイトマップ（next-sitemap）追加
- [ ] 作品データのSupabaseへの移行（現在は静的データ）

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

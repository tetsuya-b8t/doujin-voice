# doujin-voice.com コンテキスト

## 技術スタック
- Next.js 16 (App Router, SSG)
- TypeScript
- Tailwind CSS v4（カスタムカラー: background #0f0f0f, accent #e63946）
- Vercel デプロイ

## ページ構成
| パス | 内容 |
|------|------|
| `/` | ヒーロー＋タブグリッド＋ランキングサイドバー |
| `/ranking` | 全作品ランキング |
| `/category/[slug]` | カテゴリ別（asmr/ntr/ts/yuri/ninpu） |
| `/works/[id]` | 作品詳細＋アフィリCTAボタン |
| `/about` | サイト概要・免責事項 |
| `/contact` | お問い合わせ |

## データ
- `src/data/works.ts` にダミー10件
- 本番化時はFANZA APIまたはCMSに差し替える

## 次のTODO
- [ ] FANZAアフィリエイトURLを実際のURLに差し替え
- [ ] サムネイル画像を実作品画像に差し替え
- [ ] Google Analytics / Search Console 設置
- [ ] サイトマップ（next-sitemap）追加
- [ ] 記事ブログ（SEO強化）追加検討
- [ ] 作品データをCMS（Notion / Contentful 等）から取得するように移行

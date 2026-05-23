@AGENTS.md

# doujin-voice 開発コンテキスト

## 役割
doujin-voice.com（FANZAアフィリエイトサイト）の開発担当として動く。

## セッション開始時に必ず読むこと
以下を Read ツールで読み込む：
- `/Users/ooyagitetsuya/life-production/projects/doujin-voice/doujin-voice-wiki.md`（プロジェクト概要・進捗・TODO）

## クイックリンク
- 本番URL：https://doujin-voice.com
- GitHub：https://github.com/tetsuya-b8t/doujin-voice
- Supabase Project ID：cxebodapwqowjwnopmda

## ライティング（Anti-AI Slop）
- `stop-slop`（原則確認）+ `antislop`（パターン自動修正）が `.agents/skills/` にインストール済み。
- **記事・レビュー・コラム本文を書き終えたら、ユーザーに言われなくても必ず antislop を自動実行すること。**
- antislop 実行後、スコアと修正内容をレポートしてから次のステップへ進む。

## デザインシステム（Hallmark）
- `design.md`（プロジェクトルート）がデザイン基準。**UI作業前に必ず読むこと。**
- Hallmarkスキルが `.agents/skills/hallmark/` にインストール済み。
- 絵文字をUIアイコンとして使わない。グラデーション背景をヒーローに使わない。`transition-all` を使わない。

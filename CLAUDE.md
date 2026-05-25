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

## 記事執筆時の文体（必須）
執筆前に必ず読むこと：`/Users/ooyagitetsuya/Desktop/life-production/wiki/04_戦略前提/文体ガイド.md`

要点：
- 強調は「すごい」「かなり」（「とても」「非常に」は禁止）
- 「〜かも」「〜かな」「〜と思う」で柔らかく断定
- 短文を連射する。長い一文より断片の積み重ね
- ネガティブを正直に書く（デメリット・微妙な点を隠さない）
- 「笑」を文末にカジュアルに入れてリズムを作る
- antislop後に「すごい」「かな」「かも」が残っているか確認

## デザインシステム（Hallmark）
- `design.md`（プロジェクトルート）がデザイン基準。**UI作業前に必ず読むこと。**
- Hallmarkスキルが `.agents/skills/hallmark/` にインストール済み。
- 絵文字をUIアイコンとして使わない。グラデーション背景をヒーローに使わない。`transition-all` を使わない。

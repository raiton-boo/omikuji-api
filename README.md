# omikuji-api

Cloudflare Workers で動作するおみくじ API です。
運勢・コメント・カテゴリ別運勢・ラッキーカラー・ラッキーアイテム・日付を JSON で返します。

## エンドポイント

- `GET /api/omikuji`

## レスポンス例

```json
{
  "fortune": "大吉",
  "rank": 1,
  "comment": "今日は最高の運気！何をやってもうまくいく。",
  "category": {
    "love": "素敵な出会いがありそう",
    "work": "新しい挑戦が吉",
    "money": "思わぬ収入あり"
  },
  "lucky_color": "赤",
  "lucky_item": "鍵",
  "date": "2025-08-02"
}
```

## ローカルでの実行

```sh
npm install
npm run dev
```

- ブラウザで http://localhost:8787/api/omikuji にアクセス

## デプロイ

```sh
npm run deploy
```

## ライセンス

MIT

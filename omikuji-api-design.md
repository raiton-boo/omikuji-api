# おみくじ API 設計書

## 1. 概要

- Cloudflare Workers 上で動作するサーバーレス API
- エンドポイント：`/api/omikuji`
- レスポンス形式：JSON

---

## 2. レスポンス仕様

### サンプル JSON

```json
{
  "fortune": "大吉",
  "rank": 1,
  "comment": "今日は最高の一日になるでしょう！",
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

### 各フィールド説明

| フィールド名 | 型     | 説明                                   |
| ------------ | ------ | -------------------------------------- |
| fortune      | string | 運勢（大吉/中吉/小吉/吉/末吉/凶/大凶） |
| rank         | number | 運勢の順位（1=大吉, 7=大凶）           |
| comment      | string | 運勢に応じたランダムコメント           |
| category     | object | カテゴリ別運勢（love, work, money 等） |
| lucky_color  | string | ラッキーカラー                         |
| lucky_item   | string | ラッキーアイテム                       |
| date         | string | おみくじを引いた日付（YYYY-MM-DD）     |

---

## 3. 運勢の順位

1. 大吉
2. 中吉
3. 小吉
4. 吉
5. 末吉
6. 凶
7. 大凶

---

## 4. API 仕様

- **メソッド**：GET
- **パス**：`/api/omikuji`
- **リクエストパラメータ**：なし（将来拡張で追加可）
- **レスポンス**：上記 JSON

---

## 5. 補足

- コメントやカテゴリ別運勢、ラッキーアイテム等はランダムで返す
- 日付は API 実行時の日付

<div align="center">
  <h1>⛩️ omikuji-api <sup>🎲</sup></h1>
  <p>Cloudflare Workers で動く、だれでも引ける RESTful おみくじ Web API</p>
  <p><strong>このリポジトリは「WebAPI作成の学習デモ」として作成しました。</strong></p>

  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="MIT License">
  <img src="https://img.shields.io/badge/Cloudflare-Workers-orange?logo=cloudflare" alt="Cloudflare Workers">
  <img src="https://img.shields.io/badge/endpoint-GET%20%2Fapi%2Fomikuji-blue" alt="API Endpoint">
  <img src="https://img.shields.io/badge/JSON-API-lightgrey?logo=json" alt="JSON API">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome">
  <img src="https://img.shields.io/badge/Made%20with-TypeScript-3178c6?logo=typescript" alt="TypeScript">
  <a href="https://stats.uptimerobot.com/U2y0jt9Qes" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/uptimerobot/status/m801076343-df7c7f5f2d506c5e562163d0?label=Uptime" alt="UptimeRobot status">
  </a>
</div>

## <p align="center">おみくじを引いて、今日の運勢を占おう！</p>

## 🎴 おみくじ API とは？

Cloudflare Workers で動作するシンプルなおみくじ Web API です。
アクセスするだけで、運勢・順位・コメント・カテゴリ別運勢・ラッキーカラー・ラッキーアイテム・日付を JSON で取得できます。

---

## 🏮 公開 API エンドポイント

<div align="center" style="margin:1em 0;">
  <a href="https://omikuji-api.omikuji-api.workers.dev/api/omikuji" target="_blank" rel="noopener noreferrer" style="font-size:1.3em;font-weight:bold; background:#fffbe7; border-radius:8px; padding:0.5em 1em; display:inline-block; border:1px solid #e0c68c;">
    👉 https://omikuji-api.omikuji-api.workers.dev/api/omikuji
  </a>
</div>

---

## 📦 レスポンス例

```jsonc
{
  "fortune": "大吉", // 総合運勢
  "rank": 1, // 運勢の順位（1が最良）
  "comment": "今日は最高の運気！何をやってもうまくいく。", // 運勢に応じたコメント
  "category": {
    "love": "素敵な出会いがありそう", // 恋愛運
    "work": "新しい挑戦が吉", // 仕事運
    "money": "思わぬ収入あり" // 金運
  },
  "lucky_color": "赤", // ラッキーカラー
  "lucky_item": "鍵", // ラッキーアイテム
  "date": "2025-08-02" // 抽選日（YYYY-MM-DD）
}
```

---

## 💡 使い方サンプル

#### 🌐 ブラウザでアクセス

- 上記の「👉」ボタンをクリックするだけ！

#### 🐚 curl コマンド

```sh
curl https://omikuji-api.omikuji-api.workers.dev/api/omikuji
```

#### 💻 JavaScript (fetch)

```js
fetch('https://omikuji-api.omikuji-api.workers.dev/api/omikuji')
  .then((res) => res.json())
  .then((data) => console.log(data));
```

---

## 📝 ライセンス

MIT

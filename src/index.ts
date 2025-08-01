// 運勢と順位
const fortunes = [
  { fortune: '大吉', rank: 1 },
  { fortune: '中吉', rank: 2 },
  { fortune: '小吉', rank: 3 },
  { fortune: '吉', rank: 4 },
  { fortune: '末吉', rank: 5 },
  { fortune: '凶', rank: 6 },
  { fortune: '大凶', rank: 7 },
];

// 運勢ごとのコメント
const commentsMap: { [key: string]: string[] } = {
  大吉: [
    '今日は最高の運気！何をやってもうまくいく。',
    '願い事が叶う予感。積極的に行動しよう！',
  ],
  中吉: ['良いことがありそうな一日。', '努力が実を結ぶタイミングです。'],
  小吉: ['小さな幸せを見逃さないで。', '焦らずコツコツ進めば吉。'],
  吉: ['平穏な一日になりそう。', '周囲との調和を大切に。'],
  末吉: ['控えめな行動が吉。', '慎重に進めば運が開ける。'],
  凶: ['無理は禁物。休息を大切に。', 'トラブルに注意して行動しよう。'],
  大凶: ['今日は慎重に過ごそう。', '新しいことは控えめに。'],
};

// カテゴリ別運勢
const loveFortunes = [
  '素敵な出会いがありそう',
  'パートナーと仲良く過ごせる日',
  '自分磨きが吉',
];
const workFortunes = [
  '新しい挑戦が吉',
  '同僚との協力がカギ',
  '集中力が高まる日',
];
const moneyFortunes = ['思わぬ収入あり', '無駄遣いに注意', '節約が運気アップ'];

// ラッキーカラーとアイテム
const luckyColors = [
  '赤',
  '青',
  '黄',
  '緑',
  '紫',
  '白',
  '黒',
  'ピンク',
  'オレンジ',
];
const luckyItems = [
  '鍵',
  '本',
  'ペン',
  '財布',
  '時計',
  'ハンカチ',
  'スマホ',
  'お守り',
];

export default {
  async fetch(request: Request, env: unknown, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === '/api/omikuji') {
      // 運勢をランダムで選ぶ
      const randomIndex = Math.floor(Math.random() * fortunes.length);
      const selected = fortunes[randomIndex];
      // 運勢に応じたコメントをランダムで選ぶ
      const selectedComments = commentsMap[selected.fortune];
      const comment =
        selectedComments[Math.floor(Math.random() * selectedComments.length)];
      // カテゴリ別運勢をランダムで選ぶ
      const love =
        loveFortunes[Math.floor(Math.random() * loveFortunes.length)];
      const work =
        workFortunes[Math.floor(Math.random() * workFortunes.length)];
      const money =
        moneyFortunes[Math.floor(Math.random() * moneyFortunes.length)];
      // ラッキーカラーとアイテムをランダムで選ぶ
      const luckyColor =
        luckyColors[Math.floor(Math.random() * luckyColors.length)];
      const luckyItem =
        luckyItems[Math.floor(Math.random() * luckyItems.length)];
      // 日付を取得
      const today = new Date();
      const date = today.toISOString().slice(0, 10); // "YYYY-MM-DD" 形式
      // レスポンスデータ
      const data = {
        fortune: selected.fortune,
        rank: selected.rank,
        comment: comment,
        category: {
          love: love,
          work: work,
          money: money,
        },
        lucky_color: luckyColor,
        lucky_item: luckyItem,
        date: date,
        // 他の項目もここに追加していく
      };
      return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response('Not Found', { status: 404 });
    }
  },
};

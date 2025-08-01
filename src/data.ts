import type { Fortune } from './types';

// 運勢と順位
export const fortunes: Fortune[] = [
  { fortune: '大吉', rank: 1 },
  { fortune: '中吉', rank: 2 },
  { fortune: '小吉', rank: 3 },
  { fortune: '吉', rank: 4 },
  { fortune: '末吉', rank: 5 },
  { fortune: '凶', rank: 6 },
  { fortune: '大凶', rank: 7 },
];

// 運勢ごとのコメント
export const commentsMap: { [key: string]: string[] } = {
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
export const loveFortunes: string[] = [
  '素敵な出会いがありそう',
  'パートナーと仲良く過ごせる日',
  '自分磨きが吉',
];
export const workFortunes: string[] = [
  '新しい挑戦が吉',
  '同僚との協力がカギ',
  '集中力が高まる日',
];
export const moneyFortunes: string[] = [
  '思わぬ収入あり',
  '無駄遣いに注意',
  '節約が運気アップ',
];

// ラッキーカラーとアイテム
export const luckyColors: string[] = [
  '赤', '青', '黄', '緑', '紫', '白', '黒', 'ピンク', 'オレンジ',
];
export const luckyItems: string[] = [
  '鍵', '本', 'ペン', '財布', '時計', 'ハンカチ', 'スマホ', 'お守り',
];
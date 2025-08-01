import {
  fortunes,
  commentsMap,
  loveFortunes,
  workFortunes,
  moneyFortunes,
  luckyColors,
  luckyItems,
} from './data';
import type { OmikujiResponse } from './types';

export default {
  async fetch(
    request: Request,
    env: unknown,
    ctx: ExecutionContext
  ): Promise<Response> {
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
      const data: OmikujiResponse = {
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
      };
      return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response('Not Found', { status: 404 });
    }
  },
};

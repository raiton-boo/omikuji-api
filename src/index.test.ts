import { OmikujiResponseSchema } from './types';
import {
  fortunes,
  commentsMap,
  loveFortunes,
  workFortunes,
  moneyFortunes,
  luckyColors,
  luckyItems,
  luckyFoods, // ←追加
  luckyNumbers, // ←追加
} from './data';

describe('omikuji-api', () => {
  // --- 正常系 ---
  describe('正常系', () => {
    it('レスポンスがOmikujiResponseSchemaでバリデーションを通る', () => {
      const selected = fortunes[0];
      const comment = commentsMap[selected.fortune][0];
      const love = loveFortunes[0];
      const work = workFortunes[0];
      const money = moneyFortunes[0];
      const luckyColor = luckyColors[0];
      const luckyItem = luckyItems[0];
      const luckyFood = luckyFoods[0];
      const luckyNumber = luckyNumbers[0];
      const date = '2025-08-02';
      const data = {
        fortune: selected.fortune,
        rank: selected.rank,
        comment,
        category: { love, work, money },
        lucky_color: luckyColor,
        lucky_item: luckyItem,
        lucky_food: luckyFood,
        lucky_number: luckyNumber,
        date,
      };
      expect(() => OmikujiResponseSchema.parse(data)).not.toThrow();
    });

    it('fortune, comment, color, item, food, numberが定義リスト内の値である', () => {
      const selected = fortunes[2];
      const comment = commentsMap[selected.fortune][1];
      const love = loveFortunes[1];
      const work = workFortunes[1];
      const money = moneyFortunes[1];
      const luckyColor = luckyColors[1];
      const luckyItem = luckyItems[1];
      const luckyFood = luckyFoods[1];
      const luckyNumber = luckyNumbers[1];
      const date = '2025-08-02';
      const data = {
        fortune: selected.fortune,
        rank: selected.rank,
        comment,
        category: { love, work, money },
        lucky_color: luckyColor,
        lucky_item: luckyItem,
        lucky_food: luckyFood,
        lucky_number: luckyNumber,
        date,
      };
      expect(fortunes.map((f) => f.fortune)).toContain(data.fortune);
      expect(commentsMap[data.fortune]).toContain(data.comment);
      expect(luckyColors).toContain(data.lucky_color);
      expect(luckyItems).toContain(data.lucky_item);
      expect(luckyFoods).toContain(data.lucky_food);
      expect(luckyNumbers).toContain(data.lucky_number);
      expect(() => OmikujiResponseSchema.parse(data)).not.toThrow();
    });
  });

  // --- 異常系 ---
  describe('バリデーション異常系', () => {
    // 共通の正しいデータ
    const base = {
      fortune: '大吉',
      rank: 1,
      comment: 'test',
      category: { love: 'a', work: 'b', money: 'c' },
      lucky_color: '赤',
      lucky_item: '鍵',
      lucky_food: 'カレーライス',
      lucky_number: 7,
      date: '2025-08-02',
    };

    it('必須フィールドが欠けている場合はバリデーションエラー', () => {
      const invalid = { ...base } as any;
      delete invalid.fortune;
      expect(() => OmikujiResponseSchema.parse(invalid)).toThrow();
    });

    it('category.loveが欠けている場合はバリデーションエラー', () => {
      const invalid = { ...base, category: { work: 'b', money: 'c' } };
      expect(() => OmikujiResponseSchema.parse(invalid)).toThrow();
    });

    it('lucky_numberが数値でない場合はバリデーションエラー', () => {
      const invalid = { ...base, lucky_number: 'not-a-number' };
      expect(() => OmikujiResponseSchema.parse(invalid)).toThrow();
    });

    it('dateが不正な形式の場合はバリデーションエラー', () => {
      const invalid = { ...base, date: '2025/08/02' };
      expect(() => OmikujiResponseSchema.parse(invalid)).toThrow();
    });
  });
});

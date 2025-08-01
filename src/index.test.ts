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

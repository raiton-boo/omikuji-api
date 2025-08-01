import { z } from 'zod';

// 運勢と順位
export interface Fortune {
  fortune: string;
  rank: number;
}
// カテゴリ別運勢
export interface Category {
  love: string;
  work: string;
  money: string;
}
// APIレスポンス全体
export interface OmikujiResponse {
  fortune: string;
  rank: number;
  comment: string;
  category: Category;
  lucky_color: string;
  lucky_item: string;
  date: string;
}

export const OmikujiResponseSchema = z.object({
  fortune: z.string(),
  rank: z.number(),
  comment: z.string(),
  category: z.object({
    love: z.string(),
    work: z.string(),
    money: z.string(),
  }),
  lucky_color: z.string(),
  lucky_item: z.string(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});
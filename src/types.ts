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

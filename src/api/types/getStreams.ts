export interface StreamDataRoot {
  data: StreamData[];
  pagination: Pagination;
}

export interface StreamData {
  id: string;
  user_id: string;
  user_login: string;
  user_name: string;
  game_id: string;
  game_name: GameName;
  type: Type;
  title: string;
  viewer_count: number;
  started_at: Date;
  language: string;
  thumbnail_url: string;
  tag_ids: [];
  tags: string[];
  is_mature: boolean;
}

export enum GameName {
  Chess = "Chess",
}

export enum Type {
  Live = "live",
}

export interface Pagination {
  cursor: string;
}

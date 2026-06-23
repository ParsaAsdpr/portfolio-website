export type SocialKey = "telegram" | "linkedin" | "github";

export type Social = {
  id: number;
  site_data_id: number;
  key: SocialKey;
  link: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
};


import { Contact } from "./contact";
import { Experience } from "./experience";
import { Journey } from "./journey";
import { Project } from "./project";
import { Social } from "./social";

export type SiteMetadata = {
  applicationName?: string;
  manifest?: string;
  authors?: {
    name: string;
    url: string;
  };
  robots?: Record<string, unknown>;
  keywords?: string[];
  formatDetection?: {
    telephone: boolean;
  };
  [key: string]: unknown;
};

export type SiteData = {
  id: number;
  title: string;
  description: string;
  icon: string;
  theme_color: string;
  metadata: SiteMetadata;
  about: string;
  hero_title: string;
  type_effect_text: string;
  cv_url: string;
  journeys: Journey[];
  experiences: Experience[];
  projects: Project[];
  socials: Social[];
  contacts: Contact[];
  created_at: string;
  updated_at: string;
};


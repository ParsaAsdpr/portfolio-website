import { cache } from "react";
import type { SiteData } from "@/types";
import { supabase } from "@/utils/supabaseClient";

export const getSiteData = cache(async (): Promise<SiteData | null> => {
  const { data, error } = await supabase
    .from("site_data")
    .select(
      `
    *,
    journeys (*),
    experiences (*),
    projects (*),
    socials (*),
    contacts (*)
    `,
    )
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
});


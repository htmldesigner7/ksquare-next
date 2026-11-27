import "server-only";
import { cache } from "react";
import { apiFetch } from "@/lib/admin/api";

export type SiteSettings = {
  call_details: string[];
  email_details: string[];
  address_details: string[];
  facebook_link: string | null;
  instagram_link: string | null;
  linkedin_link: string | null;
  tel_number: string | null;
};

/** Contact details and social links managed in Admin > Settings. Undefined when the API is unreachable (the footer then keeps its defaults). */
export const getSiteSettings = cache(async (): Promise<SiteSettings | undefined> => {
  const res = await apiFetch<SiteSettings>("/frontend/settings");
  return res.ok ? res.data ?? undefined : undefined;
});

import "server-only";
import { apiFetch } from "@/lib/admin/api";

export type PublicFaq = { category: string; question: string; answer: string };
export type PublicFaqs = { categories: string[]; faqs: PublicFaq[] };

/** Active FAQ categories (that have FAQs) and their FAQs, managed in the admin panel. Empty when the API is unreachable. */
export async function getFaqs(): Promise<PublicFaqs> {
  const res = await apiFetch<PublicFaqs>("/frontend/faqs");
  return res.ok && res.data ? res.data : { categories: [], faqs: [] };
}

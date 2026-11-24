import "server-only";
import { apiFetch } from "@/lib/admin/api";

export type CatalogProduct = {
  name: string;
  slug: string;
  title: string;
  short_description: string; // sanitized HTML (cleaned by the API)
  list_img: string | null;
};

export type CategoryConfig = { title: string; description: string; icon: string | null };

/** A product category as shown on /products/<slug>. */
export type Category = {
  name: string;
  slug: string;
  title: string;
  type: "core" | "brand";
  short_description: string;
  list_image: string | null;
  detail_image_d: string | null;
  detail_image_m: string | null;
  menu_img: string | null;
  menu_icon: string | null;
  product_summary: string | null;
  product_short_line: string | null;
  configuration_short_line: string | null;
  why_choose_title: string | null;
  why_choose_summary: string | null;
  why_choose_desc: string | null;
  why_choose_img: string | null;
  meta_title: string | null;
  meta_description: string | null;
  configuration: CategoryConfig[];
  products: CatalogProduct[];
};

/** A product as shown on /product/<slug>. The rich-text fields are sanitized HTML. */
export type Product = {
  name: string;
  slug: string;
  title: string;
  short_description: string;
  list_img: string | null;
  product_info: string | null;
  highlights: string | null;
  benefits: string | null;
  features: string | null;
  technical_specification: string | null;
  installation_process: string | null;
  meta_title: string | null;
  meta_description: string | null;
  detail_imgs: string[];
  faqs: { faq_question: string; faq_answer: string }[];
  category: { name: string; slug: string } | null;
};

/** Active category by URL slug, or null when it does not exist. */
export async function getCategory(slug: string): Promise<Category | null> {
  const res = await apiFetch<Category>(`/frontend/categories/${encodeURIComponent(slug)}`);
  return res.ok ? res.data : null;
}

/** Active product by URL slug, or null when it does not exist. */
export async function getProduct(slug: string): Promise<Product | null> {
  const res = await apiFetch<Product>(`/frontend/products/${encodeURIComponent(slug)}`);
  return res.ok ? res.data : null;
}

/** Plain text of an HTML snippet (for places that cannot show markup, such as meta descriptions). */
export const htmlToText = (html: string) => html.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();

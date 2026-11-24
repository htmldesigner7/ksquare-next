import "server-only";
import { cache } from "react";
import { apiFetch } from "@/lib/admin/api";
import { NAV, type NavItem, type NavLink } from "@/content/routes";

type MenuCategory = {
  name: string;
  slug: string;
  type: "core" | "brand";
  short_description: string;
  menu_icon: string | null;
};

const plain = (html: string) =>
  html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();

const oneLine = (text: string, max = 70) => (text.length <= max ? text : text.slice(0, max).replace(/\s+\S*$/, "") + "…");

const toLink = (c: MenuCategory): NavLink => ({
  label: c.name,
  href: `/products/${c.slug}`,
  desc: oneLine(plain(c.short_description)),
  ...(c.menu_icon ? { iconSrc: c.menu_icon } : { icon: c.type === "brand" ? "cpu" : "package" }),
});

/** Active categories (fetched once per request, shared by the header and the footer). */
const loadCategories = cache(async (): Promise<MenuCategory[]> => {
  const res = await apiFetch<MenuCategory[]>("/frontend/categories");
  return res.ok ? (res.data ?? []) : [];
});

/** Footer "Products" columns built from the active categories, or undefined to keep the fixed ones. */
export async function getFooterProducts() {
  const categories = await loadCategories();
  const link = (c: MenuCategory) => ({ label: c.name, href: `/products/${c.slug}` });
  const core = categories.filter((c) => c.type === "core").map(link);
  const brands = categories.filter((c) => c.type === "brand").map(link);
  const sections = [
    ...(core.length ? [{ subtitle: "Core Products", links: core }] : []),
    ...(brands.length ? [{ subtitle: "Our Brands Product", links: brands }] : []),
  ];
  return sections.length ? sections : undefined;
}

/**
 * Header navigation. The "Products" menu lists the active categories from the admin panel
 * (core categories, then brands); everything else, and the menu itself when the API is unreachable, is the static NAV.
 */
export async function getNav(): Promise<NavItem[]> {
  const categories = await loadCategories();
  if (categories.length === 0) return NAV;

  const core = categories.filter((c) => c.type === "core").map(toLink);
  const brands = categories.filter((c) => c.type === "brand").map(toLink);
  const groups = [
    ...(core.length ? [{ title: "Core Products", links: core }] : []),
    ...(brands.length ? [{ title: "Our Brands", links: brands }] : []),
  ];

  return NAV.map((item) => (item.label === "Products" ? { ...item, href: core[0]?.href ?? item.href, groups } : item));
}

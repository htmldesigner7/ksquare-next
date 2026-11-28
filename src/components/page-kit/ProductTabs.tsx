import type { ReactNode } from "react";
import CoreProductsTabs from "@/components/home/CoreProductsTabs";
import { getHomeCategories } from "@/lib/nav";

/** The home page "Our Products" tabs (active core + brand categories); `fallback` is shown when the API has none. */
export default async function ProductTabs({ title, subtitle, fallback }: { title: string; subtitle?: string; fallback: ReactNode }) {
  const items = await getHomeCategories();
  return items.length > 0 ? <CoreProductsTabs items={items} title={title} intro={subtitle ?? ""} /> : <>{fallback}</>;
}

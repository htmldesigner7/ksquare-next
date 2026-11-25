import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/awards";
import { getAwards } from "@/lib/awards";
import type { Section } from "@/components/page-kit/types";

export const metadata = pageMetadata(page);

const FALLBACK_IMG = "/assets/pages/shared/team_award.webp";
const plain = (html: string) => html.replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();

export default async function AwardsPage() {
  const awards = await getAwards();
  // Timeline and "Featured" cards come from the admin "Awards timeline" module; the static content stays as the fallback.
  const sections = awards.length
    ? page.sections.flatMap<Section>((s) => {
        if (s.type === "timeline") {
          return [{ ...s, entries: awards.map((a) => ({ year: String(a.year), label: "", title: a.title, desc: plain(a.description), imageBack: a.img ?? FALLBACK_IMG, imageFront: a.img ?? FALLBACK_IMG })) }];
        }
        if (s.type === "featured") {
          const items = awards.filter((a) => a.is_feature).reverse().map((a) => ({ title: a.title, desc: plain(a.description), image: a.img ?? FALLBACK_IMG }));
          return items.length ? [{ ...s, items }] : [];
        }
        return [s];
      })
    : page.sections;
  return <PageTemplate page={{ ...page, sections }} />;
}

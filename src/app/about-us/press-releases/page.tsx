import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/press-releases";
import { getPressReleases } from "@/lib/press";

export const metadata = pageMetadata(page);

const plain = (html: string) => html.replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();

export default async function PressReleasesPage() {
  const releases = await getPressReleases();
  // Cards come from the admin "Press releases" module; the static content stays as the fallback.
  const sections = releases.length
    ? page.sections.map((s) =>
        s.type === "articles" ? { ...s, items: releases.map((r) => ({ title: r.title, excerpt: plain(r.description), image: r.img })) } : s,
      )
    : page.sections;
  return <PageTemplate page={{ ...page, sections }} />;
}

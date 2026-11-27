import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/news-events";
import { formatEventDates, getEvents } from "@/lib/events";

export const metadata = pageMetadata(page);

const FALLBACK_IMG = "/assets/pages/news-events/event_1.webp";

export default async function NewsEventsPage() {
  const events = await getEvents();
  // Event cards come from the admin "Events" module; the static content stays as the fallback.
  const sections = events.length
    ? page.sections.map((s) =>
        s.type === "events"
          ? { ...s, items: events.map((e) => ({ title: e.name, venue: e.location, date: formatEventDates(e.from_date, e.to_date), image: e.img ?? FALLBACK_IMG })) }
          : s,
      )
    : page.sections;
  return <PageTemplate page={{ ...page, sections }} />;
}

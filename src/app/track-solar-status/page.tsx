import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/track-solar-status";

export const metadata = pageMetadata(page);

export default function TrackSolarStatusPage() {
  return <PageTemplate page={page} />;
}

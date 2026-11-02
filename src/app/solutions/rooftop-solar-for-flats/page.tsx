import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/rooftop-solar-for-flats";

export const metadata = pageMetadata(page);

export default function RooftopSolarForFlatsPage() {
  return <PageTemplate page={page} />;
}

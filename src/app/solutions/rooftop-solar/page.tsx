import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/rooftop-solar";

export const metadata = pageMetadata(page);

export default function RooftopSolarPage() {
  return <PageTemplate page={page} />;
}

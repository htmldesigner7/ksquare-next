import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/solar-calculators";

export const metadata = pageMetadata(page);

export default function SolarCalculatorsPage() {
  return <PageTemplate page={page} />;
}

import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/solar-consultation";

export const metadata = pageMetadata(page);

export default function SolarConsultationPage() {
  return <PageTemplate page={page} />;
}

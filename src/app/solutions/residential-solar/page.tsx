import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/residential-solar";

export const metadata = pageMetadata(page);

export default function ResidentialSolarPage() {
  return <PageTemplate page={page} />;
}

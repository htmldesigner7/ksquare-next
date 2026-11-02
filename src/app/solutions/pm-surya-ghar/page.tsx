import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/pm-surya-ghar";

export const metadata = pageMetadata(page);

export default function PmSuryaGharPage() {
  return <PageTemplate page={page} />;
}

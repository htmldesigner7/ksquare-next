import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/our-presence";

export const metadata = pageMetadata(page);

export default function OurPresencePage() {
  return <PageTemplate page={page} />;
}

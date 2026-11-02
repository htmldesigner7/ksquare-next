import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/press-releases";

export const metadata = pageMetadata(page);

export default function PressReleasesPage() {
  return <PageTemplate page={page} />;
}

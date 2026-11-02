import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/custom-product-development";

export const metadata = pageMetadata(page);

export default function CustomProductDevelopmentPage() {
  return <PageTemplate page={page} />;
}

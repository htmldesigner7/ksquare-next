import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/payment-details";

export const metadata = pageMetadata(page);

export default function PaymentDetailsPage() {
  return <PageTemplate page={page} />;
}

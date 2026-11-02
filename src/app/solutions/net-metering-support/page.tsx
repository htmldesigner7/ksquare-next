import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/net-metering-support";

export const metadata = pageMetadata(page);

export default function NetMeteringSupportPage() {
  return <PageTemplate page={page} />;
}

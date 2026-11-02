import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/leadership-team";

export const metadata = pageMetadata(page);

export default function LeadershipTeamPage() {
  return <PageTemplate page={page} />;
}

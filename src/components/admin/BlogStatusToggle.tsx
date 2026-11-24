"use client";

import StatusSwitch from "@/components/admin/StatusSwitch";
import type { BlogStatus } from "@/lib/admin/types";

/** Publish / unpublish switch for a blog (asks for confirmation first). */
export default function BlogStatusToggle({ id, status }: { id: number; status: BlogStatus }) {
  return <StatusSwitch endpoint={`/blogs/${id}/status`} status={status} values={["published", "draft"]} />;
}

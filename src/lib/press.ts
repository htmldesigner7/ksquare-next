import "server-only";
import { apiFetch } from "@/lib/admin/api";

export type PressRelease = { title: string; url: string | null; description: string; img: string };

/** Active press releases (newest first) managed in the admin panel. Empty when the API is unreachable. */
export async function getPressReleases(): Promise<PressRelease[]> {
  const res = await apiFetch<PressRelease[]>("/frontend/press-releases");
  return res.ok && res.data ? res.data : [];
}

import "server-only";
import { apiFetch } from "@/lib/admin/api";

export type DownloadCategory = { name: string; items: { title: string; url: string }[] };

/** Active certificate categories that have downloadable files, managed in the admin panel. Empty when the API is unreachable. */
export async function getDownloads(): Promise<DownloadCategory[]> {
  const res = await apiFetch<DownloadCategory[]>("/frontend/downloads");
  return res.ok && res.data ? res.data : [];
}

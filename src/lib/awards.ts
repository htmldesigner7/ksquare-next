import "server-only";
import { apiFetch } from "@/lib/admin/api";

export type Award = { year: number; title: string; description: string; img: string | null; is_feature: boolean };

/** Active awards (oldest year first) managed in the admin panel. Empty when the API is unreachable. */
export async function getAwards(): Promise<Award[]> {
  const res = await apiFetch<Award[]>("/frontend/awards");
  return res.ok && res.data ? res.data : [];
}

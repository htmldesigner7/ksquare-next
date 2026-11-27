import "server-only";
import { apiFetch } from "@/lib/admin/api";

export type LifePhoto = { img: string };

/** Active "Life at Ksquare" photos (oldest first) managed in the admin panel. Empty when the API is unreachable. */
export async function getLifePhotos(): Promise<LifePhoto[]> {
  const res = await apiFetch<LifePhoto[]>("/frontend/life-at-ksquare");
  return res.ok && res.data ? res.data : [];
}

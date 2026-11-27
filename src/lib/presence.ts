import "server-only";
import { apiFetch } from "@/lib/admin/api";

export type PresenceState = { name: string; link: string | null; blurb: string | null; map: string | null; cities: { name: string; link: string | null }[] };

/** Active states with their cities (in the order they were added) managed in the admin panel. Empty when the API is unreachable. */
export async function getPresence(): Promise<PresenceState[]> {
  const res = await apiFetch<PresenceState[]>("/frontend/presence");
  return res.ok && res.data ? res.data : [];
}

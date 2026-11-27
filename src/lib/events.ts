import "server-only";
import { apiFetch } from "@/lib/admin/api";

export type EventItem = { name: string; location: string; img: string | null; from_date: string; to_date: string };

/** Active events (latest first) managed in the admin panel. Empty when the API is unreachable. */
export async function getEvents(): Promise<EventItem[]> {
  const res = await apiFetch<EventItem[]>("/frontend/events");
  return res.ok && res.data ? res.data : [];
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2026-10-15" + "2026-10-17" -> "Oct 15–17, 2026" (also "Feb 28 – Mar 2, 2026", "Oct 15, 2026"). */
export function formatEventDates(from: string, to: string): string {
  const [fy, fm, fd] = from.split("-").map(Number);
  const [ty, tm, td] = to.split("-").map(Number);
  if (!fy || !ty) return "";
  if (from === to) return `${MONTHS[fm - 1]} ${fd}, ${fy}`;
  if (fy === ty && fm === tm) return `${MONTHS[fm - 1]} ${fd}–${td}, ${fy}`;
  if (fy === ty) return `${MONTHS[fm - 1]} ${fd} – ${MONTHS[tm - 1]} ${td}, ${fy}`;
  return `${MONTHS[fm - 1]} ${fd}, ${fy} – ${MONTHS[tm - 1]} ${td}, ${ty}`;
}

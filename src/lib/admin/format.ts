/** "19 Nov 2026, 07:52 UTC" - the API stores and returns UTC. */
export function formatDate(iso: string): string {
  return (
    new Date(iso).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short", timeZone: "UTC" }) + " UTC"
  );
}

/** HTML (or plain text) -> readable plain text, for one-line list excerpts. */
export function plainText(html: string | null | undefined): string {
  return (html ?? "")
    .replace(/<\/(p|li|h[1-6]|blockquote|tr)>|<br\s*\/?>/gi, " ")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

/** Route param -> positive integer id, or null when malformed. */
export function parseId(value: string): number | null {
  const n = Number(value);
  return Number.isInteger(n) && n > 0 ? n : null;
}

/** "2026-11-19" -> "19 Nov 2026" (date-only values carry no timezone). */
export function formatDay(day: string): string {
  return new Date(`${day}T00:00:00Z`).toLocaleDateString("en-GB", { dateStyle: "medium", timeZone: "UTC" });
}

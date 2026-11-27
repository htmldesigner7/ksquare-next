import "server-only";
import { apiFetch } from "@/lib/admin/api";

export type PublicTestimonial = { name: string; company: string; description: string; profile_photo: string | null };

/** Testimonials managed in the admin panel (oldest first). Empty when the API is unreachable. */
export async function getTestimonials(): Promise<PublicTestimonial[]> {
  const res = await apiFetch<PublicTestimonial[]>("/frontend/testimonials");
  return res.ok && res.data ? res.data : [];
}

import "server-only";
import { apiFetch } from "@/lib/admin/api";

export type ProjectItem = {
  title: string;
  tag: string | null;
  location: string | null;
  short_note: string | null;
  power_capacity: string | null;
  project_img: string;
};
export type ProjectCategory = { name: string; items: ProjectItem[] };
export type ProjectPicture = { name: string; img: string };
/** The Projects page's editable text sections (table rows, process steps, FAQs). */
export type ProjectsPageContent = {
  stats: { profile: string; capacity: string; generation: string; type: string; location: string }[];
  steps: { title: string; desc: string; icon: string | null }[];
  faqs: { question: string; answer: string }[];
};
export type ProjectsData = { categories: ProjectCategory[]; gallery: ProjectPicture[]; content: ProjectsPageContent | null };

/** Active projects by category, and the named pictures of the gallery, managed in the admin panel. Empty when the API is unreachable. */
export async function getProjects(): Promise<ProjectsData> {
  const res = await apiFetch<ProjectsData>("/frontend/projects");
  return res.ok && res.data ? res.data : { categories: [], gallery: [], content: null };
}

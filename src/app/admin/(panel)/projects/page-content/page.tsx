import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/admin/PageHeader";
import ProjectsPageContentForm from "@/components/admin/projects/ProjectsPageContentForm";
import { adminFetch } from "@/lib/admin/dal";

export const metadata: Metadata = { title: "Projects page content" };

type Content = { stats: Record<string, string>[]; steps: Record<string, string>[]; faqs: Record<string, string>[] };

export default async function ProjectsPageContentPage() {
  const res = await adminFetch<Content>("/admin/page-content/projects");

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <Link href="/admin/projects" className="text-sm font-medium text-[var(--adm-primary)] hover:underline">
        ← All projects
      </Link>
      <PageHeader title="Projects page content" description="The text sections shown on the website's Projects page below the project list." />
      <ProjectsPageContentForm initial={res.data ?? { stats: [], steps: [], faqs: [] }} />
    </div>
  );
}

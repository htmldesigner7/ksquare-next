"use client";

import { FormActions, FormError } from "@/components/admin/FormShell";
import RepeaterSection from "@/components/admin/resource/RepeaterSection";
import { useAdminForm } from "@/lib/admin/client";
import type { Field, Repeater } from "@/lib/admin/resources";

type Content = Record<"stats" | "steps" | "faqs", Record<string, string>[]>;

const text = (name: string, label: string, max: number, o: Partial<Field> = {}): Field => ({ name, label, type: "text", required: true, max, ...o });
const area = (name: string, label: string, max: number): Field => ({ name, label, type: "textarea", required: true, max });

// The three editable sections of the website's Projects page.
const SECTIONS: Repeater[] = [
  {
    name: "stats",
    label: "Every Project Has a Story Behind the Numbers (table rows)",
    rowName: "Row",
    max: 20,
    fields: [
      text("profile", "Project profile", 255),
      text("capacity", "System capacity", 100, { hint: "For example 480 kW" }),
      text("generation", "Annual generation", 100, { hint: "For example 7.1 Lakh Units" }),
      text("type", "Project type", 100),
      text("location", "Project location", 100),
    ],
  },
  {
    name: "steps",
    label: "How a Ksquare project actually runs (exactly 6 steps, in order)",
    rowName: "Step",
    max: 6,
    fields: [
      { name: "icon", label: "Icon", type: "image", hint: "Shown inside the step circle. Square PNG or WebP with a transparent background works best, up to 2 MB. Leave empty to keep the current / default icon." },
      text("title", "Title", 100),
      area("desc", "Description", 255),
    ],
  },
  {
    name: "faqs",
    label: "Frequently Asked Questions",
    rowName: "Question",
    max: 20,
    fields: [text("question", "Question", 255), area("answer", "Answer", 2000)],
  },
];

/** Only the sections (JSON) and the chosen icon files are sent; the per-input text fields are left out. */
function buildBody(fd: FormData) {
  const out = new FormData();
  for (const s of SECTIONS) out.append(s.name, String(fd.get(s.name) ?? "[]"));
  for (const [key, value] of fd.entries()) if (key.startsWith("steps_icon_") && value instanceof File && value.size > 0) out.append(key, value);
  return out;
}

/** Edits the text sections of the website's Projects page (saved as one document through the page-content API). */
export default function ProjectsPageContentForm({ initial }: { initial: Content }) {
  const { pending, error, fieldErrors, onSubmit, clearErrors } = useAdminForm({
    endpoint: "/page-content/projects",
    method: "PUT",
    successHref: "/admin/projects?success=updated",
  });

  return (
    <form
      noValidate // the server validates and returns a message per field
      // Every section's rows arrive as one JSON field named after the section; they are sent with the step icon files as multipart.
      onSubmit={(e) => onSubmit(e, buildBody)}
      className="space-y-6"
    >
      <FormError message={Object.keys(fieldErrors).length > 0 ? "Please correct the highlighted fields." : error} />
      {SECTIONS.map((s) => (
        <RepeaterSection key={s.name} repeater={s} initial={initial[s.name as keyof Content]} errors={fieldErrors} onRemove={clearErrors} />
      ))}
      <FormActions pending={pending} cancelHref="/admin/projects" submitLabel="Save page content" />
    </form>
  );
}

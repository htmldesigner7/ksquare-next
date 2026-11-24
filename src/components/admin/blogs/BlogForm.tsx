"use client";

import { useRef, useState } from "react";
import FormField from "@/components/admin/FormField";
import { FormActions, FormError, FormSection } from "@/components/admin/FormShell";
import ImageField from "@/components/admin/ImageField";
import RichTextField from "@/components/admin/RichTextField";
import SelectField from "@/components/admin/SelectField";
import TextAreaField from "@/components/admin/TextAreaField";
import { adminRequest, useAdminForm } from "@/lib/admin/client";
import type { Author, Blog } from "@/lib/admin/types";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 191);

export default function BlogForm({
  initial,
  authors,
  defaultAuthorId,
  today,
}: {
  initial?: Blog;
  authors: Author[];
  defaultAuthorId: number;
  /** Server-computed "YYYY-MM-DD" so the default date is identical on server and client. */
  today: string;
}) {
  const { pending, error, fieldErrors, onSubmit } = useAdminForm({
    endpoint: initial ? `/blogs/${initial.id}` : "/blogs",
    method: initial ? "PUT" : "POST",
    successHref: `/admin/blogs?success=${initial ? "updated" : "created"}`,
  });

  const [url, setUrl] = useState(initial?.url ?? "");
  const urlTouched = useRef(Boolean(initial)); // stop auto-generating once the user edits the URL (or when editing)
  const [urlError, setUrlError] = useState<string | null>(null);
  const [checking, setChecking] = useState(false);

  async function checkUrl() {
    if (!url) return;
    setChecking(true);
    const res = await adminRequest<{ available: boolean }>(
      `/blogs/check-url?url=${encodeURIComponent(url)}${initial ? `&exclude=${initial.id}` : ""}`,
    );
    setUrlError(res.ok && res.data && !res.data.available ? "This URL is already in use by another blog" : null);
    setChecking(false);
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    if (urlError) {
      e.preventDefault();
      return;
    }
    await onSubmit(e);
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-6" encType="multipart/form-data">
      <FormError message={error} />

      <FormSection title="Content">
        <FormField
          label="Title"
          name="title"
          defaultValue={initial?.title}
          maxLength={255}
          required
          markRequired
          error={fieldErrors.title}
          onChange={(e) => {
            if (!urlTouched.current) {
              setUrl(slugify(e.target.value));
              setUrlError(null);
            }
          }}
        />
        <FormField
          label="URL (slug)"
          name="url"
          value={url}
          maxLength={191}
          required
          markRequired
          pattern="[a-z0-9]+(-[a-z0-9]+)*"
          title="Lowercase letters, numbers and single hyphens, e.g. my-first-post"
          hint={checking ? "Checking availability…" : "Lowercase letters, numbers and hyphens. Must be unique."}
          error={urlError ?? fieldErrors.url}
          onChange={(e) => {
            urlTouched.current = true;
            setUrl(e.target.value.toLowerCase());
            setUrlError(null);
          }}
          onBlur={checkUrl}
        />
        <TextAreaField label="Short description" name="short_description" rows={3} defaultValue={initial?.short_description} maxLength={500} required error={fieldErrors.short_description} />
        <RichTextField label="Description" name="description" defaultValue={initial?.description} required error={fieldErrors.description} minHeight={320} />
        <RichTextField label="Conclusion" name="conclusion" defaultValue={initial?.conclusion} required minHeight={200} error={fieldErrors.conclusion} />
      </FormSection>

      <FormSection title="Publishing">
        <div className="grid gap-5 sm:grid-cols-3">
          <SelectField
            label="Author"
            name="author_id"
            required
            defaultValue={initial?.author_id ?? defaultAuthorId}
            options={authors.map((a) => ({ value: a.id, label: a.name }))}
            error={fieldErrors.author_id}
          />
          <FormField label="Date" name="date" type="date" defaultValue={initial?.date ?? today} required markRequired error={fieldErrors.date} />
          <SelectField
            label="Status"
            name="status"
            required
            defaultValue={initial?.status ?? "draft"}
            options={[
              { value: "draft", label: "Draft" },
              { value: "published", label: "Published" },
            ]}
            error={fieldErrors.status}
          />
        </div>
      </FormSection>

      <FormSection title="Images">
        <div className="grid gap-6 md:grid-cols-2">
          <ImageField name="front_image" label="Front image" required currentUrl={initial?.front_image} error={fieldErrors.front_image} hint="JPG, PNG or WebP, up to 2 MB." />
          <ImageField name="detail_image" label="Detail image" required currentUrl={initial?.detail_image} error={fieldErrors.detail_image} hint="JPG, PNG or WebP, up to 2 MB." />
        </div>
      </FormSection>

      <FormSection title="Call to action">
        <FormField label="CTA text" name="cta_text" defaultValue={initial?.cta_text} maxLength={255} required markRequired error={fieldErrors.cta_text} />
        <ImageField name="cta_image" label="CTA image" required currentUrl={initial?.cta_image} error={fieldErrors.cta_image} hint="JPG, PNG or WebP, up to 2 MB." />
      </FormSection>

      <FormSection title="SEO">
        <FormField label="Meta title" name="meta_title" defaultValue={initial?.meta_title} maxLength={255} required markRequired error={fieldErrors.meta_title} />
        <TextAreaField label="Meta description" name="meta_description" rows={3} defaultValue={initial?.meta_description} maxLength={500} required error={fieldErrors.meta_description} />
      </FormSection>

      <FormActions pending={pending} cancelHref="/admin/blogs" submitLabel={initial ? "Save changes" : "Create blog"} />
    </form>
  );
}

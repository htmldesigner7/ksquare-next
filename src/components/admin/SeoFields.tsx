"use client";

import { useRef, useState } from "react";
import FormField from "@/components/admin/FormField";
import TextAreaField from "@/components/admin/TextAreaField";

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 180);

/**
 * Keeps the slug in step with the name while adding a record. Once the admin edits the slug by hand
 * (or when editing an existing record) it is left alone.
 */
export function useAutoSlug(initialSlug?: string) {
  const [slug, setSlug] = useState(initialSlug ?? "");
  const touched = useRef(Boolean(initialSlug));
  return {
    slug,
    /** Call from the name input's onChange. */
    onNameChange: (name: string) => {
      if (!touched.current) setSlug(slugify(name));
    },
    onSlugChange: (value: string) => {
      touched.current = true;
      setSlug(value.toLowerCase());
    },
  };
}

type Props = {
  auto: ReturnType<typeof useAutoSlug>;
  metaTitle?: string | null;
  metaDescription?: string | null;
  errors: Record<string, string>;
};

/** Slug + meta title + meta description inputs (the API validates them and makes the slug unique). */
export default function SeoFields({ auto, metaTitle, metaDescription, errors }: Props) {
  return (
    <>
      <FormField
        label="Slug"
        name="slug"
        value={auto.slug}
        onChange={(e) => auto.onSlugChange(e.target.value)}
        maxLength={191}
        hint="Generated from the name; you can change it. Lowercase letters, numbers and hyphens. Must be unique."
        error={errors.slug}
      />
      <FormField label="Meta title" name="meta_title" defaultValue={metaTitle ?? ""} maxLength={255} error={errors.meta_title} />
      <TextAreaField label="Meta description" name="meta_description" rows={3} defaultValue={metaDescription ?? ""} maxLength={500} error={errors.meta_description} />
    </>
  );
}

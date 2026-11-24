"use client";

import { useEffect, useRef, useState } from "react";
import "summernote/dist/summernote-lite.min.css";

type Props = {
  label: string;
  name: string;
  /** Initial HTML (plain text from older records is converted to paragraphs). */
  defaultValue?: string | null;
  /** Called with the HTML on every change (for forms that keep their own state). */
  onChange?: (html: string) => void;
  required?: boolean;
  error?: string;
  hint?: string;
  /** Editing area height in px. */
  minHeight?: number;
};

const HAS_TAGS = /<\/?[a-z][\s\S]*>/i;
const escapeHtml = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Older records hold plain text; show their line breaks as paragraphs instead of one run-on line. */
function toHtml(value?: string | null): string {
  if (!value) return "";
  if (HAS_TAGS.test(value)) return value;
  return value
    .split(/\n{2,}/)
    .map((p) => `<p>${escapeHtml(p).replace(/\n/g, "<br>")}</p>`)
    .join("");
}

/**
 * Summernote (lite) WYSIWYG editor for description fields. jQuery and Summernote are loaded in the browser only.
 * The HTML is submitted through a hidden input named `name`, so it works like any other form field;
 * the API sanitizes it again on save.
 */
export default function RichTextField({ label, name, defaultValue, onChange, required, error, hint, minHeight = 160 }: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const onChangeRef = useRef(onChange);
  const [html, setHtml] = useState(() => toHtml(defaultValue));

  useEffect(() => {
    onChangeRef.current = onChange;
  });

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let cancelled = false;
    let $editor: ReturnType<typeof import("jquery")> | null = null;
    const initial = toHtml(defaultValue);

    (async () => {
      const { default: $ } = await import("jquery");
      // Summernote looks for a global jQuery when it loads.
      Object.assign(window, { jQuery: $, $ });
      await import("summernote/dist/summernote-lite.min.js");
      if (cancelled) return;

      // The editor creates its own DOM next to this element, so React must not manage it.
      const el = document.createElement("div");
      host.appendChild(el);
      $editor = $(el);
      $editor.summernote({
        height: minHeight,
        disableGrammar: true,
        toolbar: [
          ["style", ["style"]],
          ["font", ["bold", "italic", "underline", "strikethrough", "clear"]],
          ["para", ["ul", "ol", "paragraph"]],
          ["insert", ["link", "picture", "table", "hr"]],
          ["view", ["undo", "redo", "codeview"]],
        ],
        styleTags: ["p", "blockquote", "h2", "h3", "h4"],
        callbacks: {
          onChange: (contents: string) => {
            const next = $editor?.summernote("isEmpty") ? "" : contents;
            setHtml(next);
            onChangeRef.current?.(next);
          },
          // Uploaded / pasted image files would be embedded as base64 (bloated, and removed by the API): URLs only.
          onImageUpload: () => window.alert("Add images by URL: use the picture button and paste the image link."),
        },
      });
      $editor.summernote("code", initial);
      $editor.next(".note-editor").find(".note-editable").addClass("adm-prose");
    })();

    return () => {
      cancelled = true;
      if ($editor) {
        $editor.summernote("destroy");
        $editor.remove();
      }
      host.replaceChildren();
    };
    // The editor is created once; its content is not driven by props afterwards.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-1.5">
      <span className="block text-sm font-medium text-[var(--adm-text)]">
        {label}
        {required && <span className="text-[var(--adm-danger)]"> *</span>}
      </span>
      <div className="adm-rich overflow-hidden rounded-[10px] border bg-white" data-invalid={error ? "true" : undefined}>
        <div ref={hostRef} style={{ minHeight: minHeight + 45 }} />
      </div>
      <input type="hidden" name={name} value={html} />
      {hint && !error && <p className="text-xs text-[var(--adm-muted)]">{hint}</p>}
      {error && <p className="text-xs text-[var(--adm-danger)]">{error}</p>}
    </div>
  );
}

import "server-only";
import sanitizeHtml from "sanitize-html";

// Same allowlist as the API (ksquare-api/src/utils/sanitizeHtml.js): stored HTML is cleaned again before it is shown.
const OPTIONS: sanitizeHtml.IOptions = {
  allowedTags: [
    "p", "br", "hr", "strong", "b", "em", "i", "u", "s", "strike", "sub", "sup", "code", "pre", "blockquote",
    "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "li", "a", "img",
    "table", "thead", "tbody", "tfoot", "tr", "th", "td", "colgroup", "col",
  ],
  allowedAttributes: {
    a: ["href", "target", "rel"],
    img: ["src", "alt", "width", "height"],
    th: ["colspan", "rowspan"],
    td: ["colspan", "rowspan"],
    col: ["span"],
  },
  allowedSchemes: ["http", "https", "mailto", "tel"],
  allowProtocolRelative: false,
  transformTags: { a: (_tag, attribs) => ({ tagName: "a", attribs: { ...attribs, target: "_blank", rel: "noopener noreferrer" } }) },
};

const HAS_TAGS = /<\/?[a-z][\s\S]*>/i;

/** Read-only display of a rich-text value. Older plain-text records keep their line breaks. */
export default function RichText({ html }: { html: string | null | undefined }) {
  if (!html) return <span className="text-[var(--adm-muted)]">—</span>;
  if (!HAS_TAGS.test(html)) return <p className="whitespace-pre-wrap text-sm leading-relaxed">{html}</p>;
  return <div className="adm-prose text-sm" dangerouslySetInnerHTML={{ __html: sanitizeHtml(html, OPTIONS) }} />;
}

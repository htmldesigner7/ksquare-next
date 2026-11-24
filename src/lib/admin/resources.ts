/**
 * Admin modules that share the same list / add / edit / view screens (see app/admin/(panel)/[resource]).
 * Mirrors the API definitions in ksquare-apis/src/crud/resources.js - keep field names and `required` in sync.
 * To add a module: add the table + API definition, then one entry here and one in the Sidebar.
 */

export type FieldType = "text" | "textarea" | "int" | "date" | "bool" | "url" | "image" | "fk";

export type Field = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  max?: number;
  min?: number;
  hint?: string;
  /** textarea only: edited with the rich-text editor and stored as HTML. */
  rich?: boolean;
  /** fk only: slug of the module whose active rows fill the dropdown. */
  ref?: string;
  /** Form card the field is shown in (default "Details"). */
  section?: string;
  /** Show as a column in the list. */
  list?: boolean;
};

export type Resource = {
  slug: string;
  label: string;
  plural: string;
  description: string;
  /** Field shown as the row's name (view page, delete confirmation). */
  titleField?: string;
  searchHint?: string;
  fields: Field[];
};

/** Row as returned by the API: fk fields also carry `<field minus _id>_name`, images are absolute URLs. */
export type ResourceRow = { id: number; status: "active" | "inactive"; created_at: string; updated_at: string } & Record<string, string | number | null>;

export type SelectOption = { id: number; label: string };

const IMG_HINT = "JPG, PNG or WebP, up to 2 MB.";
const text = (name: string, label: string, o: Partial<Field> = {}): Field => ({ name, label, type: "text", ...o });
const area = (name: string, label: string, o: Partial<Field> = {}): Field => ({ name, label, type: "textarea", ...o });
const img = (name: string, label: string, o: Partial<Field> = {}): Field => ({ name, label, type: "image", hint: IMG_HINT, ...o });

export const RESOURCES: Record<string, Resource> = {
  "blog-authors": {
    slug: "blog-authors",
    label: "Blog author",
    plural: "Blog authors",
    description: "People who write blog posts.",
    titleField: "name",
    searchHint: "Search name or designation",
    fields: [
      text("name", "Name", { required: true, max: 150, list: true }),
      text("designation", "Designation", { required: true, max: 150, list: true }),
      { name: "years_of_exp", label: "Years of experience", type: "int", min: 0, max: 80, list: true },
      area("description", "Description", { required: true, max: 15000, rich: true }),
      img("main_img", "Main image", { required: true, section: "Images", list: true }),
      img("thumbnail_img", "Thumbnail image", { section: "Images" }),
      text("meta_title", "Meta title", { max: 255, section: "SEO" }),
      area("meta_description", "Meta description", { max: 500, section: "SEO" }),
      text("social_media_name", "Name", { max: 100, section: "Social media", hint: "e.g. LinkedIn" }),
      { name: "social_media_url", label: "URL", type: "url", max: 255, section: "Social media", hint: "Full link starting with https://" },
      img("social_media_image", "Icon / image", { section: "Social media" }),
    ],
  },
  "certificate-categories": {
    slug: "certificate-categories",
    label: "Certificate category",
    plural: "Certificate categories",
    description: "Groups for the certificates.",
    titleField: "name",
    searchHint: "Search name",
    fields: [text("name", "Name", { required: true, max: 150, list: true })],
  },
  certificates: {
    slug: "certificates",
    label: "Certificate",
    plural: "Certificates",
    description: "Certificates shown on the website.",
    titleField: "name",
    searchHint: "Search name",
    fields: [
      img("img", "Image", { required: true, list: true }),
      text("name", "Name", { required: true, max: 255, list: true }),
      { name: "certificate_category_id", label: "Certificate category", type: "fk", required: true, ref: "certificate-categories", list: true },
    ],
  },
  "award-timelines": {
    slug: "award-timelines",
    label: "Award",
    plural: "Awards timeline",
    description: "Awards and milestones by year.",
    titleField: "title",
    searchHint: "Search title",
    fields: [
      { name: "year", label: "Year", type: "int", required: true, min: 1900, max: 2100, list: true },
      text("title", "Title", { required: true, max: 255, list: true }),
      area("description", "Description", { required: true, max: 15000, rich: true }),
      img("img", "Image", { list: true }),
      { name: "is_feature", label: "Featured", type: "bool", list: true },
    ],
  },
  events: {
    slug: "events",
    label: "Event",
    plural: "Events",
    description: "Exhibitions and events the company attends.",
    titleField: "name",
    searchHint: "Search name or location",
    fields: [
      text("name", "Name", { required: true, max: 255, list: true }),
      text("location", "Location", { required: true, max: 255, list: true }),
      { name: "from_date", label: "From date", type: "date", required: true, list: true },
      { name: "to_date", label: "To date", type: "date", required: true, list: true },
    ],
  },
  "press-releases": {
    slug: "press-releases",
    label: "Press release",
    plural: "Press releases",
    description: "News and press coverage.",
    titleField: "title",
    searchHint: "Search title",
    fields: [
      img("img", "Image", { required: true, list: true }),
      text("title", "Title", { required: true, max: 255, list: true }),
      { name: "url", label: "URL", type: "url", max: 255, hint: "Optional link to the full press release, starting with https://" },
      area("description", "Description", { required: true, max: 15000, rich: true }),
    ],
  },
  "career-departments": {
    slug: "career-departments",
    label: "Career department",
    plural: "Career departments",
    description: "Departments that jobs belong to.",
    titleField: "name",
    searchHint: "Search name",
    fields: [text("name", "Name", { required: true, max: 150, list: true })],
  },
  jobs: {
    slug: "jobs",
    label: "Job",
    plural: "Jobs",
    description: "Open positions shown on the careers page.",
    titleField: "name",
    searchHint: "Search job name",
    fields: [
      text("name", "Job name", { required: true, max: 255, list: true }),
      { name: "career_department_id", label: "Department", type: "fk", required: true, ref: "career-departments", list: true },
    ],
  },
  "life-at-ksquare": {
    slug: "life-at-ksquare",
    label: "Life at Ksquare photo",
    plural: "Life at Ksquare",
    description: "Photos for the Life at Ksquare gallery.",
    fields: [img("img", "Image", { required: true, list: true })],
  },
  "project-categories": {
    slug: "project-categories",
    label: "Project category",
    plural: "Project categories",
    description: "Groups for the projects.",
    titleField: "category",
    searchHint: "Search category",
    fields: [text("category", "Category", { required: true, max: 150, list: true })],
  },
  projects: {
    slug: "projects",
    label: "Project",
    plural: "Projects",
    description: "Projects shown on the website.",
    titleField: "title",
    searchHint: "Search title",
    fields: [
      img("img", "Image", { required: true, list: true }),
      text("title", "Title", { required: true, max: 255, list: true }),
      { name: "project_categories_id", label: "Project category", type: "fk", required: true, ref: "project-categories", list: true },
    ],
  },
};

/** Safe lookup for a route param (plain `RESOURCES[slug]` would also match names like "constructor"). */
export const getResource = (slug: string): Resource | null => (Object.hasOwn(RESOURCES, slug) ? RESOURCES[slug] : null);

export const fkLabelKey = (f: Field) => `${f.name.replace(/_id$/, "")}_name`;
export const rowTitle = (r: Resource, row: ResourceRow) => String(row[r.titleField ?? ""] ?? `#${row.id}`);

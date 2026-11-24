export type AdminUser = { id: number; name: string; email: string; role: "super_admin" | "admin" };

export type EnquiryStatus = "new" | "in_progress" | "resolved";

export type EnquirySummary = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  status: EnquiryStatus;
  created_at: string;
};

export type Enquiry = EnquirySummary & { message: string; ip_address: string | null; updated_at: string };

export type EnquiryStats = Record<EnquiryStatus | "total", number>;

export type PageMeta = { page: number; limit: number; total: number; totalPages: number };

export const STATUS_LABEL: Record<EnquiryStatus, string> = {
  new: "New",
  in_progress: "In progress",
  resolved: "Resolved",
};

export type Author = { id: number; name: string };

export type Testimonial = {
  id: number;
  profile_photo: string | null;
  name: string;
  company: string;
  description: string;
  created_at: string;
  updated_at: string;
};

export type BlogStatus = "draft" | "published";

export type BlogSummary = {
  id: number;
  title: string;
  short_description: string;
  url: string;
  status: BlogStatus;
  date: string;
  front_image: string;
  author_id: number;
  author_name: string | null;
  created_at: string;
  updated_at: string;
};

export type Blog = BlogSummary & {
  description: string;
  detail_image: string;
  cta_text: string;
  cta_image: string;
  conclusion: string;
  meta_title: string;
  meta_description: string;
};

export type CategoryType = "core" | "brand";

export type CategoryConfiguration = { id: number; title: string; description: string; icon: string; sort_order: number };

export type CategorySummary = {
  id: number;
  list_image: string;
  name: string;
  short_description: string;
  title: string;
  type: CategoryType;
  status: ActiveStatus;
  configuration_count: number;
  created_at: string;
};

export type Category = {
  id: number;
  list_image: string;
  name: string;
  slug: string;
  meta_title: string | null;
  meta_description: string | null;
  short_description: string;
  title: string;
  detail_image_d: string;
  detail_image_m: string;
  product_summary: string | null;
  why_choose_summary: string | null;
  why_choose_title: string | null;
  why_choose_desc: string | null;
  product_short_line: string | null;
  configuration_short_line: string | null;
  why_choose_img: string | null;
  menu_img: string | null;
  type: CategoryType;
  status: ActiveStatus;
  configuration: CategoryConfiguration[];
  created_at: string;
  updated_at: string;
};

export type SettingEntry = { id: number; value: string };

export type Settings = {
  call_details: SettingEntry[];
  email_details: SettingEntry[];
  address_details: SettingEntry[];
  facebook_link: string | null;
  instagram_link: string | null;
  linkedin_link: string | null;
  updated_at: string;
};

export type ActiveStatus = "active" | "inactive";

export type FaqCategorySummary = {
  id: number;
  name: string;
  status: ActiveStatus;
  faq_count: number;
  created_at: string;
  updated_at: string;
};

export type FaqCategory = FaqCategorySummary & {
  faqs: { id: number; question: string; answer: string; sort_order: number }[];
};

export type FaqCategoryOption = { id: number; name: string };

export type Faq = {
  id: number;
  category_id: number;
  category_name: string;
  category_status: ActiveStatus;
  question: string;
  answer: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
};

export type ProductSummary = {
  id: number;
  category_name: string | null;
  name: string;
  title: string;
  list_img: string;
  status: ActiveStatus;
  image_count: number;
  faq_count: number;
  created_at: string;
};

export type Product = {
  id: number;
  category_id: number | null;
  category_name: string | null;
  status: ActiveStatus;
  name: string;
  slug: string;
  meta_title: string | null;
  meta_description: string | null;
  short_description: string;
  list_img: string;
  title: string;
  product_info: string | null;
  highlights: string | null;
  benefits: string | null;
  features: string | null;
  technical_specification: string | null;
  installation_process: string | null;
  detail_imgs: { id: number; img: string }[];
  faqs: { id: number; faq_question: string; faq_answer: string }[];
  created_at: string;
  updated_at: string;
};

export type PresenceSummary = {
  id: number;
  state_name: string;
  map_img: string;
  short_line: string | null;
  status: ActiveStatus;
  city_count: number;
  created_at: string;
};

export type Presence = {
  id: number;
  status: ActiveStatus;
  state_name: string;
  state_link: string | null;
  map_img: string;
  short_line: string | null;
  cities: { id: number; city_name: string; city_link: string | null }[];
  created_at: string;
  updated_at: string;
};

export type AdminProfile = AdminUser & { last_login_at: string | null; created_at: string };

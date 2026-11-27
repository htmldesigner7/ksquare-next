import PageTemplate, { pageMetadata } from "@/components/page-kit/PageTemplate";
import { page } from "@/content/pages/our-presence";
import { getPresence } from "@/lib/presence";
import { getTestimonials } from "@/lib/testimonials";

export const metadata = pageMetadata(page);

const FALLBACK_AVATAR = "/assets/home/testimonials/avatar-placeholder.svg";

export default async function OurPresencePage() {
  const [testimonials, presence] = await Promise.all([getTestimonials(), getPresence()]);
  // "What Our Clients Say" comes from the admin "Testimonials" module and "Expanding Horizons" from "Ksquare presence";
  // the built-in content stays as the fallback.
  const sections = page.sections.map((s) => {
    if (s.type === "testimonials" && testimonials.length)
      return { ...s, items: testimonials.map((t) => ({ name: t.name, company: t.company, text: t.description, img: t.profile_photo ?? FALLBACK_AVATAR })) };
    if (s.type === "regions" && presence.length)
      return { ...s, states: presence.map((p) => ({ name: p.name, blurb: p.blurb ?? undefined, map: p.map ?? undefined, cities: p.cities.length ? p.cities : undefined })) };
    return s;
  });
  return <PageTemplate page={{ ...page, sections }} />;
}

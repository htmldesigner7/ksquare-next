import { redirect } from "next/navigation";

/** Section landing URL: sends visitors to the section's primary page. */
export default function PartnersIndex() {
  redirect("/partners/become-a-partner");
}

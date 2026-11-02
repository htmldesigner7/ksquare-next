import { redirect } from "next/navigation";

/** Section landing URL: sends visitors to the section's primary page. */
export default function SolutionsIndex() {
  redirect("/solutions/residential-solar");
}

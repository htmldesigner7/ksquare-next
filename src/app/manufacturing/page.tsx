import { redirect } from "next/navigation";

/** Section landing URL: sends visitors to the section's primary page. */
export default function ManufacturingIndex() {
  redirect("/manufacturing/private-label-manufacturing");
}

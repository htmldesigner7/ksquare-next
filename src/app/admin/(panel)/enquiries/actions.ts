"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { adminFetch } from "@/lib/admin/dal";

const back = (id: number, params: Record<string, string>) =>
  redirect(`/admin/enquiries/${id}?${new URLSearchParams(params)}`);

export async function updateEnquiryStatus(id: number, formData: FormData) {
  const res = await adminFetch(`/admin/enquiries/${id}/status`, {
    method: "PATCH",
    body: { status: String(formData.get("status") ?? "") },
  });
  if (!res.ok) back(id, { error: res.message });
  revalidatePath("/admin/enquiries");
  back(id, { saved: "1" });
}

export async function deleteEnquiry(id: number) {
  const res = await adminFetch(`/admin/enquiries/${id}`, { method: "DELETE" });
  if (!res.ok) back(id, { error: res.message }); // e.g. 403 for non-super-admins
  revalidatePath("/admin/enquiries");
  redirect("/admin/enquiries?deleted=1");
}

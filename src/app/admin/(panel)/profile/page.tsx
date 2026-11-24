import type { Metadata } from "next";
import PageHeader from "@/components/admin/PageHeader";
import PasswordForm from "@/components/admin/profile/PasswordForm";
import ProfileForm from "@/components/admin/profile/ProfileForm";
import { adminFetch } from "@/lib/admin/dal";
import { formatDate } from "@/lib/admin/format";
import type { AdminProfile } from "@/lib/admin/types";

export const metadata: Metadata = { title: "My profile" };

export default async function ProfilePage() {
  const res = await adminFetch<AdminProfile>("/admin/profile");
  const profile = res.data;
  if (!profile) return <p className="text-sm text-[var(--adm-danger)]">{res.message}</p>;

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader title="My profile" description="Update your details and keep your account secure." />

      <section className="flex flex-wrap items-center gap-5 rounded-xl border border-[var(--adm-border)] bg-[var(--adm-surface)] p-6">
        <span className="grid size-16 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[var(--adm-primary)] to-[#3d4fc0] text-2xl font-bold text-white uppercase" aria-hidden>
          {profile.name.charAt(0)}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-lg font-semibold">{profile.name}</p>
          <p className="truncate text-sm text-[var(--adm-muted)]">{profile.email}</p>
        </div>
        <dl className="grid gap-x-8 gap-y-1 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-xs uppercase tracking-wide text-[var(--adm-muted)]">Role</dt>
            <dd className="font-medium capitalize">{profile.role.replace("_", " ")}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-[var(--adm-muted)]">Last sign-in</dt>
            <dd className="font-medium">{profile.last_login_at ? formatDate(profile.last_login_at) : "—"}</dd>
          </div>
        </dl>
      </section>

      <ProfileForm key={`${profile.name}|${profile.email}`} profile={profile} />
      <PasswordForm />
    </div>
  );
}

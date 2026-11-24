import type { Metadata } from "next";
import { redirect } from "next/navigation";
import AuthCard from "@/components/admin/AuthCard";
import LoginForm from "@/components/admin/LoginForm";
import { getSession } from "@/lib/admin/dal";

export const metadata: Metadata = { title: "Sign in" };

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ reset?: string }> }) {
  if (await getSession()) redirect("/admin"); // already signed in
  const { reset } = await searchParams;
  return (
    <AuthCard title="Welcome back" subtitle="Sign in to manage your website.">
      <LoginForm resetDone={reset === "1"} />
    </AuthCard>
  );
}

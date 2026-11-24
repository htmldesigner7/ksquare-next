import { logout } from "@/app/admin/actions";

export default function LogoutButton() {
  return (
    <form action={logout}>
      <button type="submit" className="adm-btn adm-btn-ghost !h-10">
        Log out
      </button>
    </form>
  );
}

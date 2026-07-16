import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { logout } from "@/app/auth/actions";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", user.id)
    .single();

  return (
    <main className="mx-auto max-w-2xl p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <form>
          <button
            formAction={logout}
            className="rounded border px-4 py-2 text-sm hover:bg-gray-50"
          >
            Log out
          </button>
        </form>
      </div>

      <div className="mt-8 rounded-lg border p-6">
        <p className="text-gray-600">
          Signed in as{" "}
          <span className="font-medium text-black">
            {profile?.full_name ?? user.email}
          </span>
        </p>
        <p className="mt-1 text-sm text-gray-400">{user.email}</p>
      </div>

      <p className="mt-8 text-sm text-gray-400">
        Auth works. Member 1 replaces this page with the real dashboard.
      </p>
    </main>
  );
}

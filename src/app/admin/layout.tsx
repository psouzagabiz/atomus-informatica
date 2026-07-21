import { AdminSidebar } from "@/components/sections/admin/admin-sidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-atomus flex flex-col gap-8 py-10 lg:flex-row">
      <AdminSidebar />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}

import { ClientSidebar } from "@/components/sections/client/client-sidebar";

export default function ClientDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container-atomus flex flex-col gap-8 py-10 lg:flex-row">
      <ClientSidebar />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}

import { DashboardShell } from "@/components/dashboard/DashboardShell";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="p-4 sm:p-6">
        <h1 className="text-2xl font-semibold text-[#1C1917]">
          Dashboard content
        </h1>
      </div>
    </DashboardShell>
  );
}
import type { ReactNode } from "react";

import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";

type DashboardShellProps = {
  children: ReactNode;
};

export function DashboardShell({
  children,
}: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <div className="mx-auto flex w-full max-w-[1440px]">
        <DashboardSidebar />

        <main className="min-w-0 flex-1 px-4 py-4 sm:px-6 lg:px-[30px] lg:py-6 lg:pl-0">
          <div className="min-h-[calc(100vh-48px)] overflow-hidden rounded-2xl border border-[#E7E5E4] bg-white">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
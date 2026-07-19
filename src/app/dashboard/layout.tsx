import type { ReactNode } from "react";

import DashboardFooter from "@/components/dashboard/DashboardFooter";
import {DashboardShell} from "@/components/dashboard/DashboardShell";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <DashboardShell>
      <div className="flex min-h-[calc(100vh-48px)] flex-col">
        <div className="flex-1 px-4 py-6 sm:px-6">
          <div className="mx-auto w-full max-w-[1104px]">
            {children}
          </div>
        </div>

        <div className="px-4 pb-6 sm:px-6">
          <div className="mx-auto w-full max-w-[1104px]">
            <DashboardFooter />
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
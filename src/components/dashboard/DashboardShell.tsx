// import type { ReactNode } from "react";

// import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";

// type DashboardShellProps = {
//   children: ReactNode;
// };

// export function DashboardShell({
//   children,
// }: DashboardShellProps) {
//   return (
//     <div className="min-h-screen bg-[#FAFAF9]">
//       <div className="mx-auto flex w-full max-w-[1440px]">
//         <DashboardSidebar />

//         <main className="min-w-0 flex-1 px-4 py-4 sm:px-6 lg:px-[30px] lg:py-6 lg:pl-0">
//           <div className="min-h-[calc(100vh-48px)] overflow-hidden rounded-2xl border border-[#E7E5E4] bg-white">
//             {children}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
import type { ReactNode } from "react";

import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { MobileSidebar } from "@/components/dashboard/MobileSidebar";

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

        <div className="min-w-0 flex-1">
          <header className="flex h-16 items-center justify-between border-b border-[#E7E5E4] bg-[#FAFAF9] px-4 lg:hidden">
            <span className="text-lg font-semibold text-[#1C1917]">
              Material Shadcn
            </span>

            <MobileSidebar />
          </header>

          <main className="min-w-0 px-3 py-4 sm:px-5 lg:px-[24px] lg:py-6 lg:pl-0">
            <div className="min-h-[calc(100vh-48px)] overflow-hidden rounded-2xl border border-[#E7E5E4] bg-white">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
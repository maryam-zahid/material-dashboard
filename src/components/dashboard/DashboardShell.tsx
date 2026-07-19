
// import type { ReactNode } from "react";

// import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
// import { MobileSidebar } from "@/components/dashboard/MobileSidebar";

// type DashboardShellProps = {
//   children: ReactNode;
// };

// export function DashboardShell({
//   children,
// }: DashboardShellProps) {
//   return (
//     <div
//       className="min-h-screen bg-[#FAFAF9] bg-cover bg-center bg-no-repeat"
//       style={{
//         backgroundImage:
//           "url('/images/backgrounds/texture-background-grainy.png')",
//       }}
//     >
//       <div className="min-[800px]:hidden">
//         <MobileSidebar />
//       </div>

//       <div className="mx-auto flex w-full max-w-[1440px] items-start">
//         <aside className="hidden w-[268px] shrink-0 pl-[30px] pt-[43px] min-[800px]:block">
//           <DashboardSidebar />
//         </aside>

//         <div className="min-w-0 flex-1 px-3 py-6 min-[800px]:pr-6 min-[800px]:pl-0">
//           {children}
//         </div>
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
    <div
      className="min-h-screen bg-[#FAFAF9] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/images/backgrounds/texture-background-grainy.png')",
      }}
    >
      {/* Mobile navigation */}
      <div className="min-[800px]:hidden">
        <MobileSidebar />
      </div>

      {/* 1440px design frame */}
      <div className="mx-auto flex w-full max-w-[1440px] items-start">
        {/* Desktop/tablet sidebar */}
        <aside className="hidden w-[268px] shrink-0 pl-[30px] pt-[43px] min-[800px]:block">
          <DashboardSidebar />
        </aside>

        {/* Main panel area */}
        <div className="min-w-0 flex-1 py-6 pr-6">
          {children}
        </div>
      </div>
    </div>
  );
}
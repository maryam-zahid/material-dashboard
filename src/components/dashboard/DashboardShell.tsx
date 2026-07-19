
// // import type { ReactNode } from "react";

// // import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
// // import { MobileSidebar } from "@/components/dashboard/MobileSidebar";

// // type DashboardShellProps = {
// //   children: ReactNode;
// // };

// // export function DashboardShell({
// //   children,
// // }: DashboardShellProps) {
// //   return (
// //     <div className="min-h-screen bg-[#FAFAF9]">
// //       <MobileSidebar />

// //       <div className="mx-auto flex w-full max-w-[1440px]">
// //         <aside className="hidden w-[268px] shrink-0 px-[30px] pt-[43px] lg:block">
// //           <DashboardSidebar />
// //         </aside>

// //         <div className="min-w-0 flex-1">
// //           {children}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

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
//       <MobileSidebar />

//       <div className="mx-auto flex w-full max-w-[1440px] items-start gap-[30px] px-4 py-6 lg:px-6 xl:px-0">
//         <aside className="hidden w-[238px] shrink-0 pl-[30px] pt-[19px] lg:block">
//           <DashboardSidebar />
//         </aside>

//         <div className="min-w-0 flex-1">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }
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
//       className="min-h-screen bg-[#FAFAF9] bg-cover bg-center"
//       style={{
//         backgroundImage:
//           "url('/images/backgrounds/texture-background-grainy.png')",
//       }}
//     >
//       {/* Mobile only */}
//       <div className="lg:hidden">
//         <MobileSidebar />
//       </div>

//       <div className="mx-auto flex w-full max-w-[1440px] items-start">
//         {/* Desktop only */}
//         <aside className="hidden w-[268px] shrink-0 pl-[30px] pt-[43px] lg:block">
//           <DashboardSidebar />
//         </aside>

//         <div className="min-w-0 flex-1 px-3 py-6 lg:pr-6 lg:pl-0">
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
      <div className="min-[800px]:hidden">
        <MobileSidebar />
      </div>

      <div className="mx-auto flex w-full max-w-[1440px] items-start">
        <aside className="hidden w-[268px] shrink-0 pl-[30px] pt-[43px] min-[800px]:block">
          <DashboardSidebar />
        </aside>

        <div className="min-w-0 flex-1 px-3 py-6 min-[800px]:pr-6 min-[800px]:pl-0">
          {children}
        </div>
      </div>
    </div>
  );
}
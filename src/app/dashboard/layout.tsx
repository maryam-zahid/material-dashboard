
// import type { ReactNode } from "react";

// import DashboardFooter from "@/components/dashboard/DashboardFooter";
// import { DashboardShell } from "@/components/dashboard/DashboardShell";

// type DashboardLayoutProps = {
//   children: ReactNode;
// };

// export default function DashboardLayout({
//   children,
// }: DashboardLayoutProps) {
//   return (
//     <DashboardShell>
//       <div className="w-full overflow-hidden rounded-2xl border border-[#E7E5E4] bg-white">
//         <div className="px-4 py-6 sm:px-[22px]">
//           <main className="mx-auto w-full max-w-[1104px]">
//             {children}
//           </main>

//           <div className="mx-auto mt-6 w-full max-w-[1104px]">
//             <DashboardFooter />
//           </div>
//         </div>
//       </div>
//     </DashboardShell>
//   );
// }

import type { ReactNode } from "react";

import DashboardFooter from "@/components/dashboard/DashboardFooter";
import { DashboardShell } from "@/components/dashboard/DashboardShell";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <DashboardShell>
      <div className="w-full overflow-hidden rounded-2xl border border-[#E7E5E4] bg-white">
        <div className="px-[22px] pb-6 pt-[23px]">
          <main className="mx-auto w-full max-w-[1104px]">
            {children}
          </main>

          <div className="mx-auto mt-6 w-full max-w-[1104px]">
            <DashboardFooter />
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
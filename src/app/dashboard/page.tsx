
// // import { DashboardIntroCard } from "@/components/dashboard/DashboardIntroCard";
// // import { DashboardWidgets } from "@/components/dashboard/DashboardWidgets";
// // import { ProjectsTable } from "@/components/dashboard/ProjectsTable";
// // import { DashboardCharts } from "@/components/dashboard/charts/DashboardCharts";
// // export default function DashboardPage() {
// //   return (
// //     <div className="space-y-6">
// //       <DashboardIntroCard />

// //       <DashboardWidgets />

// //       <ProjectsTable />

// //       {/* <section className="flex min-h-[900px] items-center justify-center rounded-lg border border-dashed border-[#E7E5E4]">
// //         <p className="text-sm text-[#78716C]">
// //           Dashboard charts will be added here
// //         </p>
// //       </section> */}
// //       <DashboardCharts />
// //     </div>
// //   );
// // }

// // import { DashboardCharts } from "@/components/dashboard/charts/DashboardCharts";
// // import { DashboardIntroCard } from "@/components/dashboard/DashboardIntroCard";
// // import { DashboardWidgets } from "@/components/dashboard/DashboardWidgets";
// // import { ProjectsTable } from "@/components/dashboard/ProjectsTable";

// // export default function DashboardPage() {
// //   return (
// //     <div className="space-y-6">
// //       <DashboardIntroCard />

// //       <DashboardWidgets />

// //       <ProjectsTable />

// //       <DashboardCharts />
// //     </div>
// //   );
// // }

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
//       <div className="px-4 py-6 sm:px-6">
//         <div className="mx-auto w-full max-w-[1104px]">
//           {children}

//           <div className="mt-6">
//             <DashboardFooter />
//           </div>
//         </div>
//       </div>
//     </DashboardShell>
//   );
// }

// import { DashboardCharts } from "@/components/dashboard/charts/DashboardCharts";
// import { DashboardIntroCard } from "@/components/dashboard/DashboardIntroCard";
// import { DashboardWidgets } from "@/components/dashboard/DashboardWidgets";
// import { ProjectsTable } from "@/components/dashboard/ProjectsTable";

// export default function DashboardPage() {
//   return (
//     <div className="flex w-full flex-col gap-6">
//       <DashboardIntroCard />

//       <DashboardWidgets />

//       <ProjectsTable />

//       <DashboardCharts />
//     </div>
//   );
// }

import { DashboardCharts } from "@/components/dashboard/charts/DashboardCharts";
import { DashboardIntroCard } from "@/components/dashboard/DashboardIntroCard";
import { DashboardWidgets } from "@/components/dashboard/DashboardWidgets";
import { ProjectsTable } from "@/components/dashboard/ProjectsTable";

export default function DashboardPage() {
  return (
    <div className="flex w-full flex-col gap-6">
      <DashboardIntroCard />

      <DashboardWidgets />

      <ProjectsTable />

      <DashboardCharts />
    </div>
  );
}
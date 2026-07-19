
// import { DashboardIntroCard } from "@/components/dashboard/DashboardIntroCard";
// import { DashboardWidgets } from "@/components/dashboard/DashboardWidgets";
// import { ProjectsTable } from "@/components/dashboard/ProjectsTable";
// import { DashboardCharts } from "@/components/dashboard/charts/DashboardCharts";
// export default function DashboardPage() {
//   return (
//     <div className="space-y-6">
//       <DashboardIntroCard />

//       <DashboardWidgets />

//       <ProjectsTable />

//       {/* <section className="flex min-h-[900px] items-center justify-center rounded-lg border border-dashed border-[#E7E5E4]">
//         <p className="text-sm text-[#78716C]">
//           Dashboard charts will be added here
//         </p>
//       </section> */}
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
    <div className="space-y-6">
      <DashboardIntroCard />

      <DashboardWidgets />

      <ProjectsTable />

      <DashboardCharts />
    </div>
  );
}
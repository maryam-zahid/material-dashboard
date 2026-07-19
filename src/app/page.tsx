
// import { DashboardWidgets } from "@/components/dashboard/DashboardWidgets";

// export default function DashboardPage() {
//   return (
//     <div className="space-y-6">
//       <section className="flex min-h-[255px] items-center justify-center rounded-lg border border-dashed border-[#E7E5E4]">
//         <p className="text-sm text-[#78716C]">
//           Welcome card will be added here
//         </p>
//       </section>

//       <DashboardWidgets />

//       <section className="flex min-h-[620px] items-center justify-center rounded-lg border border-dashed border-[#E7E5E4]">
//         <p className="text-sm text-[#78716C]">
//           Projects table will be added here
//         </p>
//       </section>

//       <section className="flex min-h-[900px] items-center justify-center rounded-lg border border-dashed border-[#E7E5E4]">
//         <p className="text-sm text-[#78716C]">
//           Dashboard charts will be added here
//         </p>
//       </section>
//     </div>
//   );
// }

import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/dashboard");
}
// import { AuthorsTable } from "@/components/tables/AuthorsTable";
// import { ProjectsManagementTable } from "@/components/tables/ProjectsManagementTable";
// import { TablesHeader } from "@/components/tables/TablesHeader";

// export default function TablesPage() {
//   return (
//     <div className="flex w-full flex-col gap-6">
//       <TablesHeader />

//       <AuthorsTable />

//       <ProjectsManagementTable />
//     </div>
//   );
// }

import { AuthorsTable } from "@/components/tables/AuthorsTable";
import { ProjectsManagementTable } from "@/components/tables/ProjectsManagementTable";
import { TablesHeader } from "@/components/tables/TablesHeader";

export default function TablesPage() {
  return (
    <div className="flex w-full flex-col gap-6">
      <TablesHeader />

      <AuthorsTable />

      <ProjectsManagementTable />
    </div>
  );
}
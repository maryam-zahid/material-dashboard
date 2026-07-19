

import { SidebarContent } from "@/components/dashboard/SidebarContent";

export function DashboardSidebar() {
  return (
    <aside className="hidden w-[268px] shrink-0 lg:block">
      <div className="sticky top-0 h-screen px-[30px] pt-[43px]">
        <SidebarContent />
      </div>
    </aside>
  );
}
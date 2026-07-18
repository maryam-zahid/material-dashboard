export function DashboardSidebar() {
  return (
    <aside className="hidden w-[268px] shrink-0 lg:block">
      <div className="sticky top-0 px-[30px] pt-[43px]">
        <div className="w-[208px]">
          <h2 className="text-lg font-semibold leading-7 text-[#1C1917]">
            Material Shadcn
          </h2>

          <div className="mt-4 rounded-lg border border-[#1C1917] bg-gradient-to-b from-[#44403C] to-[#292524] px-4 py-2 text-sm leading-5 text-[#FAFAF9] shadow-sm">
            Dashboard
          </div>
        </div>
      </div>
    </aside>
  );
}
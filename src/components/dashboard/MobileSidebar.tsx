
// "use client";

// import { Menu } from "lucide-react";
// import { useState } from "react";

// import { SidebarContent } from "@/components/dashboard/SidebarContent";
// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// export function MobileSidebar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <Sheet open={open} onOpenChange={setOpen}>
//       <SheetTrigger
//         render={
//           <Button
//             variant="outline"
//             size="icon"
//             aria-label="Open dashboard navigation"
//           />
//         }
//       >
//         <Menu className="size-5" />
//       </SheetTrigger>

//       <SheetContent side="left" className="w-[280px] p-0">
//         <SheetHeader className="sr-only">
//           <SheetTitle>Dashboard navigation</SheetTitle>

//           <SheetDescription>
//             Navigate between dashboard pages.
//           </SheetDescription>
//         </SheetHeader>

//         <div className="h-full px-[30px] py-10">
//           <SidebarContent onNavigate={() => setOpen(false)} />
//         </div>
//       </SheetContent>
//     </Sheet>
//   );
// }

"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

import { SidebarContent } from "@/components/dashboard/SidebarContent";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed left-3 top-3 z-50 min-[800px]:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <Button
              variant="outline"
              size="icon"
              aria-label="Open dashboard navigation"
              className="bg-white"
            />
          }
        >
          <Menu className="size-5" />
        </SheetTrigger>

        <SheetContent
          side="left"
          className="w-[280px] border-r border-[#E7E5E4] bg-[#FAFAF9] p-0"
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Dashboard navigation</SheetTitle>

            <SheetDescription>
              Navigate between dashboard pages.
            </SheetDescription>
          </SheetHeader>

          <div className="h-full px-[30px] py-10">
            <SidebarContent onNavigate={() => setOpen(false)} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
// "use client";

// import { useState } from "react";
// import { Menu } from "lucide-react";

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
//       {/*temporrary commented
//        <SheetTrigger
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
//       /////////////////////////////////////*/}
// <SheetTrigger asChild>
//   <Button
//     variant="outline"
//     size="icon"
//     aria-label="Open dashboard navigation"
//   >
//     <Menu className="size-5" />
//   </Button>
// </SheetTrigger>
//       <SheetContent
//         side="left"
//         className="w-[280px] p-0"
//       >
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
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            aria-label="Open dashboard navigation"
          />
        }
      >
        <Menu className="size-5" />
      </SheetTrigger>

      <SheetContent side="left" className="w-[280px] p-0">
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
  );
}
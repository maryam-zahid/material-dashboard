// import Link from "next/link";
// import { Heart } from "lucide-react";

// export default function DashboardFooter() {
//   return (
//     <footer className="mt-6 border-t border-stone-200 pt-4">
//       <div className="flex items-center justify-between">
//         {/* Left Side */}
//         <div className="flex items-center gap-1 text-xs text-stone-500">
//           <span>© 2025, made with</span>

//           <Heart
//             className="mx-1 h-4 w-4 fill-red-500 text-red-500"
//             strokeWidth={1.8}
//           />

//           <span>
//             by{" "}
//             <span className="font-medium text-stone-700">
//               Creative Tim
//             </span>{" "}
//             for a better web.
//           </span>
//         </div>

//         {/* Right Side */}
//         <div className="flex items-center gap-4 text-xs text-stone-500">
//           <Link href="#">Creative Tim</Link>
//           <Link href="#">About Us</Link>
//           <Link href="#">Blog</Link>
//           <Link href="#">License</Link>
//         </div>
//       </div>
//     </footer>
//   );
// }

// import Link from "next/link";
// import { Heart } from "lucide-react";

// export default function DashboardFooter() {
//   return (
//     <footer className="border-t border-[#E7E5E4] pt-4">
//       <div className="flex flex-col gap-4 text-[12px] leading-4 text-[#78716C] sm:flex-row sm:items-center sm:justify-between">
//         <div className="flex flex-wrap items-center gap-1">
//           <span>© 2025, made with</span>

//           <Heart
//             className="size-4 fill-[#EF4444] text-[#EF4444]"
//             strokeWidth={1.5}
//           />

//           <span>
//             by{" "}
//             <span className="font-medium text-[#44403C]">
//               Creative Tim
//             </span>{" "}
//             for a better web.
//           </span>
//         </div>

//         <nav className="flex flex-wrap items-center gap-4">
//           <Link
//             href="#"
//             className="transition-colors hover:text-[#1C1917]"
//           >
//             Creative Tim
//           </Link>

//           <Link
//             href="#"
//             className="transition-colors hover:text-[#1C1917]"
//           >
//             About Us
//           </Link>

//           <Link
//             href="#"
//             className="transition-colors hover:text-[#1C1917]"
//           >
//             Blog
//           </Link>

//           <Link
//             href="#"
//             className="transition-colors hover:text-[#1C1917]"
//           >
//             License
//           </Link>
//         </nav>
//       </div>
//     </footer>
//   );
// }

import Link from "next/link";
import { Heart } from "lucide-react";

export default function DashboardFooter() {
  return (
    <footer className="w-full bg-transparent">
      <div className="h-px w-full bg-[#E7E5E4]" />

      <div className="flex min-h-8 flex-col gap-3 pt-4 text-[12px] leading-4 text-[#78716C] sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-1">
          <span>© 2025, made with</span>

          <Heart
            className="size-4 fill-[#EF4444] text-[#EF4444]"
            strokeWidth={1.5}
          />

          <span>
            by{" "}
            <span className="font-medium text-[#44403C]">
              Creative Tim
            </span>{" "}
            for a better web.
          </span>
        </div>

        <nav className="flex flex-wrap items-center gap-4">
          <Link href="#" className="hover:text-[#1C1917]">
            Creative Tim
          </Link>

          <Link href="#" className="hover:text-[#1C1917]">
            About Us
          </Link>

          <Link href="#" className="hover:text-[#1C1917]">
            Blog
          </Link>

          <Link href="#" className="hover:text-[#1C1917]">
            License
          </Link>
        </nav>
      </div>
    </footer>
  );
}
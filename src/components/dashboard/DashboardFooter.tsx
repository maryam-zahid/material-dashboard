import Link from "next/link";
import { Heart } from "lucide-react";

export default function DashboardFooter() {
  return (
    <footer className="mt-6 border-t border-stone-200 pt-4">
      <div className="flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-1 text-xs text-stone-500">
          <span>© 2025, made with</span>

          <Heart
            className="mx-1 h-4 w-4 fill-red-500 text-red-500"
            strokeWidth={1.8}
          />

          <span>
            by{" "}
            <span className="font-medium text-stone-700">
              Creative Tim
            </span>{" "}
            for a better web.
          </span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 text-xs text-stone-500">
          <Link href="#">Creative Tim</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Blog</Link>
          <Link href="#">License</Link>
        </div>
      </div>
    </footer>
  );
}
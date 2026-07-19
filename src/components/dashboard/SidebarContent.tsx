

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SidebarIcon } from "@/components/dashboard/SidebarIcon";
import {
  authNavigation,
  documentationNavigation,
  mainNavigation,
} from "@/data/navigation";
import { cn } from "@/lib/utils";

type SidebarContentProps = {
  onNavigate?: () => void;
};

export function SidebarContent({
  onNavigate,
}: SidebarContentProps) {
  const pathname = usePathname();

  return (
    <div className="flex h-[400px] w-[208px] flex-col items-start gap-4">
      <Link
        href="/dashboard"
        onClick={onNavigate}
        className="h-7 w-[141px] shrink-0 font-sans text-[18px] font-semibold leading-7 text-[#1C1917]"
      >
        Material Shadcn
      </Link>

      {mainNavigation.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "flex shrink-0 items-center gap-3 font-sans text-[14px] font-normal leading-5",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C1917]",
              isActive
                ? [
                    "h-[38px] w-[208px] rounded-lg border border-[#1C1917]",
                    "bg-gradient-to-b from-[#44403C] to-[#292524]",
                    "px-4 text-[#FAFAF9]",
                    "shadow-[0_1px_2px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.25),inset_0_2px_0_rgba(255,255,255,0.35)]",
                  ]
                : [
                    "h-5 w-[176px] px-4 text-[#44403C]",
                    "hover:text-[#1C1917]",
                  ],
            )}
          >
            <SidebarIcon src={item.iconPath} />

            <span className="h-5 whitespace-nowrap">
              {item.label}
            </span>
          </Link>
        );
      })}

      <div className="h-px w-[208px] shrink-0 bg-[#E7E5E4]" />

      <div className="flex h-[88px] w-[208px] shrink-0 flex-col items-start gap-4 px-4">
        <p className="h-4 w-[75px] shrink-0 font-sans text-[12px] font-semibold leading-4 text-[#78716C]">
          AUTH PAGES
        </p>

        {authNavigation.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "flex h-5 w-[176px] shrink-0 items-center gap-3",
                "font-sans text-[14px] font-normal leading-5 text-[#44403C]",
                "hover:text-[#1C1917]",
                isActive && "text-[#1C1917]",
              )}
            >
              <SidebarIcon src={item.iconPath} />

              <span className="h-5 whitespace-nowrap">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>

      <div className="h-px w-[208px] shrink-0 bg-[#E7E5E4]" />

      <Link
        href={documentationNavigation.href}
        onClick={onNavigate}
        className="flex h-5 w-[208px] shrink-0 items-center gap-3 px-4 font-sans text-[14px] font-normal leading-5 text-[#44403C] hover:text-[#1C1917]"
      >
        <SidebarIcon
          src={documentationNavigation.iconPath}
        />

        <span className="h-5 whitespace-nowrap">
          {documentationNavigation.label}
        </span>
      </Link>
    </div>
  );
}

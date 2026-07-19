import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type DashboardChartCardProps = {
  title: string;
  description: string;
  children: ReactNode;
  headerAction?: ReactNode;
  topContent?: ReactNode;
  className?: string;
};

export function DashboardChartCard({
  title,
  description,
  children,
  headerAction,
  topContent,
  className,
}: DashboardChartCardProps) {
  return (
    <article
      className={cn(
        "flex min-h-[437px] min-w-0 flex-col rounded-md",
        "border border-[#E5E5E5] bg-white p-6 shadow-sm",
        className,
      )}
    >
      <div className="flex min-h-[52px] items-start justify-between gap-4">
        <div className="flex min-w-0 flex-col gap-1">
          <h2 className="text-[18px] font-semibold leading-7 text-[#171717]">
            {title}
          </h2>

          <p className="text-[14px] font-normal leading-5 text-[#737373]">
            {description}
          </p>
        </div>

        {headerAction}
      </div>

      {topContent}

      <div className="mt-auto min-h-0 flex-1">
        {children}
      </div>
    </article>
  );
}
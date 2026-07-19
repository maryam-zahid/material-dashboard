import { Card } from "@/components/ui/card";
import type { ChartWidget } from "@/data/widgets";

import { MiniBarChart } from "./MiniBarChart";

type AnalyticsWidgetCardProps = {
  widget: ChartWidget;
};

export function AnalyticsWidgetCard({
  widget,
}: AnalyticsWidgetCardProps) {
  return (
    <Card className="h-[257px] w-full gap-0 rounded-lg border-[#E7E5E4] bg-white p-6 shadow-none xl:w-[258px]">
      <div className="flex h-10 w-full flex-col items-start gap-1">
        <h2 className="text-[14px] font-semibold leading-5 text-[#1C1917]">
          {widget.title}
        </h2>

        <p className="text-[12px] font-normal leading-4 text-[#78716C]">
          {widget.description}
        </p>
      </div>

      <div className="mt-[5px] w-full">
        <MiniBarChart
          bars={widget.bars}
          activeBar={widget.activeBar}
          tooltip={widget.tooltip}
        />
      </div>

      <div className="mt-[5px] flex h-4 items-center gap-2">
        <span className="size-2 shrink-0 rounded-full bg-[#22C55E]" />

        <p className="whitespace-nowrap text-[12px] font-normal leading-4 text-[#78716C]">
          {widget.status}
        </p>
      </div>
    </Card>
  );
}
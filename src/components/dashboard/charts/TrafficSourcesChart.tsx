"use client";

import { Cell, Pie, PieChart } from "recharts";

import { DashboardChartCard } from "@/components/dashboard/charts/DashboardChartCard";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { trafficSourcesData } from "@/data/dashboard-charts";

const chartConfig = {
  Desktop: {
    label: "Desktop",
    color: "#3B82F6",
  },
  Tablet: {
    label: "Tablet",
    color: "#1C1917",
  },
  Mobile: {
    label: "Mobile",
    color: "#22C55E",
  },
} satisfies ChartConfig;

export function TrafficSourcesChart() {
  return (
    <DashboardChartCard
      title="Traffic Sources"
      description="Device breakdown"
      topContent={
        <div className="mt-[25px] flex h-5 justify-end">
          <div className="flex items-center gap-2">
            <Legend color="#22C55E" label="Desktop" />
            <Legend color="#3B82F6" label="Tablet" />
            <Legend color="#1C1917" label="Mobile" />
          </div>
        </div>
      }
    >
      <ChartContainer
        config={chartConfig}
        className="mx-auto mt-[25px] h-[251px] w-full max-w-[360px]"
      >
        <PieChart>
          <ChartTooltip
            content={<ChartTooltipContent nameKey="source" />}
          />

          <Pie
            data={trafficSourcesData}
            dataKey="value"
            nameKey="source"
            cx="50%"
            cy="50%"
            innerRadius={68}
            outerRadius={98}
            paddingAngle={3}
            stroke="#FFFFFF"
            strokeWidth={2}
          >
            {trafficSourcesData.map((entry) => (
              <Cell
                key={entry.source}
                fill={entry.fill}
              />
            ))}
          </Pie>
        </PieChart>
      </ChartContainer>
    </DashboardChartCard>
  );
}

type LegendProps = {
  color: string;
  label: string;
};

function Legend({
  color,
  label,
}: LegendProps) {
  return (
    <div className="flex items-center gap-1">
      <span
        className="size-2 rounded-[2px]"
        style={{ backgroundColor: color }}
      />

      <span className="text-[12px] leading-4 text-[#737373]">
        {label}
      </span>
    </div>
  );
}
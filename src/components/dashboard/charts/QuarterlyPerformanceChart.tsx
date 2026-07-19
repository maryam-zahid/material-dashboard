"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

import { DashboardChartCard } from "@/components/dashboard/charts/DashboardChartCard";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { quarterlyPerformanceData } from "@/data/dashboard-charts";

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#22C55E",
  },
  profit: {
    label: "Profit",
    color: "#1C1917",
  },
} satisfies ChartConfig;

export function QuarterlyPerformanceChart() {
  return (
    <DashboardChartCard
      title="Quarterly Performance"
      description="Revenue and profit analysis"
      topContent={
        <div className="mt-[25px] flex h-5 justify-end">
          <div className="flex items-center gap-4">
            <Legend color="#22C55E" label="Revenue" />
            <Legend color="#1C1917" label="Profit" />
          </div>
        </div>
      }
    >
      <ChartContainer
        config={chartConfig}
        className="mt-[25px] h-[251px] w-full"
      >
        <BarChart
          accessibilityLayer
          data={quarterlyPerformanceData}
          barGap={8}
          margin={{ top: 8, right: 0, left: 6, bottom: 0 }}
        >
          <CartesianGrid
            vertical={false}
            stroke="#E5E5E5"
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="quarter"
            axisLine={{ stroke: "#E5E5E5" }}
            tickLine={false}
            tickMargin={10}
            tick={{ fill: "#737373", fontSize: 12 }}
          />

          <YAxis
            domain={[0, 300000]}
            ticks={[0, 60000, 120000, 180000, 240000, 300000]}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#737373", fontSize: 12 }}
            tickFormatter={(value) =>
              value === 0 ? "$0" : `$${value / 1000},000`
            }
          />

          {/* <ChartTooltip
            cursor={{ fill: "#FAFAF9" }}
            content={
              <ChartTooltipContent
                indicator="dot"
                formatter={(value, name) => (
                  <div className="flex min-w-[120px] items-center justify-between gap-4">
                    <span className="capitalize text-[#737373]">
                      {String(name)}
                    </span>

                    <span className="font-semibold text-[#171717]">
                      ${Number(value).toLocaleString()}
                    </span>
                  </div>
                )}
              />
            }
          /> */}

<ChartTooltip
  cursor={{ fill: "#FAFAF9" }}
  offset={-28}
  allowEscapeViewBox={{
    x: true,
    y: true,
  }}
  content={<QuarterlyTooltip />}
/>

          <Bar
            dataKey="revenue"
            fill="#22C55E"
            radius={[2, 2, 0, 0]}
            maxBarSize={48}
          />

          <Bar
            dataKey="profit"
            fill="#1C1917"
            radius={[2, 2, 0, 0]}
            maxBarSize={48}
          />
        </BarChart>
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


/////////
type QuarterlyPayloadItem = {
  dataKey?: string;
  value?: number;
};

type QuarterlyTooltipProps = {
  active?: boolean;
  label?: string;
  payload?: QuarterlyPayloadItem[];
};

function QuarterlyTooltip({
  active,
  label,
  payload,
}: QuarterlyTooltipProps) {
  if (!active || !payload?.length) {
    return null;
  }

  const revenue = payload.find(
    (item) => item.dataKey === "revenue",
  )?.value;

  const profit = payload.find(
    (item) => item.dataKey === "profit",
  )?.value;

  return (
    <div className="-translate-x-6 rounded-md border border-[#E5E5E5] bg-white p-2 shadow-md">
      <p className="text-[12px] font-normal leading-4 text-[#737373]">
        {label}
      </p>

      <div className="mt-1 space-y-1">
        <div className="flex min-w-[118px] items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <span className="size-2 rounded-[2px] bg-[#22C55E]" />

            <span className="text-[12px] leading-4 text-[#737373]">
              Revenue
            </span>
          </div>

          <span className="text-[12px] font-semibold leading-4 text-[#171717]">
            {revenue?.toLocaleString()}
          </span>
        </div>

        <div className="flex min-w-[118px] items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <span className="size-2 rounded-[2px] bg-[#1C1917]" />

            <span className="text-[12px] leading-4 text-[#737373]">
              Profit
            </span>
          </div>

          <span className="text-[12px] font-semibold leading-4 text-[#171717]">
            {profit?.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
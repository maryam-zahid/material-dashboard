"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
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
import { userActivityData } from "@/data/dashboard-charts";

const chartConfig = {
  users: {
    label: "Users",
    color: "#22C55E",
  },
  sessions: {
    label: "Sessions",
    color: "#1C1917",
  },
} satisfies ChartConfig;

export function UserActivityChart() {
  return (
    <DashboardChartCard
      title="User Activity"
      description="Weekly trends"
      topContent={
        <div className="mt-[25px] flex h-5 justify-end">
          <div className="flex items-center gap-4">
            <LegendItem color="#22C55E" label="Users" />
            <LegendItem color="#1C1917" label="Sessions" />
          </div>
        </div>
      }
    >
      <ChartContainer
        config={chartConfig}
        className="mt-[25px] h-[251px] w-full"
      >
        <LineChart
          accessibilityLayer
          data={userActivityData}
          margin={{ top: 8, right: 0, left: -18, bottom: 0 }}
        >
          <CartesianGrid
            vertical={false}
            stroke="#E5E5E5"
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="day"
            axisLine={{ stroke: "#E5E5E5" }}
            tickLine={false}
            tickMargin={10}
            tick={{ fill: "#737373", fontSize: 12 }}
          />

          <YAxis
            domain={[0, 125]}
            ticks={[0, 25, 50, 75, 100, 125]}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#737373", fontSize: 12 }}
          />

          <ChartTooltip
            cursor={{ stroke: "#E5E5E5", strokeDasharray: "3 3" }}
            content={<ChartTooltipContent indicator="dot" />}
          />

          <Line
            type="monotone"
            dataKey="sessions"
            stroke="#1C1917"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 5 }}
          />

          <Line
            type="monotone"
            dataKey="users"
            stroke="#22C55E"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ChartContainer>
    </DashboardChartCard>
  );
}

type LegendItemProps = {
  color: string;
  label: string;
};

function LegendItem({
  color,
  label,
}: LegendItemProps) {
  return (
    <div className="flex items-center gap-1 px-1 py-0.5">
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
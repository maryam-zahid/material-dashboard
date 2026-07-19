"use client";

import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
} from "recharts";

import { DashboardChartCard } from "@/components/dashboard/charts/DashboardChartCard";
import { Button } from "@/components/ui/button";
// import {
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
//   type ChartConfig,
// } from "@/components/ui/chart";
import {
  ChartContainer,
  ChartTooltip,
  type ChartConfig,
} from "@/components/ui/chart";

import { salesExpensesData } from "@/data/dashboard-charts";

const chartConfig = {
  sales: {
    label: "Sales",
    color: "#22C55E",
  },
  expenses: {
    label: "Expenses",
    color: "#1C1917",
  },
} satisfies ChartConfig;

export function SalesExpensesChart() {
  return (
    <DashboardChartCard
      title="Sales vs Expenses"
      description="Monthly revenue vs expenses"
      headerAction={
        <Button
          variant="outline"
          className="h-[38px] w-[112px] rounded-md border-[#E5E5E5] bg-white px-4 text-[14px] font-medium leading-5 text-[#171717] shadow-sm"
        >
          View Report
        </Button>
      }
      topContent={
        <div className="mt-[25px] flex min-h-9 items-center justify-between gap-4">
          <p className="text-[30px] font-bold leading-9 text-[#171717]">
            $87,982.80
          </p>

          <div className="flex items-center gap-4">
            <ChartLegendItem color="#22C55E" label="Sales" />
            <ChartLegendItem color="#1C1917" label="Expenses" />
          </div>
        </div>
      }
    >
      <ChartContainer
        config={chartConfig}
        className="mt-[25px] h-[251px] w-full"
      >
        <ComposedChart
          accessibilityLayer
          data={salesExpensesData}
          margin={{ top: 8, right: 0, left: -12, bottom: 0 }}
        >
          <defs>
            <linearGradient id="salesFill" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="#22C55E"
                stopOpacity={0.42}
              />
              <stop
                offset="100%"
                stopColor="#FFFFFF"
                stopOpacity={0}
              />
            </linearGradient>

            <linearGradient id="expensesFill" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="#1C1917"
                stopOpacity={0.16}
              />
              <stop
                offset="100%"
                stopColor="#FFFFFF"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            vertical={false}
            stroke="#E5E5E5"
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="month"
            axisLine={{ stroke: "#E5E5E5" }}
            tickLine={false}
            tickMargin={10}
            tick={{ fill: "#737373", fontSize: 12 }}
          />

          <YAxis
            domain={[0, 1000]}
            ticks={[0, 200, 400, 600, 800, 1000]}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#737373", fontSize: 12 }}
            tickFormatter={(value) =>
              value === 1000 ? "$1,000" : `$${value}`
            }
          />

          {/* <ChartTooltip
            cursor={{ stroke: "#E5E5E5", strokeDasharray: "3 3" }}
            content={<ChartTooltipContent indicator="dot" />}
          /> */}

<ChartTooltip
  cursor={{ stroke: "#E5E5E5", strokeDasharray: "3 3" }}
  content={<SalesExpensesTooltip />}
/>
          <Area
            type="monotone"
            dataKey="expenses"
            fill="url(#expensesFill)"
            stroke="none"
          />

          <Area
            type="monotone"
            dataKey="sales"
            fill="url(#salesFill)"
            stroke="none"
          />

          <Line
            type="monotone"
            dataKey="expenses"
            stroke="#1C1917"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 5 }}
          />

          <Line
            type="monotone"
            dataKey="sales"
            stroke="#22C55E"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 5 }}
          />
        </ComposedChart>
      </ChartContainer>
    </DashboardChartCard>
  );
}

type ChartLegendItemProps = {
  color: string;
  label: string;
};

function ChartLegendItem({
  color,
  label,
}: ChartLegendItemProps) {
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


type TooltipPayloadItem = {
  dataKey?: string;
  value?: number;
};

type SalesExpensesTooltipProps = {
  active?: boolean;
  label?: string;
  payload?: TooltipPayloadItem[];
};

function SalesExpensesTooltip({
  active,
  label,
  payload,
}: SalesExpensesTooltipProps) {
  if (!active || !payload?.length) {
    return null;
  }

  const sales = payload.find(
    (item) => item.dataKey === "sales",
  )?.value;

  const expenses = payload.find(
    (item) => item.dataKey === "expenses",
  )?.value;

  return (
    <div className="min-w-[106px] rounded-md border border-[#E5E5E5] bg-white p-2 shadow-md">
      <p className="text-[12px] font-medium leading-4 text-[#171717]">
        {label}
      </p>

      <div className="my-1 h-px bg-[#E5E5E5]" />

      <div className="space-y-1">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <span className="size-2 rounded-[2px] bg-[#22C55E]" />

            <span className="text-[10px] leading-3 text-[#737373]">
              Sales
            </span>
          </div>

          <span className="text-[10px] font-bold leading-3 text-[#171717]">
            {sales}
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <span className="size-2 rounded-[2px] bg-[#1C1917]" />

            <span className="text-[10px] leading-3 text-[#737373]">
              Expenses
            </span>
          </div>

          <span className="text-[10px] font-bold leading-3 text-[#171717]">
            {expenses}
          </span>
        </div>
      </div>
    </div>
  );
}
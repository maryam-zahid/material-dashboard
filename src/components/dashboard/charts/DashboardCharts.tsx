import { QuarterlyPerformanceChart } from "@/components/dashboard/charts/QuarterlyPerformanceChart";
import { SalesExpensesChart } from "@/components/dashboard/charts/SalesExpensesChart";
import { TrafficSourcesChart } from "@/components/dashboard/charts/TrafficSourcesChart";
import { UserActivityChart } from "@/components/dashboard/charts/UserActivityChart";

export function DashboardCharts() {
  return (
    <section
      aria-label="Dashboard reports"
      className="grid grid-cols-1 gap-6 xl:grid-cols-2"
    >
      <SalesExpensesChart />

      <UserActivityChart />

      <TrafficSourcesChart />

      <QuarterlyPerformanceChart />
    </section>
  );
}
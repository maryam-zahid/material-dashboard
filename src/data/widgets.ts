export type ChartWidget = {
  id: string;
  title: string;
  description: string;
  status: string;
  bars: number[];
  activeBar: number;
  tooltip?: {
    day: string;
    label: string;
    value: number;
  };
};

export const chartWidgets: ChartWidget[] = [
  {
    id: "website-view",
    title: "Website View",
    description: "Last Campaign Performance",
    status: "campaign sent 2 days ago",
    bars: [43, 59, 32, 67, 11, 20, 53],
    activeBar: 3,
    tooltip: {
      day: "Tuesday",
      label: "Views",
      value: 21,
    },
  },
  {
    id: "daily-sales",
    title: "Daily Sales",
    description: "15% increase in today sales",
    status: "updated 4 min ago",
    bars: [43, 59, 32, 67, 11, 20, 53],
    activeBar: 3,
  },
  {
    id: "completed-tasks",
    title: "Completed Tasks",
    description: "Last Campaign Performance",
    status: "just updated",
    bars: [43, 59, 32, 67, 11, 20, 53],
    activeBar: 3,
  },
];
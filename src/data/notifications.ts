export type NotificationType =
  | "info"
  | "success"
  | "warning"
  | "member"
  | "error";

export type DashboardNotification = {
  id: number;
  title: string;
  description: string;
  time: string;
  type: NotificationType;
  unread: boolean;
};

export type NotificationSetting = {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
};

export const recentNotifications: DashboardNotification[] = [
  {
    id: 1,
    title: "New project assigned",
    description:
      "You have been assigned to the Material XD Version project",
    time: "2 min ago",
    type: "info",
    unread: true,
  },
  {
    id: 2,
    title: "Task completed",
    description:
      "Fix Platform Errors task has been completed successfully",
    time: "1 hour ago",
    type: "success",
    unread: true,
  },
  {
    id: 3,
    title: "Budget alert",
    description:
      "Project budget has exceeded 80% of allocated funds",
    time: "3 hours ago",
    type: "warning",
    unread: true,
  },
  {
    id: 4,
    title: "New team member",
    description: "Sophie B. has joined your team",
    time: "1 day ago",
    type: "member",
    unread: true,
  },
  {
    id: 5,
    title: "Server maintenance",
    description:
      "Scheduled maintenance will occur tonight from 2–4 AM",
    time: "2 days ago",
    type: "error",
    unread: true,
  },
];

export const notificationSettings: NotificationSetting[] = [
  {
    id: "email-notifications",
    title: "Email notifications",
    description: "Receive notifications via email",
    enabled: true,
  },
  {
    id: "push-notifications",
    title: "Push notifications",
    description: "Receive push notifications in browser",
    enabled: true,
  },
  {
    id: "sms-notifications",
    title: "SMS notifications",
    description: "Receive important updates via SMS",
    enabled: false,
  },
];
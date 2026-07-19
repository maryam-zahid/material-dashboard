import {
  CircleAlert,
  CircleCheck,
  TriangleAlert,
  UserPlus,
  X,
  type LucideIcon,
} from "lucide-react";

import type { NotificationType } from "@/data/notifications";

type NotificationTypeIconProps = {
  type: NotificationType;
};

type IconStyle = {
  icon: LucideIcon;
  wrapperClassName: string;
  iconClassName: string;
};

const notificationIcons: Record<NotificationType, IconStyle> = {
  info: {
    icon: CircleAlert,
    wrapperClassName: "bg-[#DBEAFE]",
    iconClassName: "text-[#2563EB]",
  },
  success: {
    icon: CircleCheck,
    wrapperClassName: "bg-[#DCFCE7]",
    iconClassName: "text-[#16A34A]",
  },
  warning: {
    icon: TriangleAlert,
    wrapperClassName: "bg-[#FEF9C3]",
    iconClassName: "text-[#CA8A04]",
  },
  member: {
    icon: UserPlus,
    wrapperClassName: "bg-[#DBEAFE]",
    iconClassName: "text-[#2563EB]",
  },
  error: {
    icon: X,
    wrapperClassName: "bg-[#FEE2E2]",
    iconClassName: "text-[#DC2626]",
  },
};

export function NotificationTypeIcon({
  type,
}: NotificationTypeIconProps) {
  const {
    icon: Icon,
    wrapperClassName,
    iconClassName,
  } = notificationIcons[type];

  return (
    <div
      className={`flex size-10 shrink-0 items-center justify-center rounded-full ${wrapperClassName}`}
    >
      <Icon
        className={`size-5 ${iconClassName}`}
        strokeWidth={2}
      />
    </div>
  );
}
import { NotificationTypeIcon } from "@/components/notifications/NotificationTypeIcon";
import type { DashboardNotification } from "@/data/notifications";

type NotificationRowProps = {
  notification: DashboardNotification;
};

export function NotificationRow({
  notification,
}: NotificationRowProps) {
  return (
    <article className="flex min-h-[68px] w-full items-center gap-4 py-3">
      <NotificationTypeIcon type={notification.type} />

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-4">
          <h3 className="truncate text-[14px] font-normal leading-5 text-[#1C1917]">
            {notification.title}
          </h3>

          <div className="flex shrink-0 items-center gap-2">
            <span className="text-[12px] font-normal leading-4 text-[#78716C]">
              {notification.time}
            </span>

            {notification.unread && (
              <span
                aria-label="Unread notification"
                className="size-2 rounded-full bg-[#3B82F6]"
              />
            )}
          </div>
        </div>

        <p className="mt-1 truncate text-[14px] font-normal leading-5 text-[#57534E]">
          {notification.description}
        </p>
      </div>
    </article>
  );
}
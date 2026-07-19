"use client";

import { useState } from "react";

import { NotificationRow } from "@/components/notifications/NotificationRow";
import { Button } from "@/components/ui/button";
import { recentNotifications } from "@/data/notifications";

export function RecentNotificationsCard() {
  const [readNotificationIds, setReadNotificationIds] = useState<number[]>([]);

  const allNotificationsRead =
    readNotificationIds.length === recentNotifications.length;

  function markAllAsRead() {
    setReadNotificationIds(
      recentNotifications.map((notification) => notification.id),
    );
  }

  return (
    <section className="w-full rounded-lg border border-[#E7E5E4] bg-white p-6">
      <div className="flex min-h-9 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-[18px] font-semibold leading-7 text-[#1C1917]">
          Recent Notifications
        </h2>

        <Button
          type="button"
          variant="secondary"
          disabled={allNotificationsRead}
          onClick={markAllAsRead}
          className="h-9 self-start rounded-lg border border-[#E7E5E4] bg-[#F5F5F4] px-3 text-[14px] font-normal leading-5 text-[#44403C] shadow-none hover:bg-[#E7E5E4] disabled:cursor-default disabled:opacity-60 sm:self-auto"
        >
          {allNotificationsRead ? "All marked as read" : "Mark all as read"}
        </Button>
      </div>

      <div className="mt-6 border-t border-[#E7E5E4]">
        {recentNotifications.map((notification, index) => {
          const isRead = readNotificationIds.includes(notification.id);

          return (
            <div
              key={notification.id}
              className={
                index === recentNotifications.length - 1
                  ? ""
                  : "border-b border-[#E7E5E4]"
              }
            >
              <NotificationRow
                notification={{
                  ...notification,
                  unread: isRead ? false : notification.unread,
                }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
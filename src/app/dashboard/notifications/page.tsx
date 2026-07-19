// export default function NotificationsPage() {
//   return (
//     <div>
//       <h1 className="text-2xl font-semibold text-[#1C1917]">
//         Notifications
//       </h1>
//     </div>
//   );
// }


import { NotificationSettingsCard } from "@/components/notifications/NotificationSettingsCard";
import { NotificationsHeader } from "@/components/notifications/NotificationsHeader";
import { RecentNotificationsCard } from "@/components/notifications/RecentNotificationsCard";

export default function NotificationsPage() {
  return (
    <div className="flex w-full flex-col gap-6">
      <NotificationsHeader />

      <div className="mx-auto flex w-full max-w-[910px] flex-col gap-6">
        <RecentNotificationsCard />

        <NotificationSettingsCard />
      </div>
    </div>
  );
}
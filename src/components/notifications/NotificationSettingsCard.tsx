"use client";

import { useState } from "react";

import { Switch } from "@/components/ui/switch";
import { notificationSettings } from "@/data/notifications";

export function NotificationSettingsCard() {
  const [settings, setSettings] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(
      notificationSettings.map((setting) => [
        setting.id,
        setting.enabled,
      ]),
    ),
  );

  function updateSetting(id: string, checked: boolean) {
    setSettings((current) => ({
      ...current,
      [id]: checked,
    }));
  }

  return (
    <section className="w-full rounded-lg border border-[#E7E5E4] bg-white p-6">
      <h2 className="text-[18px] font-semibold leading-7 text-[#1C1917]">
        Notifications Settings
      </h2>

      <div className="mt-6 border-t border-[#E7E5E4]">
        {notificationSettings.map((setting, index) => (
          <div
            key={setting.id}
            className={[
              "flex min-h-[68px] items-center justify-between gap-6 py-3",
              index !== notificationSettings.length - 1
                ? "border-b border-[#E7E5E4]"
                : "",
            ].join(" ")}
          >
            <label
              htmlFor={setting.id}
              className="min-w-0 flex-1 cursor-pointer"
            >
              <span className="block text-[14px] font-normal leading-5 text-[#1C1917]">
                {setting.title}
              </span>

              <span className="mt-1 block text-[14px] font-normal leading-5 text-[#78716C]">
                {setting.description}
              </span>
            </label>

            <Switch
              id={setting.id}
              checked={Boolean(settings[setting.id])}
              onCheckedChange={(checked) =>
                updateSetting(setting.id, checked)
              }
              aria-label={setting.title}
              className="h-6 w-11 shrink-0 cursor-pointer bg-[#E7E5E4] data-[state=checked]:bg-[#1C1917]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
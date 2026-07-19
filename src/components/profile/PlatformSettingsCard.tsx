"use client";

import { useState } from "react";

import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  accountSettings,
  applicationSettings,
  type ProfileSetting,
} from "@/data/profile";

export function PlatformSettingsCard() {
  const allSettings = [
    ...accountSettings,
    ...applicationSettings,
  ];

  const initialSettings = Object.fromEntries(
    allSettings.map((setting) => [
      setting.id,
      setting.enabled,
    ]),
  ) as Record<string, boolean>;

  const [settings, setSettings] =
    useState<Record<string, boolean>>(initialSettings);

  function updateSetting(
    id: string,
    checked: boolean,
  ) {
    setSettings((current) => ({
      ...current,
      [id]: checked,
    }));
  }

  return (
    <Card className="min-h-[509px] gap-6 rounded-lg border-[#E7E5E4] bg-white p-6 shadow-none">
      <h2 className="text-[18px] font-semibold leading-7 text-[#1C1917]">
        Platform Settings
      </h2>

      <SettingsGroup
        title="ACCOUNT"
        items={accountSettings}
        settings={settings}
        onChange={updateSetting}
      />

      <SettingsGroup
        title="APPLICATION"
        items={applicationSettings}
        settings={settings}
        onChange={updateSetting}
      />
    </Card>
  );
}

type SettingsGroupProps = {
  title: string;
  items: ProfileSetting[];
  settings: Record<string, boolean>;
  onChange: (
    id: string,
    checked: boolean,
  ) => void;
};

function SettingsGroup({
  title,
  items,
  settings,
  onChange,
}: SettingsGroupProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      <h3 className="text-[14px] font-normal leading-5 text-[#1C1917]">
        {title}
      </h3>

      {items.map((setting) => (
        <div
          key={setting.id}
          className="flex min-h-6 w-full items-center justify-between gap-4"
        >
          <label
            htmlFor={setting.id}
            className="max-w-[246px] cursor-pointer text-[14px] font-normal leading-5 text-[#57534E]"
          >
            {setting.label}
          </label>

          <Switch
            id={setting.id}
            checked={Boolean(settings[setting.id])}
            onCheckedChange={(checked) =>
              onChange(setting.id, checked)
            }
            aria-label={setting.label}
            className="h-6 w-11 shrink-0 cursor-pointer bg-[#E7E5E4] data-[state=checked]:bg-[#1C1917]"
          />
        </div>
      ))}
    </div>
  );
}
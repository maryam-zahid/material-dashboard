import {
  BriefcaseBusiness,
  Cog,
  Palette,
  SlidersHorizontal,
  Smartphone,
  Tag,
} from "lucide-react";

import type { TableProject } from "@/data/tables";

type TableProjectIconProps = {
  icon: TableProject["icon"];
  background: string;
};

const icons = {
  swatch: Palette,
  sliders: SlidersHorizontal,
  settings: Cog,
  mobile: Smartphone,
  tag: Tag,
  bag: BriefcaseBusiness,
};

export function TableProjectIcon({
  icon,
  background,
}: TableProjectIconProps) {
  const Icon = icons[icon];

  return (
    <div
      className="flex size-8 shrink-0 items-center justify-center rounded-lg"
      style={{
        backgroundColor: background,
      }}
    >
      <Icon
        className="size-4 text-[#FAFAF9]"
        strokeWidth={1.5}
      />
    </div>
  );
}
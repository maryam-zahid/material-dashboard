import Image from "next/image";
import {
  MessageCircle,
  Settings,
  Smartphone,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const profileActions = [
  {
    label: "App",
    icon: Smartphone,
    width: "w-[86px]",
  },
  {
    label: "Message",
    icon: MessageCircle,
    width: "w-[118px]",
  },
  {
    label: "Settings",
    icon: Settings,
    width: "w-[113px]",
  },
];

export function ProfileHeroCard() {
  return (
    <section className="flex min-h-[124px] w-full flex-col gap-6 rounded-xl bg-[#1C1917] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-4">
        <Image
          src="/images/avatars/avatar-1.png"
          alt="Richard Davis"
          width={60}
          height={60}
          priority
          className="size-[60px] shrink-0 rounded-full border-2 border-white/20 object-cover"
        />

        <div className="flex flex-col gap-1">
          <h2 className="text-[24px] font-bold leading-8 text-white">
            Richard Davis
          </h2>

          <p className="text-[16px] font-normal leading-6 text-white/80">
            CEO / Co-Founder
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {profileActions.map((action) => {
          const Icon = action.icon;

          return (
            <Button
              key={action.label}
              type="button"
              className={`${action.width} h-9 gap-3 rounded-lg border-0 bg-white/10 px-4 text-[14px] font-normal leading-5 text-white shadow-none hover:bg-white/20`}
            >
              <Icon
                className="size-4"
                strokeWidth={1.5}
              />

              {action.label}
            </Button>
          );
        })}
      </div>
    </section>
  );
}
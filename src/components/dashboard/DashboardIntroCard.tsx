import Image from "next/image";
import { Button } from "@/components/ui/button";

export function DashboardIntroCard() {
  return (
    <section className="relative overflow-hidden rounded-lg">
      <Image
        src="/images/dashboard/hero-card.png"
        alt="Dashboard background"
        fill
        priority
        className="object-cover"
      />

      <div className="relative z-10 flex min-h-[263px] flex-col justify-center px-8 py-8">
        <div className="max-w-[525px] space-y-6">
          <div className="space-y-4">
            <h1 className="text-[30px] font-bold leading-[36px] text-white">
              Build Amazing Teams
            </h1>

            <p className="text-[18px] leading-7 text-stone-200">
              Connect with diverse talent and create inclusive workspaces
              that drive innovation. Discover how our platform helps you
              build stronger teams.
            </p>
          </div>

          <Button
            className="
              h-11
              w-[116px]
              rounded-lg
              border
              border-stone-900
              bg-gradient-to-b
              from-stone-700
              to-stone-800
              shadow-[0_1px_2px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.25),inset_0_2px_0_rgba(255,255,255,0.35)]
              hover:opacity-95
            "
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
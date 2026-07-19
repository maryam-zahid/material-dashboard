
import { cn } from "@/lib/utils";

type SidebarIconProps = {
  src: string;
  className?: string;
};

export function SidebarIcon({
  src,
  className,
}: SidebarIconProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block size-4 shrink-0 bg-current",
        className,
      )}
      style={{
        WebkitMaskImage: `url("${src}")`,
        maskImage: `url("${src}")`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "16px 16px",
        maskSize: "16px 16px",
      }}
    />
  );
}
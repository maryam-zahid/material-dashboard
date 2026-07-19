import type { ReactNode } from "react";
import Image from "next/image";
import { Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const profileDetails = [
  {
    label: "First Name:",
    value: "Richard Davis",
  },
  {
    label: "Mobile:",
    value: "(44) 123 1234 123",
  },
  {
    label: "Email:",
    value: "richarddavis@mail.com",
  },
  {
    label: "Location:",
    value: "USA",
  },
];

export function ProfileInformationCard() {
  return (
    <Card className="min-h-[509px] gap-6 rounded-lg border-[#E7E5E4] bg-white p-6 shadow-none">
      <div className="flex h-8 items-center justify-between">
        <h2 className="text-[18px] font-semibold leading-7 text-[#1C1917]">
          Profile Information
        </h2>

        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Edit profile information"
          className="size-8 rounded-md border-[#E7E5E4] bg-white shadow-none"
        >
          <Pencil
            className="size-4"
            strokeWidth={1.5}
          />
        </Button>
      </div>

      <p className="text-[14px] font-normal leading-5 text-[#57534E]">
        Hi, I&apos;m Alec Thompson. Decisions: If you can&apos;t decide, the
        answer is no. If two equally difficult paths, choose the one more
        painful in the short term (pain avoidance is creating an illusion of
        equality).
      </p>

      <div className="flex flex-col gap-4">
        {profileDetails.map((detail) => (
          <div
            key={detail.label}
            className="flex flex-col gap-1"
          >
            <p className="text-[14px] font-medium leading-5 text-[#1C1917]">
              {detail.label}
            </p>

            <p className="break-words text-[14px] leading-5 text-[#57534E]">
              {detail.value}
            </p>
          </div>
        ))}

        <div className="flex flex-col gap-2">
          <p className="text-[14px] font-medium leading-5 text-[#1C1917]">
            Social:
          </p>

          <div className="flex items-center gap-3">
            <SocialButton
              label="Facebook"
              icon={
                <Image
                  src="/images/icons/facebook.svg"
                  alt="Facebook"
                  width={18}
                  height={18}
                />
              }
            />

            <SocialButton
              label="Twitter"
              icon={
                <Image
                  src="/images/icons/twitter.svg"
                  alt="Twitter"
                  width={18}
                  height={18}
                />
              }
            />

            <SocialButton
              label="Instagram"
              icon={
                <Image
                  src="/images/icons/instagram.svg"
                  alt="Instagram"
                  width={18}
                  height={18}
                />
              }
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

type SocialButtonProps = {
  label: string;
  icon: ReactNode;
};

function SocialButton({
  label,
  icon,
}: SocialButtonProps) {
  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label={label}
      className="size-8 rounded-md border-[#E7E5E4] bg-white p-1 shadow-none hover:bg-[#F5F5F4]"
    >
      {icon}
    </Button>
  );
}
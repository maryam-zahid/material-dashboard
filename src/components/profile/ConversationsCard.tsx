import Image from "next/image";
import { Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { conversations } from "@/data/profile";

export function ConversationsCard() {
  return (
    <Card className="min-h-[509px] gap-6 rounded-lg border-[#E7E5E4] bg-white p-6 shadow-none">
      <div className="flex h-8 items-center justify-between">
        <h2 className="text-[18px] font-semibold leading-7 text-[#1C1917]">
          Platform Settings
        </h2>

        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Edit conversations"
          className="size-8 rounded-md border-[#E7E5E4] bg-white shadow-none"
        >
          <Pencil
            className="size-4"
            strokeWidth={1.5}
          />
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        {conversations.map(
          (conversation, index) => (
            <div
              key={conversation.id}
              className="flex min-w-0 items-center gap-3"
            >
              <Image
                src={`/images/avatars/avatar-${
                  index + 2
                }.png`}
                alt={conversation.name}
                width={40}
                height={40}
                className="size-10 shrink-0 rounded-full object-cover"
              />

              <div className="min-w-0 flex-1">
                <p className="truncate text-[14px] font-medium leading-5 text-[#1C1917]">
                  {conversation.name}
                </p>

                <p className="truncate text-[14px] font-normal leading-5 text-[#57534E]">
                  {conversation.message}
                </p>
              </div>

              <Button
                type="button"
                variant="secondary"
                className="h-9 shrink-0 rounded-lg bg-[#F5F5F4] px-3 text-[14px] font-normal text-[#57534E] shadow-none hover:bg-[#E7E5E4]"
              >
                Reply
              </Button>
            </div>
          ),
        )}
      </div>
    </Card>
  );
}
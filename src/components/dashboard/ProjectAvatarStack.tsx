import Image from "next/image";

type ProjectAvatarStackProps = {
  members: string[];
};

export function ProjectAvatarStack({
  members,
}: ProjectAvatarStackProps) {
  return (
    <div className="flex h-[34px] w-[90px] items-center">
      {members.map((member, index) => (
        <div
          key={`${member}-${index}`}
          className={index === 0 ? "" : "-ml-[10px]"}
          style={{
            zIndex: members.length - index,
          }}
        >
          <Image
            src={member}
            alt={`Team member ${index + 1}`}
            width={34}
            height={34}
            className="size-[34px] rounded-full border-2 border-white object-cover"
          />
        </div>
      ))}
    </div>
  );
}
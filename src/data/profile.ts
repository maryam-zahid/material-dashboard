export type ProfileSetting = {
  id: string;
  label: string;
  enabled: boolean;
};

export type Conversation = {
  id: number;
  name: string;
  message: string;
  avatar: string;
};

export const accountSettings: ProfileSetting[] = [
  {
    id: "followers",
    label: "Email me when someone follows me",
    enabled: true,
  },
  {
    id: "answers",
    label: "Email me when someone answers on my post",
    enabled: false,
  },
  {
    id: "mentions",
    label: "Email me when someone mentions me",
    enabled: true,
  },
];

export const applicationSettings: ProfileSetting[] = [
  {
    id: "launches",
    label: "New launches and projects",
    enabled: false,
  },
  {
    id: "updates",
    label: "Monthly product updates",
    enabled: true,
  },
  {
    id: "newsletter",
    label: "Subscribe to newsletter",
    enabled: false,
  },
];

export const conversations: Conversation[] = [
  {
    id: 1,
    name: "Alexander",
    message: "Awesome work, can you ...",
    avatar: "/images/avatars/avatar-1.png",
  },
  {
    id: 2,
    name: "Ivanna",
    message: "About file I can...",
    avatar: "/images/avatars/avatar-2.png",
  },
  {
    id: 3,
    name: "Peterson",
    message: "Have a great afternoon",
    avatar: "/images/avatars/avatar-3.png",
  },
  {
    id: 4,
    name: "Bruce Mars",
    message: "Hi! I need more information...",
    avatar: "/images/avatars/avatar-4.png",
  },
];
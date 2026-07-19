export type Project = {
  id: number;
  name: string;
  logo: string;
  members: string[];
  budget: string;
  team: "Design" | "Development" | "Back-End" | "Marketing";
  completion: number;
};

const avatars = {
  one: "/images/avatars/avatar-1.png",
  two: "/images/avatars/avatar-2.png",
  three: "/images/avatars/avatar-3.png",
  four: "/images/avatars/avatar-4.png",
  five: "/images/avatars/avatar-5.png",
};

export const projects: Project[] = [
  {
    id: 1,
    name: "Material Figma Version",
    logo: "/images/projects/figma.svg",
    members: [
      avatars.one,
      avatars.two,
      avatars.three,
      avatars.four,
      avatars.five,
    ],
    budget: "$14,000",
    team: "Design",
    completion: 50,
  },
  {
    id: 2,
    name: "Add Progress Track",
    logo: "/images/projects/github.svg",
    members: [
      avatars.one,
      avatars.two,
      avatars.three,
      avatars.four,
      avatars.five,
    ],
    budget: "$3,000",
    team: "Development",
    completion: 10,
  },
  {
    id: 3,
    name: "Fix Platform Errors",
    logo: "/images/projects/discord.svg",
    members: [
      avatars.one,
      avatars.two,
      avatars.three,
      avatars.four,
    ],
    budget: "$20,000",
    team: "Back-End",
    completion: 50,
  },
  {
    id: 4,
    name: "Launch Mobile App",
    logo: "/images/projects/github.svg",
    members: [
      avatars.one,
      avatars.two,
      avatars.three,
      avatars.four,
      avatars.five,
    ],
    budget: "$5,000",
    team: "Design",
    completion: 50,
  },
  {
    id: 5,
    name: "New Pricing Page",
    logo: "/images/projects/signal.svg",
    members: [
      avatars.one,
      avatars.two,
      avatars.three,
      avatars.four,
      avatars.five,
    ],
    budget: "$2,000",
    team: "Marketing",
    completion: 50,
  },
];
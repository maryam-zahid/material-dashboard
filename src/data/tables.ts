export type AuthorStatus = "Online" | "Offline";

export type Author = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: string;
  department: string;
  status: AuthorStatus;
  employed: string;
};

export type TableProjectStatus = "Working" | "Done";

export type TableProject = {
  id: number;
  name: string;
  budget: string;
  status: TableProjectStatus;
  completion: number;
  icon: "swatch" | "sliders" | "settings" | "mobile" | "tag" | "bag";
  iconBackground: string;
};

export const authors: Author[] = [
  {
    id: 1,
    name: "John Michael",
    email: "john@mail.com",
    avatar: "/images/avatars/avatar-1.png",
    role: "Manager",
    department: "Organization",
    status: "Online",
    employed: "23/04/18",
  },
  {
    id: 2,
    name: "Emma Roberts",
    email: "emma@mail.com",
    avatar: "/images/avatars/avatar-2.png",
    role: "Programator",
    department: "Developer",
    status: "Offline",
    employed: "11/01/19",
  },
  {
    id: 3,
    name: "Laurent Perrier",
    email: "laurent@mail.com",
    avatar: "/images/avatars/avatar-3.png",
    role: "Executive",
    department: "Projects",
    status: "Offline",
    employed: "19/09/17",
  },
  {
    id: 4,
    name: "Michael Levi",
    email: "michael@mail.com",
    avatar: "/images/avatars/avatar-4.png",
    role: "Programator",
    department: "Developer",
    status: "Online",
    employed: "24/12/08",
  },
  {
    id: 5,
    name: "Richard Gran",
    email: "richard@mail.com",
    avatar: "/images/avatars/avatar-5.png",
    role: "Manager",
    department: "Executive",
    status: "Offline",
    employed: "04/10/21",
  },
  {
    id: 6,
    name: "Miriam Eric",
    email: "miriam@mail.com",
    avatar: "/images/avatars/avatar-2.png",
    role: "Programator",
    department: "Developer",
    status: "Offline",
    employed: "14/09/20",
  },
];

export const tableProjects: TableProject[] = [
  {
    id: 1,
    name: "Material XD Version",
    budget: "$14,000",
    status: "Working",
    completion: 50,
    icon: "swatch",
    iconBackground: "#1C1917",
  },
  {
    id: 2,
    name: "Add Progress Track",
    budget: "$3,000",
    status: "Working",
    completion: 50,
    icon: "sliders",
    iconBackground: "#3B82F6",
  },
  {
    id: 3,
    name: "Fix Platform Errors",
    budget: "Not Set",
    status: "Done",
    completion: 50,
    icon: "settings",
    iconBackground: "#EF4444",
  },
  {
    id: 4,
    name: "Launch our Mobile App",
    budget: "$20,500",
    status: "Done",
    completion: 50,
    icon: "mobile",
    iconBackground: "#22C55E",
  },
  {
    id: 5,
    name: "Add the New Pricing Page",
    budget: "$500",
    status: "Working",
    completion: 50,
    icon: "tag",
    iconBackground: "#3B82F6",
  },
  {
    id: 6,
    name: "Redesign New Online Shop",
    budget: "$2,000",
    status: "Working",
    completion: 50,
    icon: "bag",
    iconBackground: "#EC4899",
  },
];
// export type NavigationItem = {
//   label: string;
//   href: string;
//   iconPath: string;
// };

// export const mainNavigation: NavigationItem[] = [
//   {
//     label: "Dashboard",
//     href: "/dashboard",
//     iconPath: "/icons/sidebar/dashboard-icon.svg",
//   },
//   {
//     label: "Profile",
//     href: "/profile",
//     iconPath: "/icons/sidebar/profile-icon.svg",
//   },
//   {
//     label: "Tables",
//     href: "/tables",
//     iconPath: "/icons/sidebar/tables-icon.svg",
//   },
//   {
//     label: "Notifications",
//     href: "/notifications",
//     iconPath: "/icons/sidebar/notifications-icon.svg",
//   },
//   {
//     label: "Subscriptions",
//     href: "/subscriptions",
//     iconPath: "/icons/sidebar/subscriptions-icon.svg",
//   },
// ];

// export const authNavigation: NavigationItem[] = [
//   {
//     label: "Sign In",
//     href: "/sign-in",
//     iconPath: "/icons/sidebar/sign-in-icon.svg",
//   },
//   {
//     label: "Sign Up",
//     href: "/sign-up",
//     iconPath: "/icons/sidebar/sign-up-icon.svg",
//   },
// ];

// export const documentationNavigation: NavigationItem = {
//   label: "Documentation",
//   href: "/documentation",
//   iconPath: "/icons/sidebar/documentation-icon.svg",
// };

export type NavigationItem = {
  label: string;
  href: string;
  iconPath: string;
};

export const mainNavigation: NavigationItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    iconPath: "/icons/sidebar/dashboard-icon.svg",
  },
  {
    label: "Profile",
    href: "/dashboard/profile",
    iconPath: "/icons/sidebar/profile-icon.svg",
  },
  {
    label: "Tables",
    href: "/dashboard/tables",
    iconPath: "/icons/sidebar/tables-icon.svg",
  },
  {
    label: "Notifications",
    href: "/dashboard/notifications",
    iconPath: "/icons/sidebar/notifications-icon.svg",
  },
  {
    label: "Subscriptions",
    href: "/dashboard/subscriptions",
    iconPath: "/icons/sidebar/subscriptions-icon.svg",
  },
];

export const authNavigation: NavigationItem[] = [
  {
    label: "Sign In",
    href: "/sign-in",
    iconPath: "/icons/sidebar/sign-in-icon.svg",
  },
  {
    label: "Sign Up",
    href: "/sign-up",
    iconPath: "/icons/sidebar/sign-up-icon.svg",
  },
];

export const documentationNavigation: NavigationItem = {
  label: "Documentation",
  href: "/documentation",
  iconPath: "/icons/sidebar/documentation-icon.svg",
};
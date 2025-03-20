import {
  ActiveCircle,
  ChatActiveIcon,
  ChatIcon,
  CompletesCircle,
  ContactActiveIcon,
  ContactsIcon,
  DashboardActiveIcon,
  DashboardIcon,
  DealsActiveIcon,
  DealsIcon,
  EmailActiveIcon,
  EmailIcon,
  EndedCircle,
  ScheduleCircle,
  TasksActiveIcon,
  TasksIcon,
} from "../assets";

export const navbarPath = [
  {
    title: "Dashboard",
    icon: DashboardIcon,
    activeIcon: DashboardActiveIcon,
    href: "/",
  },
  {
    title: "Tasks",
    icon: TasksIcon,
    activeIcon: TasksActiveIcon,
    href: "/tasks",
    children: [
      {
        title: "Active",
        icon: ActiveCircle,
        href: "/tasks/active",
      },
      {
        title: "Completed",
        icon: CompletesCircle,
        href: "/tasks/completed",
      },
      {
        title: "Ended",
        icon: EndedCircle,
        href: "/tasks/ended",
      },
    ],
  },
  {
    title: "Email",
    icon: EmailIcon,
    activeIcon: EmailActiveIcon,
    href: "/email",
    children: [
      {
        title: "Draft",
        icon: ActiveCircle,
        href: "/email/draft",
      },
      {
        title: "Schedule",
        icon: ScheduleCircle,
        href: "/email/schedule",
      },
      {
        title: "Sent",
        icon: CompletesCircle,
        href: "/email/sent",
      },
      {
        title: "Archived",
        icon: EndedCircle,
        href: "/email/archived",
      },
    ],
  },
  {
    title: "Contact",
    icon: ContactsIcon,
    activeIcon: ContactActiveIcon,
    href: "/contact",
  },
  {
    title: "Chat",
    icon: ChatIcon,
    activeIcon: ChatActiveIcon,
    href: "/chat",
  },
  {
    title: "Deals",
    icon: DealsIcon,
    activeIcon: DealsActiveIcon,
    href: "/deals",
    children: [
      {
        title: "Low",
        icon: ActiveCircle,
        href: "/deals/low",
      },
      {
        title: "High",
        icon: CompletesCircle,
        href: "/deals/high",
      },
      {
        title: "Urgent",
        icon: EndedCircle,
        href: "/deals/urgent",
      },
    ],
  },
];

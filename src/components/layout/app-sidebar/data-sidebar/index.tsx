import type { DataSidebar } from "@/types/app-sidebar";
import {
  BugIcon,
  ChartPieIcon,
  CloudAlertIcon,
  ConstructionIcon,
  GalleryVerticalEnd,
  LockIcon,
  ServerCrashIcon,
  UserIcon,
  UserXIcon,
} from "lucide-react";

export const dataUser = {
  name: "shadcn",
  email: "m@example.com",
  avatar: "/avatars/shadcn.jpg",
};

export const dataTeams = [
  {
    name: "Acme Inc",
    logo: GalleryVerticalEnd,
    plan: "Enterprise",
  },
];

export const dataSidebar: DataSidebar[] = [
  {
    group: "General",
    items: [
      {
        title: "Examples",
        url: "/app/examples",
        icon: ChartPieIcon,
      },
    ],
  },
  {
    group: "Pages",
    items: [
      {
        title: "Errors",
        icon: BugIcon,
        items: [
          {
            title: "Unauthorized",
            url: "/401",
            icon: LockIcon,
          },
          {
            title: "Forbidden",
            url: "/403",
            icon: UserXIcon,
          },
          {
            title: "Not Found",
            url: "/404",
            icon: CloudAlertIcon,
          },
          {
            title: "Internal Server Error",
            url: "/500",
            icon: ServerCrashIcon,
          },
          {
            title: "Maintenance Error",
            url: "/503",
            icon: ConstructionIcon,
          },
        ],
      },
      {
        title: "Auth",
        icon: UserIcon,
        items: [
          {
            title: "Login",
            icon: LockIcon,
            url: "/app/auth/login",
          },
        ],
      },
    ],
  },
];

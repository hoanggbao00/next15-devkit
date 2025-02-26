import type { DataSidebar } from "@/types/app-sidebar";
import {
  BookOpen,
  Bot,
  GalleryVerticalEnd,
  History,
  Settings2,
  Star,
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
    title: "History",
    icon: History,
    url: "#",
  },
  {
    title: "Starred",
    url: "#",
    icon: Star,
  },
  {
    title: "Models",
    url: "#",
    icon: Bot,
    items: [
      {
        title: "Genesis",
        url: "#",
      },
      {
        title: "Explorer",
        url: "#",
      },
      {
        title: "Quantum",
        url: "#",
      },
    ],
  },
  {
    title: "Documentation",
    url: "#",
    icon: BookOpen,
    items: [
      {
        title: "Introduction",
        url: "#",
      },
      {
        title: "Get Started",
        url: "#",
      },
      {
        title: "Tutorials",
        url: "#",
      },
      {
        title: "Changelog",
        url: "#",
      },
    ],
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings2,
    items: [
      {
        title: "General",
        url: "#",
      },
      {
        title: "Team",
        url: "#",
      },
      {
        title: "Billing",
        url: "#",
      },
      {
        title: "Limits",
        url: "#",
      },
    ],
  },
];

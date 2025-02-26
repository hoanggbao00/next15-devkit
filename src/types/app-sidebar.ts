export interface DataSidebarItemBase {
  title: string;
  icon?: React.ElementType;
}

export type DataSidebarItemNoSubMenu = DataSidebarItemBase & {
  url: string;
  items?: undefined;
};

export type DataSidebarItemWithSubMenu = DataSidebarItemBase & {
  url?: undefined;
  items: DataSidebarItemNoSubMenu[];
};

export type DataSidebarItem =
  | DataSidebarItemNoSubMenu
  | DataSidebarItemWithSubMenu;

export interface DataSidebar {
  group: string;
  items: DataSidebarItem[];
}

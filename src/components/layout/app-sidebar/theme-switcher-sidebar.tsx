"use client";

import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../../ui/button";
import { useSidebar } from "../../ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";

function ThemeSwitcherSidebar() {
  const { theme, setTheme } = useTheme();
  const { isMobile, open } = useSidebar();

  const handleChangeTheme = async () => {
    if ("startViewTransition" in document) {
      await document.startViewTransition(() => {
        changeTheme();
      }).ready;
    } else {
      changeTheme();
    }
  };

  const changeTheme = () => {
    if (theme === "system") return setTheme("light");
    if (theme === "light") return setTheme("dark");
    if (theme === "dark") return setTheme("system");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size={open ? "default" : "icon"}
            onClick={handleChangeTheme}
            className={
              !open && !isMobile ? "size-8" : "w-full justify-start px-2"
            }
          >
            {theme === "system" && <Laptop className="size-4" />}
            {theme === "light" && <Sun className="size-4" />}
            {theme === "dark" && <Moon className="size-4" />}
            {(open || isMobile) && (
              <span className="text-xs">
                {theme === "dark" && "Dark Mode"}
                {theme === "light" && "Light Mode"}
                {theme === "system" && "System"}
              </span>
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent side={open ? "top" : "right"}>
          Toggle Theme
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default ThemeSwitcherSidebar;

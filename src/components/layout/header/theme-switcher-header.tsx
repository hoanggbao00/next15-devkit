import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { CheckIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback } from "react";

export const ThemeSwitcherHeader = () => {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = useCallback(
    async (newTheme: "light" | "dark" | "system") => {
      if ("startViewTransition" in document) {
        await document.startViewTransition(() => {
          setTheme(newTheme);
        }).ready;
      } else {
        setTheme(newTheme);
      }
    },
    [setTheme],
  );

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="scale-95 rounded-full">
          <SunIcon className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleChangeTheme("light")}>
          Light{" "}
          <CheckIcon
            size={14}
            className={cn("ml-auto", theme !== "light" && "hidden")}
          />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChangeTheme("dark")}>
          Dark
          <CheckIcon
            size={14}
            className={cn("ml-auto", theme !== "dark" && "hidden")}
          />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChangeTheme("system")}>
          System
          <CheckIcon
            size={14}
            className={cn("ml-auto", theme !== "system" && "hidden")}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

import { CommandGroup, CommandItem } from "@/components/ui/command";
import { LaptopIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

interface CommandThemeGroupProps {
  runCommand: (command: () => void) => void;
}

export default function CommandThemeGroup({
  runCommand,
}: CommandThemeGroupProps) {
  const { setTheme } = useTheme();

  return (
    <CommandGroup heading="Theme">
      <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
        <SunIcon /> <span>Light</span>
      </CommandItem>
      <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
        <MoonIcon className="scale-90" />
        <span>Dark</span>
      </CommandItem>
      <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
        <LaptopIcon />
        <span>System</span>
      </CommandItem>
    </CommandGroup>
  );
}

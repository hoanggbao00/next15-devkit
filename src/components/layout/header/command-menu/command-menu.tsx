import { useSearchContext } from "@/components/providers/search-provider";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "nextjs-toploader/app";
import React from "react";
import { dataSidebar } from "../../app-sidebar/data-sidebar";
import CommandThemeGroup from "./command-theme";

export function CommandMenu() {
  const router = useRouter();
  const { open, setOpen } = useSearchContext();

  const runCommand = React.useCallback(
    (command: () => unknown) => {
      setOpen(false);
      command();
    },
    [setOpen],
  );

  return (
    <CommandDialog modal open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <ScrollArea type="hover" className="h-72 pr-1">
          <CommandEmpty>No results found.</CommandEmpty>
          {dataSidebar.map((group) =>
            group.items ? (
              <CommandGroup key={group.title} heading={group.title}>
                {group.items?.map((navItem, i) => {
                  if (navItem.url)
                    return (
                      <CommandItem
                        key={`${navItem.url}-${i}`}
                        value={`${group.title} ${navItem.title}`}
                        onSelect={() => router.push(navItem.url)}
                        className="capitalize"
                      >
                        {/* {navItem.icon && <navItem.icon />} */}
                        {navItem.title}
                      </CommandItem>
                    );

                  return navItem.items?.map((subItem, i) => (
                    <CommandItem
                      key={`${subItem.url}-${i}`}
                      value={subItem.title}
                      onSelect={() => router.push(subItem.url)}
                    >
                      {/* {subItem.icon && <subItem.icon />} */}
                      {subItem.title}
                    </CommandItem>
                  ));
                })}
              </CommandGroup>
            ) : (
              <CommandGroup key={group.title}>
                <CommandItem
                  value={group.title}
                  onSelect={() => router.push(group.url)}
                >
                  {/* {group.icon && <group.icon />} */}
                  {group.title}
                </CommandItem>
              </CommandGroup>
            ),
          )}
          <CommandSeparator />
          <CommandThemeGroup runCommand={runCommand} />
          <CommandSeparator />
          <CommandGroup heading="Flags">
            <CommandItem value="header1" onSelect={() => router.replace("?")}>
              Switch to Header 1
            </CommandItem>
          </CommandGroup>
        </ScrollArea>
      </CommandList>
    </CommandDialog>
  );
}

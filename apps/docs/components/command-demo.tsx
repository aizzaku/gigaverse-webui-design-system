'use client'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@gigaverse/ui'

export function CommandDemo() {
  return (
    <Command className="max-w-md">
      <CommandInput placeholder="SEARCH ACTIONS..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="GENERAL">
          <CommandItem>
            Open inventory
            <CommandShortcut>⌘I</CommandShortcut>
          </CommandItem>
          <CommandItem>
            Enter dungeon
            <CommandShortcut>⌘D</CommandShortcut>
          </CommandItem>
          <CommandItem>
            Open market
            <CommandShortcut>⌘M</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="ACCOUNT">
          <CommandItem>Change faction</CommandItem>
          <CommandItem>Sign out</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}

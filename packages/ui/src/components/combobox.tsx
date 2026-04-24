'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '../lib/cn'
import { Button } from './button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './command'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

export interface ComboboxOption {
  value: string
  label: string
  keywords?: string[]
  disabled?: boolean
}

export interface ComboboxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: ComboboxOption[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyLabel?: string
  /** Optional trigger text when nothing is selected. Defaults to `placeholder`. */
  triggerLabel?: string
  disabled?: boolean
  /** Width of the trigger button. Popover content matches it. */
  width?: number | string
}

export const Combobox = React.forwardRef<HTMLButtonElement, ComboboxProps>(
  (
    {
      className,
      options,
      value: controlled,
      defaultValue,
      onChange,
      placeholder = 'Select an option…',
      searchPlaceholder = 'Search…',
      emptyLabel = 'No results.',
      triggerLabel,
      disabled,
      width = 240,
      ...rest
    },
    ref,
  ) => {
    const [uncontrolled, setUncontrolled] = React.useState<string>(defaultValue ?? '')
    const [open, setOpen] = React.useState(false)

    const value = controlled !== undefined ? controlled : uncontrolled
    const setValue = (next: string) => {
      if (controlled === undefined) setUncontrolled(next)
      onChange?.(next)
    }

    const selected = options.find((o) => o.value === value)

    return (
      <div className={cn('inline-block', className)} {...rest}>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              ref={ref}
              variant="secondary"
              disabled={disabled}
              aria-expanded={open}
              role="combobox"
              className="justify-between gap-3 normal-case"
              style={{ width }}
            >
              <span className={cn(!selected && 'text-giga-muted')}>
                {selected ? selected.label : (triggerLabel ?? placeholder)}
              </span>
              <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-60" aria-hidden="true" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0" style={{ width }}>
            <Command>
              <CommandInput placeholder={searchPlaceholder} />
              <CommandList>
                <CommandEmpty>{emptyLabel}</CommandEmpty>
                <CommandGroup>
                  {options.map((opt) => (
                    <CommandItem
                      key={opt.value}
                      value={opt.value}
                      keywords={opt.keywords}
                      disabled={opt.disabled}
                      onSelect={(v) => {
                        setValue(v === value ? '' : v)
                        setOpen(false)
                      }}
                    >
                      <Check
                        className={cn(
                          'mr-2 h-4 w-4',
                          value === opt.value ? 'opacity-100 text-giga-cyan' : 'opacity-0',
                        )}
                        aria-hidden="true"
                      />
                      {opt.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    )
  },
)
Combobox.displayName = 'Combobox'

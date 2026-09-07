'use client';

import * as React from 'react';

import { Select as SelectPrimitive } from '@base-ui/react/select';
import { CheckIcon, ChevronDownIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

const Select = SelectPrimitive.Root;

/* -------------------------------------------------------------------------- */
/* Select Group                                                               */
/* -------------------------------------------------------------------------- */

function SelectGroup({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return (
    <SelectPrimitive.Group
      data-slot='select-group'
      className={cn('p-0', className)}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Select Value                                                               */
/* -------------------------------------------------------------------------- */

function SelectValue({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return (
    <SelectPrimitive.Value
      data-slot='select-value'
      className={cn('flex flex-1 text-left', className)}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Select Trigger                                                             */
/* -------------------------------------------------------------------------- */

type SelectTriggerProps = React.ComponentProps<
  typeof SelectPrimitive.Trigger
> & {
  size?: 'sm' | 'default';
};

function SelectTrigger({
  className,
  size = 'default',
  children,
  ...props
}: SelectTriggerProps) {
  return (
    <SelectPrimitive.Trigger
      data-slot='select-trigger'
      data-size={size}
      className={cn(
        'flex w-full items-center justify-between gap-1.5',
        'rounded-lg border border-input',
        'bg-transparent',
        'py-2 pr-2.5 pl-2.5',
        'text-sm whitespace-nowrap',
        'transition-colors',
        'outline-none select-none',

        'data-[size=default]:h-9',
        'data-[size=sm]:h-8',
        'data-[size=sm]:rounded-[min(var(--radius-md),10px)]',

        'focus-visible:border-ring',
        'focus-visible:ring-3',
        'focus-visible:ring-ring/50',

        'disabled:cursor-not-allowed',
        'disabled:opacity-50',

        'aria-invalid:border-destructive',
        'aria-invalid:ring-3',
        'aria-invalid:ring-destructive/20',

        'data-placeholder:text-muted-foreground',

        '*:data-[slot=select-value]:line-clamp-1',
        '*:data-[slot=select-value]:flex',
        '*:data-[slot=select-value]:items-center',

        'dark:bg-input/30',
        'dark:hover:bg-input/50',
        'dark:aria-invalid:border-destructive/50',
        'dark:aria-invalid:ring-destructive/40',

        '[&_svg]:pointer-events-none',
        '[&_svg]:shrink-0',
        "[&_svg:not([class*='size-'])]:size-4",

        className,
      )}
      {...props}
    >
      {children}

      <SelectPrimitive.Icon
        render={
          <ChevronDownIcon className='pointer-events-none size-4 text-muted-foreground' />
        }
      />
    </SelectPrimitive.Trigger>
  );
}

/* -------------------------------------------------------------------------- */
/* Select Content                                                             */
/* -------------------------------------------------------------------------- */

type SelectContentProps = React.ComponentProps<typeof SelectPrimitive.Popup> & {
  align?: React.ComponentProps<typeof SelectPrimitive.Positioner>['align'];

  alignOffset?: React.ComponentProps<
    typeof SelectPrimitive.Positioner
  >['alignOffset'];

  side?: React.ComponentProps<typeof SelectPrimitive.Positioner>['side'];

  sideOffset?: React.ComponentProps<
    typeof SelectPrimitive.Positioner
  >['sideOffset'];

  alignItemWithTrigger?: React.ComponentProps<
    typeof SelectPrimitive.Positioner
  >['alignItemWithTrigger'];
};

function SelectContent({
  className,
  children,
  side = 'bottom',

  // IMPORTANT:
  // No gap between trigger and popup.
  sideOffset = 0,

  align = 'center',
  alignOffset = 0,
  alignItemWithTrigger = true,

  ...props
}: SelectContentProps) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        alignItemWithTrigger={alignItemWithTrigger}
        className='z-50'
      >
        <SelectPrimitive.Popup
          data-slot='select-content'
          data-align-trigger={alignItemWithTrigger}
          className={cn(
            // Position
            'relative z-50',

            // Width / height
            'w-(--anchor-width)',
            'min-w-36',
            'max-h-(--available-height)',

            // Remove all unwanted spacing
            'm-0',
            'p-0',

            // Overflow
            'overflow-x-hidden',
            'overflow-y-auto',

            // Appearance
            'rounded-lg',
            'border',
            'border-border',
            'bg-popover',
            'text-popover-foreground',
            'shadow-md',

            // Animation
            'origin-(--transform-origin)',
            'duration-100',

            'data-open:animate-in',
            'data-open:fade-in-0',
            'data-open:zoom-in-95',

            'data-closed:animate-out',
            'data-closed:fade-out-0',
            'data-closed:zoom-out-95',

            className,
          )}
          {...props}
        >
          <SelectPrimitive.List className='m-0 p-0'>
            {children}
          </SelectPrimitive.List>
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
}

/* -------------------------------------------------------------------------- */
/* Select Label                                                               */
/* -------------------------------------------------------------------------- */

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.GroupLabel>) {
  return (
    <SelectPrimitive.GroupLabel
      data-slot='select-label'
      className={cn('px-2 py-1', 'text-xs text-muted-foreground', className)}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Select Item                                                                */
/* -------------------------------------------------------------------------- */

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot='select-item'
      className={cn(
        'relative flex w-full items-center',

        // Compact spacing
        'min-h-8',
        'py-1',
        'pr-8',
        'pl-2',

        // No unwanted margins
        'm-0',

        // Shape
        'rounded-md',

        // Text
        'text-sm',
        'whitespace-nowrap',

        // Interaction
        'cursor-default',
        'outline-none',
        'select-none',

        // Focus
        'focus:bg-accent',
        'focus:text-accent-foreground',

        // Disabled
        'data-disabled:pointer-events-none',
        'data-disabled:opacity-50',

        // Icons
        '[&_svg]:pointer-events-none',
        '[&_svg]:shrink-0',
        "[&_svg:not([class*='size-'])]:size-4",

        className,
      )}
      {...props}
    >
      <SelectPrimitive.ItemText className='flex flex-1 whitespace-nowrap'>
        {children}
      </SelectPrimitive.ItemText>

      <SelectPrimitive.ItemIndicator
        render={
          <span
            className='
              pointer-events-none
              absolute
              right-2
              flex
              size-4
              items-center
              justify-center
            '
          />
        }
      >
        <CheckIcon className='size-4' />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
}

/* -------------------------------------------------------------------------- */
/* Select Separator                                                           */
/* -------------------------------------------------------------------------- */

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot='select-separator'
      className={cn('my-1 h-px bg-border', className)}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};

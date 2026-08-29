'use client';

import Link from 'next/link';

import { Eye, MoreHorizontal, Pencil, UserX } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface GuestActionsProps {
  guestId: string;
}

export default function GuestActions({ guestId }: GuestActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className='inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-transparent p-0 text-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
        aria-label='Open guest actions'
      >
        <MoreHorizontal className='size-4' />
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end' className='w-44'>
        <DropdownMenuItem>
          <Link
            href={`/admin/guests/${guestId}`}
            className='flex w-full items-center gap-2'
          >
            <Eye className='size-4 shrink-0' />
            <span>View Guest</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link
            href={`/admin/guests/${guestId}/edit`}
            className='flex w-full items-center gap-2'
          >
            <Pencil className='size-4 shrink-0' />
            <span>Edit Guest</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className='flex items-center gap-2 text-destructive focus:text-destructive'>
          <UserX className='size-4 shrink-0' />
          <span>Deactivate</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

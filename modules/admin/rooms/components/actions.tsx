'use client';

import Link from 'next/link';
import { Eye, MoreHorizontal, Pencil, Trash2 } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface RoomActionsProps {
  roomId: string;
}

export default function RoomActions({ roomId }: RoomActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className='inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-transparent p-0 text-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
        aria-label='Open room actions'
      >
        <MoreHorizontal className='size-4 shrink-0' />
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end' className='w-44'>
        <DropdownMenuItem>
          <Link
            href={`/admin/rooms/${roomId}`}
            className='flex w-full items-center gap-2'
          >
            <Eye className='size-4 shrink-0' />
            <span>View Room</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link
            href={`/admin/rooms/${roomId}/edit`}
            className='flex w-full items-center gap-2'
          >
            <Pencil className='size-4 shrink-0' />
            <span>Edit Room</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className='flex items-center gap-2 text-destructive focus:text-destructive'>
          <Trash2 className='size-4 shrink-0' />

          <span>Delete Room</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

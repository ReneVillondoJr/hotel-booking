'use client';

import { Eye, MoreHorizontal, Pencil, RefreshCw } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import type { Booking } from '../types/booking';

interface BookingActionsProps {
  booking: Booking;
  onView?: (booking: Booking) => void;
  onEdit?: (booking: Booking) => void;
  onRefresh?: () => void;
}

export function BookingActions({
  booking,
  onView,
  onEdit,
  onRefresh,
}: BookingActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        type='button'
        className='inline-flex size-8 items-center justify-center rounded-md border border-transparent hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring'
        aria-label={`Actions for ${booking.bookingNumber}`}
      >
        <MoreHorizontal className='size-4' />
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end' className='w-40'>
        <DropdownMenuItem onClick={() => onView?.(booking)}>
          <Eye className='size-4' />
          View
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => onEdit?.(booking)}>
          <Pencil className='size-4' />
          Edit
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={onRefresh}>
          <RefreshCw className='size-4' />
          Refresh
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

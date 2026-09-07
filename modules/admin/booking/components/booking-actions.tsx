'use client';

import { useState } from 'react';

import { Eye, MoreHorizontal, Pencil, RefreshCw, Trash2 } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import type { Booking } from '../types/booking';

import { BookingEditDialog } from './booking-edit-dialog';
import { BookingViewDialog } from './booking-view-dialog';

interface BookingActionsProps {
  booking: Booking;

  onRefresh?: () => void;

  onSave?: (booking: Booking) => void;

  onDelete?: (booking: Booking) => void;
}

export function BookingActions({
  booking,
  onRefresh,
  onSave,
  onDelete,
}: BookingActionsProps) {
  const [viewOpen, setViewOpen] = useState(false);

  const [editOpen, setEditOpen] = useState(false);

  function handleView() {
    setViewOpen(true);
  }

  function handleEdit() {
    setEditOpen(true);
  }

  function handleSave(updatedBooking: Booking) {
    onSave?.(updatedBooking);

    setEditOpen(false);
  }

  function handleDelete() {
    onDelete?.(booking);
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          type='button'
          className='
            inline-flex size-8
            items-center justify-center
            rounded-md
            border border-transparent
            hover:bg-muted
            focus:outline-none
            focus:ring-2
            focus:ring-ring
          '
          aria-label={`Actions for ${booking.bookingNumber}`}
        >
          <MoreHorizontal className='size-4' />
        </DropdownMenuTrigger>

        <DropdownMenuContent align='end' className='w-44'>
          <DropdownMenuItem onClick={handleView}>
            <Eye className='size-4' />

            <span>View</span>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={handleEdit}>
            <Pencil className='size-4' />

            <span>Edit</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={onRefresh}>
            <RefreshCw className='size-4' />

            <span>Refresh</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            onClick={handleDelete}
            className='
              text-destructive
              focus:bg-destructive/10
              focus:text-destructive
            '
          >
            <Trash2 className='size-4' />

            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <BookingViewDialog
        booking={booking}
        open={viewOpen}
        onOpenChange={setViewOpen}
      />

      <BookingEditDialog
        key={booking.updatedAt}
        booking={booking}
        open={editOpen}
        onOpenChange={setEditOpen}
        onSave={handleSave}
      />
    </>
  );
}

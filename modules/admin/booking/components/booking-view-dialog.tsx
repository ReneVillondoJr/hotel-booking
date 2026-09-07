'use client';

import { CalendarDays, CreditCard, Mail, Phone, User } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { BookingPaymentBadge } from './booking-payment';
import { BookingStatusBadge } from './booking-status-badge';

import type { Booking } from '../types/booking';

interface BookingViewDialogProps {
  booking: Booking;

  open: boolean;

  onOpenChange: (open: boolean) => void;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-PH', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function BookingViewDialog({
  booking,
  open,
  onOpenChange,
}: BookingViewDialogProps) {
  const guestName = `${booking.guest.firstName} ${booking.guest.lastName}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className='
          max-h-[90vh]
          overflow-y-auto
          sm:max-w-2xl
        '
      >
        <DialogHeader>
          <DialogTitle>Booking Details</DialogTitle>

          <DialogDescription>{booking.bookingNumber}</DialogDescription>
        </DialogHeader>

        <div className='space-y-6'>
          {/* Header */}

          <div className='flex flex-col gap-3 rounded-lg border bg-muted/30 p-4 sm:flex-row sm:items-center sm:justify-between'>
            <div>
              <p className='text-xs text-muted-foreground'>Booking Number</p>

              <p className='font-semibold'>{booking.bookingNumber}</p>
            </div>

            <div className='flex flex-wrap gap-2'>
              <BookingStatusBadge status={booking.status} />

              <BookingPaymentBadge status={booking.paymentStatus} />
            </div>
          </div>

          {/* Guest */}

          <section className='space-y-3'>
            <h3 className='text-sm font-semibold'>Guest Information</h3>

            <div className='grid gap-3 sm:grid-cols-2'>
              <div className='flex items-center gap-3 rounded-lg border p-3'>
                <User className='size-4 text-muted-foreground' />

                <div className='min-w-0'>
                  <p className='text-xs text-muted-foreground'>Guest</p>

                  <p className='truncate text-sm font-medium'>{guestName}</p>
                </div>
              </div>

              <div className='flex items-center gap-3 rounded-lg border p-3'>
                <Mail className='size-4 text-muted-foreground' />

                <div className='min-w-0'>
                  <p className='text-xs text-muted-foreground'>Email</p>

                  <p className='truncate text-sm font-medium'>
                    {booking.guest.email}
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-3 rounded-lg border p-3'>
                <Phone className='size-4 text-muted-foreground' />

                <div>
                  <p className='text-xs text-muted-foreground'>
                    Contact Number
                  </p>

                  <p className='text-sm font-medium'>
                    {booking.guest.contactNumber || 'Not provided'}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Room */}

          <section className='space-y-3'>
            <h3 className='text-sm font-semibold'>Stay Information</h3>

            <div className='rounded-lg border'>
              <div className='grid gap-4 p-4 sm:grid-cols-2'>
                <div>
                  <p className='text-xs text-muted-foreground'>Room</p>

                  <p className='text-sm font-medium'>{booking.room.name}</p>
                </div>

                <div>
                  <p className='text-xs text-muted-foreground'>Room Type</p>

                  <p className='text-sm font-medium'>{booking.room.type}</p>
                </div>

                <div>
                  <p className='text-xs text-muted-foreground'>Check-in</p>

                  <p className='flex items-center gap-2 text-sm font-medium'>
                    <CalendarDays className='size-4 text-muted-foreground' />

                    {formatDate(booking.checkIn)}
                  </p>
                </div>

                <div>
                  <p className='text-xs text-muted-foreground'>Check-out</p>

                  <p className='flex items-center gap-2 text-sm font-medium'>
                    <CalendarDays className='size-4 text-muted-foreground' />

                    {formatDate(booking.checkOut)}
                  </p>
                </div>

                <div>
                  <p className='text-xs text-muted-foreground'>Nights</p>

                  <p className='text-sm font-medium'>
                    {booking.nights} {booking.nights === 1 ? 'night' : 'nights'}
                  </p>
                </div>

                <div>
                  <p className='text-xs text-muted-foreground'>Guests</p>

                  <p className='text-sm font-medium'>
                    {booking.guests} {booking.guests === 1 ? 'guest' : 'guests'}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Payment */}

          <section className='space-y-3'>
            <h3 className='text-sm font-semibold'>Payment Summary</h3>

            <div className='rounded-lg border'>
              <div className='space-y-3 p-4'>
                <div className='flex justify-between gap-4 text-sm'>
                  <span className='text-muted-foreground'>Room rate</span>

                  <span>
                    {formatCurrency(booking.room.price)}
                    /night
                  </span>
                </div>

                <div className='flex justify-between gap-4 text-sm'>
                  <span className='text-muted-foreground'>Subtotal</span>

                  <span>{formatCurrency(booking.subtotal)}</span>
                </div>

                {booking.discount > 0 && (
                  <div className='flex justify-between gap-4 text-sm'>
                    <span className='text-muted-foreground'>Discount</span>

                    <span>-{formatCurrency(booking.discount)}</span>
                  </div>
                )}

                <div className='border-t pt-3'>
                  <div className='flex items-center justify-between gap-4'>
                    <div className='flex items-center gap-2'>
                      <CreditCard className='size-4 text-muted-foreground' />

                      <span className='font-semibold'>Total</span>
                    </div>

                    <span className='text-lg font-bold'>
                      {formatCurrency(booking.total)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Created */}

          <div className='text-xs text-muted-foreground'>
            Created {formatDate(booking.createdAt)}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

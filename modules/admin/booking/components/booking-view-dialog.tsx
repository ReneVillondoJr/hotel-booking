'use client';

import { CalendarDays, Mail, Phone, Users } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { Separator } from '@/components/ui/separator';

import { BookingPaymentBadge } from './booking-payment';
import { BookingStatusBadge } from './booking-status-badge';

import type { Booking } from '../types/booking';

interface BookingViewDialogProps {
  booking: Booking | null;
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
  if (!booking) return null;

  const guestName = `${booking.guest.firstName} ${booking.guest.lastName}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-h-[90vh] overflow-y-auto sm:max-w-2xl'>
        <DialogHeader>
          <DialogTitle className='flex items-center gap-2'>
            Booking {booking.bookingNumber}
            <BookingStatusBadge status={booking.status} />
          </DialogTitle>

          <DialogDescription>
            View booking and guest information.
          </DialogDescription>
        </DialogHeader>

        <div className='space-y-6'>
          {/* Guest */}
          <section className='space-y-3'>
            <h3 className='text-sm font-semibold'>Guest Information</h3>

            <div className='grid gap-4 sm:grid-cols-2'>
              <div>
                <p className='text-xs text-muted-foreground'>Guest</p>
                <p className='mt-1 font-medium'>{guestName}</p>
              </div>

              <div>
                <p className='text-xs text-muted-foreground'>Email</p>
                <div className='mt-1 flex items-center gap-2'>
                  <Mail className='size-4 text-muted-foreground' />
                  <span className='text-sm'>{booking.guest.email}</span>
                </div>
              </div>

              {booking.guest.contactNumber && (
                <div>
                  <p className='text-xs text-muted-foreground'>
                    Contact Number
                  </p>
                  <div className='mt-1 flex items-center gap-2'>
                    <Phone className='size-4 text-muted-foreground' />
                    <span className='text-sm'>
                      {booking.guest.contactNumber}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </section>

          <Separator />

          {/* Stay */}
          <section className='space-y-3'>
            <h3 className='text-sm font-semibold'>Stay Information</h3>

            <div className='grid gap-4 sm:grid-cols-2'>
              <div>
                <p className='text-xs text-muted-foreground'>Room</p>
                <p className='mt-1 font-medium'>{booking.room.name}</p>
                <p className='text-xs text-muted-foreground'>
                  {booking.room.type}
                </p>
              </div>

              <div>
                <p className='text-xs text-muted-foreground'>Guests</p>
                <div className='mt-1 flex items-center gap-2'>
                  <Users className='size-4 text-muted-foreground' />
                  <span className='text-sm'>
                    {booking.guests} {booking.guests === 1 ? 'guest' : 'guests'}
                  </span>
                </div>
              </div>

              <div>
                <p className='text-xs text-muted-foreground'>Check-in</p>
                <div className='mt-1 flex items-center gap-2'>
                  <CalendarDays className='size-4 text-muted-foreground' />
                  <span className='text-sm'>{formatDate(booking.checkIn)}</span>
                </div>
              </div>

              <div>
                <p className='text-xs text-muted-foreground'>Check-out</p>
                <div className='mt-1 flex items-center gap-2'>
                  <CalendarDays className='size-4 text-muted-foreground' />
                  <span className='text-sm'>
                    {formatDate(booking.checkOut)}
                  </span>
                </div>
              </div>

              <div>
                <p className='text-xs text-muted-foreground'>Nights</p>
                <p className='mt-1 text-sm'>
                  {booking.nights} {booking.nights === 1 ? 'night' : 'nights'}
                </p>
              </div>

              <div>
                <p className='text-xs text-muted-foreground'>Booking Source</p>
                <p className='mt-1 text-sm'>{booking.source}</p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Payment */}
          <section className='space-y-3'>
            <div className='flex items-center justify-between'>
              <h3 className='text-sm font-semibold'>Payment Summary</h3>

              <BookingPaymentBadge status={booking.paymentStatus} />
            </div>

            <div className='space-y-2 rounded-lg border p-4'>
              <div className='flex justify-between text-sm'>
                <span className='text-muted-foreground'>Room rate</span>
                <span>{formatCurrency(booking.roomRate)}</span>
              </div>

              <div className='flex justify-between text-sm'>
                <span className='text-muted-foreground'>Subtotal</span>
                <span>{formatCurrency(booking.subtotal)}</span>
              </div>

              <div className='flex justify-between text-sm'>
                <span className='text-muted-foreground'>Tax</span>
                <span>{formatCurrency(booking.tax)}</span>
              </div>

              {booking.discount > 0 && (
                <div className='flex justify-between text-sm'>
                  <span className='text-muted-foreground'>Discount</span>
                  <span>-{formatCurrency(booking.discount)}</span>
                </div>
              )}

              <Separator />

              <div className='flex justify-between'>
                <span className='font-semibold'>Total</span>
                <span className='text-lg font-semibold'>
                  {formatCurrency(booking.total)}
                </span>
              </div>
            </div>
          </section>

          {/* Special request */}
          {booking.specialRequests && (
            <>
              <Separator />

              <section className='space-y-2'>
                <h3 className='text-sm font-semibold'>Special Requests</h3>

                <p className='rounded-lg bg-muted/50 p-3 text-sm text-muted-foreground'>
                  {booking.specialRequests}
                </p>
              </section>
            </>
          )}

          {/* Notes */}
          {booking.notes && (
            <section className='space-y-2'>
              <h3 className='text-sm font-semibold'>Notes</h3>

              <p className='rounded-lg bg-muted/50 p-3 text-sm text-muted-foreground'>
                {booking.notes}
              </p>
            </section>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

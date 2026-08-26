import { format } from 'date-fns';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import type { BookingRoom } from '../types/booking';

interface BookingSummaryProps {
  room: BookingRoom;
  checkIn: Date | undefined;
  checkOut: Date | undefined;
  guests: number;
  nights: number;
  roomTotal: number;
}

export default function BookingSummary({
  room,
  checkIn,
  checkOut,
  guests,
  nights,
  roomTotal,
}: BookingSummaryProps) {
  return (
    <aside className='h-fit rounded-2xl border bg-card p-6 lg:sticky lg:top-8'>
      <p className='hotel-eyebrow'>Reservation summary</p>

      <h2 className='mt-2 text-2xl font-semibold'>{room.name}</h2>

      <div className='mt-6 space-y-4 text-sm'>
        <div className='flex justify-between gap-4'>
          <span className='text-muted-foreground'>Check in</span>

          <span className='font-medium'>
            {checkIn ? format(checkIn, 'MMM dd, yyyy') : '—'}
          </span>
        </div>

        <div className='flex justify-between gap-4'>
          <span className='text-muted-foreground'>Check out</span>

          <span className='font-medium'>
            {checkOut ? format(checkOut, 'MMM dd, yyyy') : '—'}
          </span>
        </div>

        <div className='flex justify-between gap-4'>
          <span className='text-muted-foreground'>Guests</span>

          <span className='font-medium'>{guests}</span>
        </div>

        <Separator />

        <div className='flex justify-between gap-4'>
          <span className='text-muted-foreground'>Room</span>

          <span className='font-medium'>
            ${room.price} × {nights}
          </span>
        </div>

        <div className='flex justify-between gap-4 text-base'>
          <span className='font-semibold'>Total</span>

          <span className='font-semibold text-primary'>${roomTotal}</span>
        </div>
      </div>

      <Button
        className='mt-6 h-12 w-full rounded-full'
        disabled={!checkIn || !checkOut || nights <= 0}
      >
        Continue to payment
      </Button>

      <p className='mt-3 text-center text-xs text-muted-foreground'>
        You won&apos;t be charged yet.
      </p>
    </aside>
  );
}

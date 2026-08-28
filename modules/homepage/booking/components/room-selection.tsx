import { CalendarDays, Users } from 'lucide-react';
import { format } from 'date-fns';

import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import type { BookingRoom } from '../types/booking';

interface RoomSelectionProps {
  room: BookingRoom;
  checkIn: Date | undefined;
  checkOut: Date | undefined;
  setCheckIn: (date: Date | undefined) => void;
  setCheckOut: (date: Date | undefined) => void;
  guests: number;
  setGuests: (guests: number) => void;
}

export default function RoomSelection({
  room,
  checkIn,
  checkOut,
  setCheckIn,
  setCheckOut,
  guests,
  setGuests,
}: RoomSelectionProps) {
  return (
    <section className='rounded-2xl border bg-card p-6'>
      <div>
        <p className='hotel-eyebrow'>Your room</p>

        <h2 className='mt-2 text-2xl font-semibold'>{room.name}</h2>

        <p className='mt-2 text-sm text-muted-foreground'>{room.description}</p>
      </div>

      <div className='mt-6 grid gap-4 sm:grid-cols-3'>
        {/* Check in */}
        <Popover>
          <PopoverTrigger className='flex min-h-14 w-full items-center gap-3 rounded-xl border px-4 text-left hover:bg-muted'>
            <CalendarDays className='size-5 text-primary' />

            <div>
              <p className='text-xs text-muted-foreground'>Check in</p>

              <p className='text-sm font-medium'>
                {checkIn ? format(checkIn, 'MMM dd, yyyy') : 'Select date'}
              </p>
            </div>
          </PopoverTrigger>

          <PopoverContent className='w-auto p-0'>
            <Calendar mode='single' selected={checkIn} onSelect={setCheckIn} />
          </PopoverContent>
        </Popover>

        {/* Check out */}
        <Popover>
          <PopoverTrigger className='flex min-h-14 w-full items-center gap-3 rounded-xl border px-4 text-left hover:bg-muted'>
            <CalendarDays className='size-5 text-primary' />

            <div>
              <p className='text-xs text-muted-foreground'>Check out</p>

              <p className='text-sm font-medium'>
                {checkOut ? format(checkOut, 'MMM dd, yyyy') : 'Select date'}
              </p>
            </div>
          </PopoverTrigger>

          <PopoverContent className='w-auto p-0'>
            <Calendar
              mode='single'
              selected={checkOut}
              onSelect={setCheckOut}
            />
          </PopoverContent>
        </Popover>

        {/* Guests */}
        <Popover>
          <PopoverTrigger className='flex min-h-14 w-full items-center gap-3 rounded-xl border px-4 text-left hover:bg-muted'>
            <Users className='size-5 text-primary' />

            <div>
              <p className='text-xs text-muted-foreground'>Guests</p>

              <p className='text-sm font-medium'>
                {guests} {guests === 1 ? 'Guest' : 'Guests'}
              </p>
            </div>
          </PopoverTrigger>

          <PopoverContent className='w-64'>
            <div className='flex items-center justify-between'>
              <span className='font-medium'>Guests</span>

              <div className='flex items-center gap-3'>
                <button
                  type='button'
                  className='size-8 rounded-full border'
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                >
                  −
                </button>

                <span className='w-5 text-center'>{guests}</span>

                <button
                  type='button'
                  className='size-8 rounded-full border'
                  onClick={() => setGuests(Math.min(room.guests, guests + 1))}
                >
                  +
                </button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </section>
  );
}

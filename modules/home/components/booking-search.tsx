'use client';

import { useState } from 'react';
import { CalendarDays, Search, Users } from 'lucide-react';
import { format } from 'date-fns';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export default function BookingSearch() {
  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();

  const [guests, setGuests] = useState(2);

  const handleSearch = () => {
    console.log({
      checkIn,
      checkOut,
      guests,
    });
  };

  return (
    <div
      id='booking'
      className='w-full rounded-2xl bg-white p-3 shadow-xl shadow-black/10'
    >
      <div className='grid gap-2 md:grid-cols-[1fr_1fr_1fr_auto]'>
        {/* Check In */}
        <Popover>
          <PopoverTrigger className='flex min-h-16 w-full items-center gap-3 rounded-xl px-4 text-left transition hover:bg-stone-50'>
            <CalendarDays className='size-5 shrink-0 text-primary' />

            <div className='min-w-0'>
              <p className='text-xs font-medium uppercase tracking-wide text-muted-foreground'>
                Check in
              </p>

              <p className='truncate text-sm font-medium text-foreground'>
                {checkIn ? format(checkIn, 'MMM dd, yyyy') : 'Select date'}
              </p>
            </div>
          </PopoverTrigger>

          <PopoverContent align='start' className='w-auto p-0'>
            <Calendar
              mode='single'
              selected={checkIn}
              onSelect={setCheckIn}
              disabled={(date) =>
                date < new Date(new Date().setHours(0, 0, 0, 0))
              }
            />
          </PopoverContent>
        </Popover>

        {/* Check Out */}
        <Popover>
          <PopoverTrigger className='flex min-h-16 w-full items-center gap-3 rounded-xl px-4 text-left transition hover:bg-stone-50'>
            <CalendarDays className='size-5 shrink-0 text-primary' />

            <div className='min-w-0'>
              <p className='text-xs font-medium uppercase tracking-wide text-muted-foreground'>
                Check out
              </p>

              <p className='truncate text-sm font-medium text-foreground'>
                {checkOut ? format(checkOut, 'MMM dd, yyyy') : 'Select date'}
              </p>
            </div>
          </PopoverTrigger>

          <PopoverContent align='start' className='w-auto p-0'>
            <Calendar
              mode='single'
              selected={checkOut}
              onSelect={setCheckOut}
              disabled={(date) => {
                const today = new Date(new Date().setHours(0, 0, 0, 0));

                if (date < today) {
                  return true;
                }

                if (checkIn && date <= checkIn) {
                  return true;
                }

                return false;
              }}
            />
          </PopoverContent>
        </Popover>

        {/* Guests */}
        <Popover>
          <PopoverTrigger className='flex min-h-16 w-full items-center gap-3 rounded-xl px-4 text-left transition hover:bg-stone-50'>
            <Users className='size-5 shrink-0 text-primary' />

            <div className='min-w-0'>
              <p className='text-xs font-medium uppercase tracking-wide text-muted-foreground'>
                Guests
              </p>

              <p className='truncate text-sm font-medium text-foreground'>
                {guests} {guests === 1 ? 'Guest' : 'Guests'}
              </p>
            </div>
          </PopoverTrigger>

          <PopoverContent align='start' className='w-64'>
            <div className='space-y-4'>
              <div>
                <h3 className='font-medium'>Guests</h3>

                <p className='text-sm text-muted-foreground'>
                  Select the number of guests.
                </p>
              </div>

              <div className='flex items-center justify-between'>
                <span className='text-sm font-medium'>Guests</span>

                <div className='flex items-center gap-3'>
                  <Button
                    type='button'
                    variant='outline'
                    size='icon'
                    className='size-8 rounded-full'
                    disabled={guests <= 1}
                    onClick={() =>
                      setGuests((current) => Math.max(1, current - 1))
                    }
                  >
                    −
                  </Button>

                  <span className='w-5 text-center text-sm font-medium'>
                    {guests}
                  </span>

                  <Button
                    type='button'
                    variant='outline'
                    size='icon'
                    className='size-8 rounded-full'
                    disabled={guests >= 10}
                    onClick={() =>
                      setGuests((current) => Math.min(10, current + 1))
                    }
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* Search */}
        <Button
          type='button'
          onClick={handleSearch}
          className='min-h-16 rounded-xl px-7'
        >
          <Search className='size-5' />
          <span>Search</span>
        </Button>
      </div>
    </div>
  );
}

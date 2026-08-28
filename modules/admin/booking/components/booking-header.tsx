import { CalendarPlus } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function BookingHeader() {
  return (
    <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
      <div>
        <h1 className='text-2xl font-semibold tracking-tight'>Bookings</h1>

        <p className='text-sm text-muted-foreground'>
          Manage guest reservations and booking activity.
        </p>
      </div>

      <Button className='rounded-full'>
        <CalendarPlus className='size-4' />
        New Booking
      </Button>
    </div>
  );
}

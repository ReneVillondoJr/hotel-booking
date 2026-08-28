import { CalendarPlus, Download } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function DashboardHeader() {
  return (
    <div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
      <div>
        <p className='text-sm font-medium text-primary'>HOTEL MANAGEMENT</p>

        <h1 className='mt-1 text-3xl font-semibold tracking-tight'>
          Dashboard
        </h1>

        <p className='mt-2 text-sm text-muted-foreground'>
          Monitor bookings, guests, rooms, and hotel performance.
        </p>
      </div>

      <div className='flex flex-wrap gap-2'>
        <Button variant='outline'>
          <Download className='size-4' />
          Export
        </Button>

        <Button>
          <CalendarPlus className='size-4' />
          New Booking
        </Button>
      </div>
    </div>
  );
}

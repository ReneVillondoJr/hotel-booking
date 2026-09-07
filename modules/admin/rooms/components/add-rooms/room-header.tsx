'use client';

import { ArrowLeft, BedDouble } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

export default function RoomHeader() {
  const router = useRouter();

  function handleBack() {
    router.push('/admin/rooms');
  }

  return (
    <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
      <div className='flex items-start gap-3'>
        <Button
          type='button'
          variant='outline'
          size='icon'
          className='mt-0.5 size-9 shrink-0'
          onClick={handleBack}
          aria-label='Back to rooms'
          title='Back to rooms'
        >
          <ArrowLeft className='size-4' />
        </Button>

        <div className='min-w-0'>
          <div className='flex items-center gap-2'>
            <BedDouble className='size-5 shrink-0 text-primary' />

            <h1 className='text-2xl font-semibold tracking-tight'>Add Room</h1>
          </div>

          <p className='mt-1 text-sm text-muted-foreground'>
            Create a new room and configure its details, amenities, pricing, and
            availability.
          </p>
        </div>
      </div>
    </div>
  );
}

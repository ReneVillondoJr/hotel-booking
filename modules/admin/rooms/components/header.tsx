'use client';

import Link from 'next/link';
import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function RoomHeader() {
  return (
    <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
      <div>
        <h1 className='text-2xl font-semibold tracking-tight'>Rooms</h1>

        <p className='mt-1 text-sm text-muted-foreground'>
          Manage your hotel rooms, pricing, and availability.
        </p>
      </div>

      <Link href='/admin/rooms/new'>
        <Button className='gap-2'>
          <Plus className='size-4 shrink-0' />
          <span className='whitespace-nowrap'>Add Room</span>
        </Button>
      </Link>
    </div>
  );
}

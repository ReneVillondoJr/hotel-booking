'use client';

import Link from 'next/link';

import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function GuestHeader() {
  return (
    <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
      <div>
        <h1 className='text-2xl font-semibold tracking-tight'>Guests</h1>

        <p className='mt-1 text-sm text-muted-foreground'>
          Manage guest profiles, accounts, and booking history.
        </p>
      </div>

      <Button className='shrink-0'>
        <Link
          href='/admin/guests/new'
          className='inline-flex items-center justify-center gap-2'
        >
          <Plus className='size-4' />
          <span>Add Guest</span>
        </Link>
      </Button>
    </div>
  );
}

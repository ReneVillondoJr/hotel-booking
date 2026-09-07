import Link from 'next/link';

import { ArrowLeft, UserPlus } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function GuestHeader() {
  return (
    <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
      <div className='flex items-start gap-3'>
        <Link href='/admin/guests'>
          <Button
            type='button'
            variant='outline'
            size='icon'
            aria-label='Back to guests'
          >
            <ArrowLeft className='size-4' />
          </Button>
        </Link>

        <div>
          <div className='flex items-center gap-2'>
            <UserPlus className='size-5 text-muted-foreground' />

            <h1 className='text-2xl font-semibold tracking-tight'>Add Guest</h1>
          </div>

          <p className='mt-1 text-sm text-muted-foreground'>
            Create a new guest profile and account.
          </p>
        </div>
      </div>
    </div>
  );
}

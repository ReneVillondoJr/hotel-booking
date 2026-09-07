'use client';

import { Loader2, Save } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface GuestActionsProps {
  isSubmitting: boolean;
  onCancel: () => void;
}

export default function GuestFormActions({
  isSubmitting,
  onCancel,
}: GuestActionsProps) {
  return (
    <div className='flex flex-col-reverse gap-3 border-t pt-5 sm:flex-row sm:justify-end'>
      <Button
        type='button'
        variant='outline'
        disabled={isSubmitting}
        onClick={onCancel}
      >
        Cancel
      </Button>

      <Button type='submit' disabled={isSubmitting}>
        {isSubmitting ?
          <>
            <Loader2 className='mr-2 size-4 animate-spin' />
            Creating...
          </>
        : <>
            <Save className='mr-2 size-4' />
            Create Guest
          </>
        }
      </Button>
    </div>
  );
}

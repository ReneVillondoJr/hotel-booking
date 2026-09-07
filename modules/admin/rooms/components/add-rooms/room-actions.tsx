'use client';

import { Loader2, Save, X } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface RoomActionsProps {
  isSubmitting: boolean;
  onCancel: () => void;
}

export default function RoomActions({
  isSubmitting,
  onCancel,
}: RoomActionsProps) {
  return (
    <div className='flex flex-col-reverse gap-2 sm:flex-row sm:justify-end'>
      <Button
        type='button'
        variant='outline'
        onClick={onCancel}
        disabled={isSubmitting}
      >
        <X className='mr-2 size-4' />
        Cancel
      </Button>

      <Button type='submit' disabled={isSubmitting}>
        {isSubmitting ?
          <Loader2 className='mr-2 size-4 animate-spin' />
        : <Save className='mr-2 size-4' />}

        {isSubmitting ? 'Creating...' : 'Create Room'}
      </Button>
    </div>
  );
}

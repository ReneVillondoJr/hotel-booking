'use client';

import { RotateCcw, Save } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface SaveBarProps {
  isDirty: boolean;

  onSave: () => void;
  onReset: () => void;
}

export default function SaveBar({ isDirty, onSave, onReset }: SaveBarProps) {
  return (
    <div className='sticky bottom-4 z-20 flex items-center justify-between gap-4 rounded-lg border bg-background p-3 shadow-sm'>
      <p className='text-sm text-muted-foreground'>
        {isDirty ? 'You have unsaved changes.' : 'All changes are saved.'}
      </p>

      <div className='flex items-center gap-2'>
        <Button variant='outline' onClick={onReset} disabled={!isDirty}>
          <RotateCcw className='mr-2 size-4' />
          Reset
        </Button>

        <Button onClick={onSave} disabled={!isDirty}>
          <Save className='mr-2 size-4' />
          Save Changes
        </Button>
      </div>
    </div>
  );
}

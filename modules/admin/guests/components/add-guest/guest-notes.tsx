'use client';

import type { NewGuestFormData } from '../../types/guest';

interface GuestNotesProps {
  notes: string;
  onChange: <K extends keyof NewGuestFormData>(
    field: K,
    value: NewGuestFormData[K],
  ) => void;
}

export default function GuestNotes({ notes, onChange }: GuestNotesProps) {
  return (
    <section className='rounded-xl border bg-card'>
      <div className='border-b px-5 py-4'>
        <h2 className='font-semibold'>Guest Notes</h2>

        <p className='mt-1 text-sm text-muted-foreground'>
          Add preferences or internal notes about this guest.
        </p>
      </div>

      <div className='p-5'>
        <textarea
          id='notes'
          value={notes}
          onChange={(event) => onChange('notes', event.target.value)}
          placeholder='Example: Prefers rooms with ocean views.'
          rows={5}
          className='flex min-h-28 w-full resize-y rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring'
        />
      </div>
    </section>
  );
}

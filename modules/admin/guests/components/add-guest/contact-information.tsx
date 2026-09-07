'use client';

import type { NewGuestFormData } from '../../types/guest';

interface ContactInformationProps {
  email: string;
  phone: string;
  onChange: <K extends keyof NewGuestFormData>(
    field: K,
    value: NewGuestFormData[K],
  ) => void;
}

export default function ContactInformation({
  email,
  phone,
  onChange,
}: ContactInformationProps) {
  return (
    <section className='rounded-xl border bg-card'>
      <div className='border-b px-5 py-4'>
        <h2 className='font-semibold'>Contact Information</h2>

        <p className='mt-1 text-sm text-muted-foreground'>
          Contact details used for reservations and communication.
        </p>
      </div>

      <div className='grid gap-4 p-5 sm:grid-cols-2'>
        <div className='space-y-2'>
          <label htmlFor='email' className='text-sm font-medium'>
            Email Address
          </label>

          <input
            id='email'
            type='email'
            value={email}
            onChange={(event) => onChange('email', event.target.value)}
            placeholder='guest@example.com'
            required
            className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring'
          />
        </div>

        <div className='space-y-2'>
          <label htmlFor='phone' className='text-sm font-medium'>
            Phone Number
          </label>

          <input
            id='phone'
            type='tel'
            value={phone}
            onChange={(event) => onChange('phone', event.target.value)}
            placeholder='+63 917 123 4567'
            required
            className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring'
          />
        </div>
      </div>
    </section>
  );
}

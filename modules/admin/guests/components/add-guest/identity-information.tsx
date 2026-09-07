'use client';

import type { NewGuestFormData } from '../../types/guest';

interface IdentityInformationProps {
  nationality: string;
  idType: string;
  idNumber: string;
  onChange: <K extends keyof NewGuestFormData>(
    field: K,
    value: NewGuestFormData[K],
  ) => void;
}

export default function IdentityInformation({
  nationality,
  idType,
  idNumber,
  onChange,
}: IdentityInformationProps) {
  return (
    <section className='rounded-xl border bg-card'>
      <div className='border-b px-5 py-4'>
        <h2 className='font-semibold'>Identity Information</h2>

        <p className='mt-1 text-sm text-muted-foreground'>
          Identification details for the guest.
        </p>
      </div>

      <div className='grid gap-4 p-5 sm:grid-cols-3'>
        <div className='space-y-2'>
          <label htmlFor='nationality' className='text-sm font-medium'>
            Nationality
          </label>

          <input
            id='nationality'
            value={nationality}
            onChange={(event) => onChange('nationality', event.target.value)}
            placeholder='Filipino'
            className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring'
          />
        </div>

        <div className='space-y-2'>
          <label htmlFor='idType' className='text-sm font-medium'>
            ID Type
          </label>

          <select
            id='idType'
            value={idType}
            onChange={(event) => onChange('idType', event.target.value)}
            className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring'
          >
            <option value='Passport'>Passport</option>

            <option value='Driver License'>Driver License</option>

            <option value='National ID'>National ID</option>

            <option value='Other'>Other</option>
          </select>
        </div>

        <div className='space-y-2'>
          <label htmlFor='idNumber' className='text-sm font-medium'>
            ID Number
          </label>

          <input
            id='idNumber'
            value={idNumber}
            onChange={(event) => onChange('idNumber', event.target.value)}
            placeholder='ID number'
            className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring'
          />
        </div>
      </div>
    </section>
  );
}

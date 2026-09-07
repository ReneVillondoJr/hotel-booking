'use client';

import type { NewGuestFormData } from '../../types/guest';

interface AddressInformationProps {
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  onChange: <K extends keyof NewGuestFormData>(
    field: K,
    value: NewGuestFormData[K],
  ) => void;
}

export default function AddressInformation({
  address,
  city,
  state,
  country,
  postalCode,
  onChange,
}: AddressInformationProps) {
  return (
    <section className='rounded-xl border bg-card'>
      <div className='border-b px-5 py-4'>
        <h2 className='font-semibold'>Address Information</h2>

        <p className='mt-1 text-sm text-muted-foreground'>
          Guest residential address.
        </p>
      </div>

      <div className='grid gap-4 p-5 sm:grid-cols-2'>
        <div className='space-y-2 sm:col-span-2'>
          <label htmlFor='address' className='text-sm font-medium'>
            Address
          </label>

          <input
            id='address'
            value={address}
            onChange={(event) => onChange('address', event.target.value)}
            placeholder='Street address'
            className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring'
          />
        </div>

        <div className='space-y-2'>
          <label htmlFor='city' className='text-sm font-medium'>
            City
          </label>

          <input
            id='city'
            value={city}
            onChange={(event) => onChange('city', event.target.value)}
            placeholder='City'
            className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring'
          />
        </div>

        <div className='space-y-2'>
          <label htmlFor='state' className='text-sm font-medium'>
            State / Province
          </label>

          <input
            id='state'
            value={state}
            onChange={(event) => onChange('state', event.target.value)}
            placeholder='Province'
            className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring'
          />
        </div>

        <div className='space-y-2'>
          <label htmlFor='country' className='text-sm font-medium'>
            Country
          </label>

          <input
            id='country'
            value={country}
            onChange={(event) => onChange('country', event.target.value)}
            placeholder='Country'
            className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring'
          />
        </div>

        <div className='space-y-2'>
          <label htmlFor='postalCode' className='text-sm font-medium'>
            Postal Code
          </label>

          <input
            id='postalCode'
            value={postalCode}
            onChange={(event) => onChange('postalCode', event.target.value)}
            placeholder='9000'
            className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring'
          />
        </div>
      </div>
    </section>
  );
}

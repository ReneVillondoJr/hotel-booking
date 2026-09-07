'use client';

import type { NewGuestFormData } from '../../types/guest';

interface PersonalInformationProps {
  firstName: string;
  lastName: string;
  gender: NewGuestFormData['gender'];
  dateOfBirth: string;
  onChange: <K extends keyof NewGuestFormData>(
    field: K,
    value: NewGuestFormData[K],
  ) => void;
}

export default function PersonalInformation({
  firstName,
  lastName,
  gender,
  dateOfBirth,
  onChange,
}: PersonalInformationProps) {
  return (
    <section className='rounded-xl border bg-card'>
      <div className='border-b px-5 py-4'>
        <h2 className='font-semibold'>Personal Information</h2>

        <p className='mt-1 text-sm text-muted-foreground'>
          Basic information about the guest.
        </p>
      </div>

      <div className='grid gap-4 p-5 sm:grid-cols-2'>
        <div className='space-y-2'>
          <label htmlFor='firstName' className='text-sm font-medium'>
            First Name
          </label>

          <input
            id='firstName'
            value={firstName}
            onChange={(event) => onChange('firstName', event.target.value)}
            placeholder='Enter first name'
            required
            className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring'
          />
        </div>

        <div className='space-y-2'>
          <label htmlFor='lastName' className='text-sm font-medium'>
            Last Name
          </label>

          <input
            id='lastName'
            value={lastName}
            onChange={(event) => onChange('lastName', event.target.value)}
            placeholder='Enter last name'
            required
            className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring'
          />
        </div>

        <div className='space-y-2'>
          <label htmlFor='gender' className='text-sm font-medium'>
            Gender
          </label>

          <select
            id='gender'
            value={gender}
            onChange={(event) =>
              onChange(
                'gender',
                event.target.value as NewGuestFormData['gender'],
              )
            }
            className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring'
          >
            <option value='MALE'>Male</option>
            <option value='FEMALE'>Female</option>
            <option value='OTHER'>Other</option>
          </select>
        </div>

        <div className='space-y-2'>
          <label htmlFor='dateOfBirth' className='text-sm font-medium'>
            Date of Birth
          </label>

          <input
            id='dateOfBirth'
            type='date'
            value={dateOfBirth}
            onChange={(event) => onChange('dateOfBirth', event.target.value)}
            className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring'
          />
        </div>
      </div>
    </section>
  );
}

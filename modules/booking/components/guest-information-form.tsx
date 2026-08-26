import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import type { GuestInformation } from '../types/booking';

interface GuestInformationFormProps {
  guest: GuestInformation;
  updateGuest: (field: keyof GuestInformation, value: string) => void;
}

export default function GuestInformationForm({
  guest,
  updateGuest,
}: GuestInformationFormProps) {
  return (
    <section className='rounded-2xl border bg-card p-6'>
      <div>
        <p className='hotel-eyebrow'>Guest information</p>

        <h2 className='mt-2 text-2xl font-semibold'>Tell us about yourself.</h2>
      </div>

      <div className='mt-6 grid gap-5 sm:grid-cols-2'>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>First name</label>

          <Input
            value={guest.firstName}
            onChange={(event) => updateGuest('firstName', event.target.value)}
            placeholder='John'
          />
        </div>

        <div className='space-y-2'>
          <label className='text-sm font-medium'>Last name</label>

          <Input
            value={guest.lastName}
            onChange={(event) => updateGuest('lastName', event.target.value)}
            placeholder='Smith'
          />
        </div>

        <div className='space-y-2'>
          <label className='text-sm font-medium'>Email</label>

          <Input
            type='email'
            value={guest.email}
            onChange={(event) => updateGuest('email', event.target.value)}
            placeholder='john@example.com'
          />
        </div>

        <div className='space-y-2'>
          <label className='text-sm font-medium'>Phone</label>

          <Input
            type='tel'
            value={guest.phone}
            onChange={(event) => updateGuest('phone', event.target.value)}
            placeholder='+63 900 000 0000'
          />
        </div>

        <div className='space-y-2 sm:col-span-2'>
          <label className='text-sm font-medium'>Special requests</label>

          <Textarea
            value={guest.specialRequests}
            onChange={(event) =>
              updateGuest('specialRequests', event.target.value)
            }
            placeholder='Anything we should know before your stay?'
            className='min-h-28 resize-none'
          />
        </div>
      </div>
    </section>
  );
}

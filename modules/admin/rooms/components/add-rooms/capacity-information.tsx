'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Input } from '@/components/ui/input';

import type { NewRoomFormData } from '../../types/room';

interface CapacityInformationProps {
  maxGuests: string;
  adults: string;
  childCount: string;
  onChange: <K extends keyof NewRoomFormData>(
    field: K,
    value: NewRoomFormData[K],
  ) => void;
}

export default function CapacityInformation({
  maxGuests,
  adults,
  childCount,
  onChange,
}: CapacityInformationProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Capacity</CardTitle>
      </CardHeader>

      <CardContent>
        <div className='grid gap-6 sm:grid-cols-3'>
          {/* Maximum Guests */}
          <div className='space-y-2'>
            <label htmlFor='max-guests' className='text-sm font-medium'>
              Maximum Guests
            </label>

            <Input
              id='max-guests'
              type='number'
              min={1}
              placeholder='2'
              value={maxGuests}
              onChange={(event) => onChange('maxGuests', event.target.value)}
            />
          </div>

          {/* Adults */}
          <div className='space-y-2'>
            <label htmlFor='adults' className='text-sm font-medium'>
              Adults
            </label>

            <Input
              id='adults'
              type='number'
              min={1}
              placeholder='2'
              value={adults}
              onChange={(event) => onChange('adults', event.target.value)}
            />
          </div>

          {/* Children */}
          <div className='space-y-2'>
            <label htmlFor='children' className='text-sm font-medium'>
              Children
            </label>

            <Input
              id='children'
              type='number'
              min={0}
              placeholder='0'
              value={childCount}
              onChange={(event) => onChange('children', event.target.value)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

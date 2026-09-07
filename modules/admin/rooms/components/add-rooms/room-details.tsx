'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Input } from '@/components/ui/input';

import type { NewRoomFormData, RoomType } from '../../types/room';

interface RoomDetailsProps {
  type: RoomType;
  pricePerNight: string;
  currency: string;
  beds: string;
  bedType: string;
  bathrooms: string;
  size: string;
  onChange: <K extends keyof NewRoomFormData>(
    field: K,
    value: NewRoomFormData[K],
  ) => void;
}

const roomTypes: Array<{
  value: RoomType;
  label: string;
}> = [
  {
    value: 'STANDARD',
    label: 'Standard',
  },
  {
    value: 'DELUXE',
    label: 'Deluxe',
  },
  {
    value: 'SUPERIOR',
    label: 'Superior',
  },
  {
    value: 'EXECUTIVE',
    label: 'Executive',
  },
  {
    value: 'SUITE',
    label: 'Suite',
  },
  {
    value: 'FAMILY',
    label: 'Family',
  },
  {
    value: 'PRESIDENTIAL',
    label: 'Presidential',
  },
];

export default function RoomDetails({
  type,
  pricePerNight,
  currency,
  beds,
  bedType,
  bathrooms,
  size,
  onChange,
}: RoomDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Room Details</CardTitle>
      </CardHeader>

      <CardContent className='space-y-6'>
        {/* Room Type */}
        <div className='space-y-2'>
          <label htmlFor='room-type' className='text-sm font-medium'>
            Room Type
          </label>

          <Select
            value={type}
            onValueChange={(value) =>
              onChange('type', value as NewRoomFormData['type'])
            }
          >
            <SelectTrigger id='room-type'>
              <SelectValue placeholder='Select room type' />
            </SelectTrigger>

            <SelectContent>
              {roomTypes.map((roomType) => (
                <SelectItem key={roomType.value} value={roomType.value}>
                  {roomType.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Pricing */}
        <div className='grid gap-6 sm:grid-cols-2'>
          <div className='space-y-2'>
            <label htmlFor='price-per-night' className='text-sm font-medium'>
              Price per Night
            </label>

            <Input
              id='price-per-night'
              type='number'
              min={0}
              step='0.01'
              placeholder='4500'
              value={pricePerNight}
              onChange={(event) =>
                onChange('pricePerNight', event.target.value)
              }
            />
          </div>

          <div className='space-y-2'>
            <label htmlFor='currency' className='text-sm font-medium'>
              Currency
            </label>

            <Input
              id='currency'
              value={currency}
              onChange={(event) => onChange('currency', event.target.value)}
              disabled
            />
          </div>
        </div>

        {/* Bed Information */}
        <div className='grid gap-6 sm:grid-cols-2'>
          <div className='space-y-2'>
            <label htmlFor='beds' className='text-sm font-medium'>
              Number of Beds
            </label>

            <Input
              id='beds'
              type='number'
              min={1}
              placeholder='1'
              value={beds}
              onChange={(event) => onChange('beds', event.target.value)}
            />
          </div>

          <div className='space-y-2'>
            <label htmlFor='bed-type' className='text-sm font-medium'>
              Bed Type
            </label>

            <Input
              id='bed-type'
              placeholder='1 King Bed'
              value={bedType}
              onChange={(event) => onChange('bedType', event.target.value)}
            />
          </div>
        </div>

        {/* Room Measurements */}
        <div className='grid gap-6 sm:grid-cols-2'>
          <div className='space-y-2'>
            <label htmlFor='room-bathrooms' className='text-sm font-medium'>
              Bathrooms
            </label>

            <Input
              id='room-bathrooms'
              type='number'
              min={1}
              placeholder='1'
              value={bathrooms}
              onChange={(event) => onChange('bathrooms', event.target.value)}
            />
          </div>

          <div className='space-y-2'>
            <label htmlFor='room-size' className='text-sm font-medium'>
              Room Size
            </label>

            <div className='relative'>
              <Input
                id='room-size'
                type='number'
                min={1}
                placeholder='32'
                value={size}
                onChange={(event) => onChange('size', event.target.value)}
                className='pr-14'
              />

              <span className='absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground'>
                m²
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

'use client';

import { FileText } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface BasicInformationProps {
  name: string;
  roomNumber: string;
  description: string;
  onChange: (
    field: 'name' | 'roomNumber' | 'description',
    value: string,
  ) => void;
}

export default function BasicInformation({
  name,
  roomNumber,
  description,
  onChange,
}: BasicInformationProps) {
  return (
    <Card>
      <CardHeader className='px-5 py-4'>
        <div className='flex items-center gap-2'>
          <FileText className='size-4 text-primary' />

          <CardTitle className='text-base'>Basic Information</CardTitle>
        </div>
      </CardHeader>

      <CardContent className='space-y-4 px-5 pb-5'>
        <div className='grid gap-4 sm:grid-cols-2'>
          <div className='space-y-1.5'>
            <label htmlFor='room-name' className='text-sm font-medium'>
              Room Name
            </label>

            <Input
              id='room-name'
              value={name}
              placeholder='Deluxe Ocean View'
              onChange={(event) => onChange('name', event.target.value)}
            />
          </div>

          <div className='space-y-1.5'>
            <label htmlFor='room-number' className='text-sm font-medium'>
              Room Number
            </label>

            <Input
              id='room-number'
              value={roomNumber}
              placeholder='101'
              onChange={(event) => onChange('roomNumber', event.target.value)}
            />
          </div>
        </div>

        <div className='space-y-1.5'>
          <label htmlFor='room-description' className='text-sm font-medium'>
            Description
          </label>

          <Textarea
            id='room-description'
            value={description}
            placeholder='Describe the room, atmosphere, and main features...'
            rows={5}
            onChange={(event) => onChange('description', event.target.value)}
          />
        </div>
      </CardContent>
    </Card>
  );
}

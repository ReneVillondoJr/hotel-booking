'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import type { HotelSettings } from '../types/settings';

interface HotelSettingsProps {
  settings: HotelSettings;

  onChange: (settings: HotelSettings) => void;
}

export default function HotelSettingsForm({
  settings,
  onChange,
}: HotelSettingsProps) {
  function updateField(field: keyof HotelSettings, value: string) {
    onChange({
      ...settings,
      [field]: value,
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hotel Information</CardTitle>

        <CardDescription>Basic information about your hotel.</CardDescription>
      </CardHeader>

      <CardContent className='space-y-6'>
        <div className='grid gap-4 md:grid-cols-2'>
          <div className='space-y-2'>
            <Label>Hotel Name</Label>

            <Input
              value={settings.hotelName}
              onChange={(event) => updateField('hotelName', event.target.value)}
            />
          </div>

          <div className='space-y-2'>
            <Label>Legal Business Name</Label>

            <Input
              value={settings.legalName}
              onChange={(event) => updateField('legalName', event.target.value)}
            />
          </div>
        </div>

        <div className='space-y-2'>
          <Label>Description</Label>

          <Textarea
            value={settings.description}
            rows={4}
            onChange={(event) => updateField('description', event.target.value)}
          />
        </div>

        <div className='grid gap-4 md:grid-cols-2'>
          <div className='space-y-2'>
            <Label>Timezone</Label>

            <Input
              value={settings.timezone}
              onChange={(event) => updateField('timezone', event.target.value)}
            />
          </div>

          <div className='space-y-2'>
            <Label>Currency</Label>

            <Input
              value={settings.currency}
              onChange={(event) => updateField('currency', event.target.value)}
            />
          </div>
        </div>

        <div className='grid gap-4 md:grid-cols-2'>
          <div className='space-y-2'>
            <Label>Check-in Time</Label>

            <Input
              type='time'
              value={settings.checkInTime}
              onChange={(event) =>
                updateField('checkInTime', event.target.value)
              }
            />
          </div>

          <div className='space-y-2'>
            <Label>Check-out Time</Label>

            <Input
              type='time'
              value={settings.checkOutTime}
              onChange={(event) =>
                updateField('checkOutTime', event.target.value)
              }
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

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

import type { ContactSettings } from '../types/settings';

interface ContactSettingsProps {
  settings: ContactSettings;

  onChange: (settings: ContactSettings) => void;
}

export default function ContactSettingsForm({
  settings,
  onChange,
}: ContactSettingsProps) {
  function updateField(field: keyof ContactSettings, value: string) {
    onChange({
      ...settings,
      [field]: value,
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>

        <CardDescription>
          Public contact details for your hotel.
        </CardDescription>
      </CardHeader>

      <CardContent className='space-y-6'>
        <div className='grid gap-4 md:grid-cols-2'>
          <div className='space-y-2'>
            <Label>Email</Label>

            <Input
              type='email'
              value={settings.email}
              onChange={(event) => updateField('email', event.target.value)}
            />
          </div>

          <div className='space-y-2'>
            <Label>Primary Phone</Label>

            <Input
              value={settings.phone}
              onChange={(event) => updateField('phone', event.target.value)}
            />
          </div>
        </div>

        <div className='grid gap-4 md:grid-cols-2'>
          <div className='space-y-2'>
            <Label>Alternate Phone</Label>

            <Input
              value={settings.alternatePhone}
              onChange={(event) =>
                updateField('alternatePhone', event.target.value)
              }
            />
          </div>

          <div className='space-y-2'>
            <Label>Website</Label>

            <Input
              value={settings.website}
              onChange={(event) => updateField('website', event.target.value)}
            />
          </div>
        </div>

        <div className='space-y-2'>
          <Label>Address</Label>

          <Input
            value={settings.address}
            onChange={(event) => updateField('address', event.target.value)}
          />
        </div>

        <div className='grid gap-4 md:grid-cols-2'>
          <div className='space-y-2'>
            <Label>City</Label>

            <Input
              value={settings.city}
              onChange={(event) => updateField('city', event.target.value)}
            />
          </div>

          <div className='space-y-2'>
            <Label>Province</Label>

            <Input
              value={settings.province}
              onChange={(event) => updateField('province', event.target.value)}
            />
          </div>
        </div>

        <div className='grid gap-4 md:grid-cols-2'>
          <div className='space-y-2'>
            <Label>Country</Label>

            <Input
              value={settings.country}
              onChange={(event) => updateField('country', event.target.value)}
            />
          </div>

          <div className='space-y-2'>
            <Label>Postal Code</Label>

            <Input
              value={settings.postalCode}
              onChange={(event) =>
                updateField('postalCode', event.target.value)
              }
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

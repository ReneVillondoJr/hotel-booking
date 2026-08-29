'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import type { PolicySettings } from '../types/settings';

interface PolicySettingsProps {
  settings: PolicySettings;

  onChange: (settings: PolicySettings) => void;
}

export default function PolicySettingsForm({
  settings,
  onChange,
}: PolicySettingsProps) {
  function updateField(field: keyof PolicySettings, value: string) {
    onChange({
      ...settings,
      [field]: value,
    });
  }

  const fields: {
    key: keyof PolicySettings;
    label: string;
  }[] = [
    {
      key: 'cancellationPolicy',
      label: 'Cancellation Policy',
    },
    {
      key: 'checkInPolicy',
      label: 'Check-in Policy',
    },
    {
      key: 'checkOutPolicy',
      label: 'Check-out Policy',
    },
    {
      key: 'childPolicy',
      label: 'Child Policy',
    },
    {
      key: 'petPolicy',
      label: 'Pet Policy',
    },
    {
      key: 'smokingPolicy',
      label: 'Smoking Policy',
    },
    {
      key: 'privacyPolicy',
      label: 'Privacy Policy',
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hotel Policies</CardTitle>

        <CardDescription>
          Manage the policies displayed to guests.
        </CardDescription>
      </CardHeader>

      <CardContent className='space-y-6'>
        {fields.map((field) => (
          <div key={field.key} className='space-y-2'>
            <Label>{field.label}</Label>

            <Textarea
              rows={4}
              value={settings[field.key]}
              onChange={(event) => updateField(field.key, event.target.value)}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

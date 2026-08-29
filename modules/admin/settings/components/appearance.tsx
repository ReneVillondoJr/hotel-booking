'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

import type { AppearanceSettings } from '../types/settings';

interface AppearanceSettingsProps {
  settings: AppearanceSettings;

  onChange: (settings: AppearanceSettings) => void;
}

export default function AppearanceSettingsForm({
  settings,
  onChange,
}: AppearanceSettingsProps) {
  function updateField<T extends keyof AppearanceSettings>(
    field: T,
    value: AppearanceSettings[T],
  ) {
    onChange({
      ...settings,
      [field]: value,
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Website Appearance</CardTitle>
      </CardHeader>

      <CardContent className='space-y-6'>
        <div className='space-y-2'>
          <Label>Primary Color</Label>

          <div className='flex gap-3'>
            <Input
              type='color'
              value={settings.primaryColor}
              onChange={(event) =>
                updateField('primaryColor', event.target.value)
              }
              className='h-10 w-16 p-1'
            />

            <Input
              value={settings.primaryColor}
              onChange={(event) =>
                updateField('primaryColor', event.target.value)
              }
            />
          </div>
        </div>

        <AppearanceSwitch
          label='Show Hotel Logo'
          checked={settings.showHotelLogo}
          onCheckedChange={(value) => updateField('showHotelLogo', value)}
        />

        <AppearanceSwitch
          label='Show Website Footer'
          checked={settings.showFooter}
          onCheckedChange={(value) => updateField('showFooter', value)}
        />

        <AppearanceSwitch
          label='Maintenance Mode'
          checked={settings.maintenanceMode}
          onCheckedChange={(value) => updateField('maintenanceMode', value)}
        />
      </CardContent>
    </Card>
  );
}

function AppearanceSwitch({
  label,
  checked,
  onCheckedChange,
}: {
  label: string;
  checked: boolean;
  onCheckedChange: (value: boolean) => void;
}) {
  return (
    <div className='flex items-center justify-between gap-4'>
      <Label>{label}</Label>

      <Switch checked={checked} onCheckedChange={onCheckedChange} />
    </div>
  );
}

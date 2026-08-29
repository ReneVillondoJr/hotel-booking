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
import { Switch } from '@/components/ui/switch';

import type { SecuritySettings } from '../types/settings';

interface SecuritySettingsProps {
  settings: SecuritySettings;

  onChange: (settings: SecuritySettings) => void;
}

export default function SecuritySettingsForm({
  settings,
  onChange,
}: SecuritySettingsProps) {
  function updateField<T extends keyof SecuritySettings>(
    field: T,
    value: SecuritySettings[T],
  ) {
    onChange({
      ...settings,
      [field]: value,
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Security Settings</CardTitle>

        <CardDescription>
          Configure guest account and security options.
        </CardDescription>
      </CardHeader>

      <CardContent className='space-y-6'>
        <SecuritySwitch
          label='Require Email Verification'
          checked={settings.requireEmailVerification}
          onCheckedChange={(value) =>
            updateField('requireEmailVerification', value)
          }
        />

        <SecuritySwitch
          label='Allow Guest Registration'
          checked={settings.allowGuestRegistration}
          onCheckedChange={(value) =>
            updateField('allowGuestRegistration', value)
          }
        />

        <SecuritySwitch
          label='Enable Two-Factor Authentication'
          checked={settings.twoFactorAuthentication}
          onCheckedChange={(value) =>
            updateField('twoFactorAuthentication', value)
          }
        />

        <div className='space-y-2'>
          <Label>Session Timeout (Minutes)</Label>

          <Input
            type='number'
            min={5}
            value={settings.sessionTimeout}
            onChange={(event) =>
              updateField('sessionTimeout', Number(event.target.value))
            }
          />
        </div>
      </CardContent>
    </Card>
  );
}

function SecuritySwitch({
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

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

import type { BookingSettings } from '../types/settings';

interface BookingSettingsProps {
  settings: BookingSettings;

  onChange: (settings: BookingSettings) => void;
}

export default function BookingSettingsForm({
  settings,
  onChange,
}: BookingSettingsProps) {
  function updateField<T extends keyof BookingSettings>(
    field: T,
    value: BookingSettings[T],
  ) {
    onChange({
      ...settings,
      [field]: value,
    });
  }

  return (
    <div className='space-y-6'>
      <Card>
        <CardHeader>
          <CardTitle>Booking Rules</CardTitle>

          <CardDescription>
            Configure how guests can make reservations.
          </CardDescription>
        </CardHeader>

        <CardContent className='space-y-6'>
          <div className='grid gap-4 md:grid-cols-2'>
            <div className='space-y-2'>
              <Label>Minimum Stay (Nights)</Label>

              <Input
                type='number'
                min={1}
                value={settings.minimumStay}
                onChange={(event) =>
                  updateField('minimumStay', Number(event.target.value))
                }
              />
            </div>

            <div className='space-y-2'>
              <Label>Maximum Stay (Nights)</Label>

              <Input
                type='number'
                min={1}
                value={settings.maximumStay}
                onChange={(event) =>
                  updateField('maximumStay', Number(event.target.value))
                }
              />
            </div>
          </div>

          <div className='grid gap-4 md:grid-cols-2'>
            <div className='space-y-2'>
              <Label>Minimum Advance Booking (Days)</Label>

              <Input
                type='number'
                min={0}
                value={settings.minimumAdvanceBooking}
                onChange={(event) =>
                  updateField(
                    'minimumAdvanceBooking',
                    Number(event.target.value),
                  )
                }
              />
            </div>

            <div className='space-y-2'>
              <Label>Maximum Advance Booking (Days)</Label>

              <Input
                type='number'
                min={1}
                value={settings.maximumAdvanceBooking}
                onChange={(event) =>
                  updateField(
                    'maximumAdvanceBooking',
                    Number(event.target.value),
                  )
                }
              />
            </div>
          </div>

          <div className='space-y-4'>
            <SettingSwitch
              label='Allow Same-Day Booking'
              checked={settings.allowSameDayBooking}
              onCheckedChange={(value) =>
                updateField('allowSameDayBooking', value)
              }
            />

            <SettingSwitch
              label='Allow Guest Cancellation'
              checked={settings.allowGuestCancellation}
              onCheckedChange={(value) =>
                updateField('allowGuestCancellation', value)
              }
            />

            <SettingSwitch
              label='Require Guest Phone Number'
              checked={settings.requireGuestPhone}
              onCheckedChange={(value) =>
                updateField('requireGuestPhone', value)
              }
            />

            <SettingSwitch
              label='Automatically Confirm Bookings'
              checked={settings.autoConfirmBookings}
              onCheckedChange={(value) =>
                updateField('autoConfirmBookings', value)
              }
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Default Booking Values</CardTitle>
        </CardHeader>

        <CardContent className='grid gap-4 md:grid-cols-3'>
          <div className='space-y-2'>
            <Label>Default Adults</Label>

            <Input
              type='number'
              min={1}
              value={settings.defaultAdults}
              onChange={(event) =>
                updateField('defaultAdults', Number(event.target.value))
              }
            />
          </div>

          <div className='space-y-2'>
            <Label>Default Children</Label>

            <Input
              type='number'
              min={0}
              value={settings.defaultChildren}
              onChange={(event) =>
                updateField('defaultChildren', Number(event.target.value))
              }
            />
          </div>

          <div className='space-y-2'>
            <Label>Booking Prefix</Label>

            <Input
              value={settings.bookingReferencePrefix}
              onChange={(event) =>
                updateField(
                  'bookingReferencePrefix',
                  event.target.value.toUpperCase(),
                )
              }
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

interface SettingSwitchProps {
  label: string;
  checked: boolean;

  onCheckedChange: (checked: boolean) => void;
}

function SettingSwitch({
  label,
  checked,
  onCheckedChange,
}: SettingSwitchProps) {
  return (
    <div className='flex items-center justify-between gap-4'>
      <Label>{label}</Label>

      <Switch checked={checked} onCheckedChange={onCheckedChange} />
    </div>
  );
}

'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

import type { NotificationSettings } from '../types/settings';

interface NotificationSettingsProps {
  settings: NotificationSettings;

  onChange: (settings: NotificationSettings) => void;
}

export default function NotificationSettingsForm({
  settings,
  onChange,
}: NotificationSettingsProps) {
  function updateField<T extends keyof NotificationSettings>(
    field: T,
    value: NotificationSettings[T],
  ) {
    onChange({
      ...settings,
      [field]: value,
    });
  }

  return (
    <div className='space-y-6'>
      <NotificationCard title='Guest Notifications'>
        <Setting
          label='Booking Confirmation'
          checked={settings.bookingConfirmation}
          onCheckedChange={(value) => updateField('bookingConfirmation', value)}
        />

        <Setting
          label='Booking Cancellation'
          checked={settings.bookingCancellation}
          onCheckedChange={(value) => updateField('bookingCancellation', value)}
        />

        <Setting
          label='Booking Reminder'
          checked={settings.bookingReminder}
          onCheckedChange={(value) => updateField('bookingReminder', value)}
        />

        <Setting
          label='Payment Received'
          checked={settings.paymentReceived}
          onCheckedChange={(value) => updateField('paymentReceived', value)}
        />
      </NotificationCard>

      <NotificationCard title='Admin Notifications'>
        <Setting
          label='New Booking Alert'
          checked={settings.newBookingAdmin}
          onCheckedChange={(value) => updateField('newBookingAdmin', value)}
        />

        <Setting
          label='Cancellation Alert'
          checked={settings.cancellationAdmin}
          onCheckedChange={(value) => updateField('cancellationAdmin', value)}
        />
      </NotificationCard>

      <NotificationCard title='Notification Channels'>
        <Setting
          label='Email Notifications'
          checked={settings.emailNotifications}
          onCheckedChange={(value) => updateField('emailNotifications', value)}
        />

        <Setting
          label='SMS Notifications'
          checked={settings.smsNotifications}
          onCheckedChange={(value) => updateField('smsNotifications', value)}
        />
      </NotificationCard>
    </div>
  );
}

function NotificationCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent className='space-y-5'>{children}</CardContent>
    </Card>
  );
}

function Setting({
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

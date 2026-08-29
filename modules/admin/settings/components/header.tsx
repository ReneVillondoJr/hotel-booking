import { Settings } from 'lucide-react';

export default function SettingsHeader() {
  return (
    <div className='flex items-start gap-4'>
      <div className='flex size-11 shrink-0 items-center justify-center rounded-lg bg-muted'>
        <Settings className='size-5' />
      </div>

      <div>
        <h1 className='text-2xl font-semibold tracking-tight'>Settings</h1>

        <p className='mt-1 text-sm text-muted-foreground'>
          Manage your hotel, booking, payment, and system settings.
        </p>
      </div>
    </div>
  );
}

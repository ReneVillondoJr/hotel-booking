import { Bell } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function AdminHeader() {
  return (
    <header className='sticky top-0 z-30 flex h-16 items-center border-b bg-background/95 px-4 backdrop-blur sm:px-6 lg:px-8'>
      <div className='flex w-full items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Separator orientation='vertical' className='hidden h-5 lg:block' />

          <span className='text-sm text-muted-foreground'>Administration</span>
        </div>

        <Button variant='ghost' size='icon' className='rounded-full'>
          <Bell className='size-4' />
          <span className='sr-only'>Notifications</span>
        </Button>
      </div>
    </header>
  );
}

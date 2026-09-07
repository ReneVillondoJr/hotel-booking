'use client';

import { useRouter } from 'next/navigation';
import { CalendarPlus } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface NewBookingButtonProps {
  onClick?: () => void;
}

export function NewBookingButton({ onClick }: NewBookingButtonProps) {
  const router = useRouter();

  function handleClick() {
    if (onClick) {
      onClick();
      return;
    }

    router.push('/admin/dashboard/new');
  }

  return (
    <Button type='button' onClick={handleClick}>
      <CalendarPlus className='size-4' />
      New Booking
    </Button>
  );
}

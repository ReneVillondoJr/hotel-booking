import { CalendarCheck, Clock3, CreditCard, Wallet } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

import type { Booking } from '@/modules/admin/modules/booking/types/booking';

interface BookingSummaryProps {
  bookings: Booking[];
}

export function BookingSummary({ bookings }: BookingSummaryProps) {
  const totalBookings = bookings.length;

  const pendingBookings = bookings.filter(
    (booking) => booking.status === 'PENDING',
  ).length;

  const confirmedBookings = bookings.filter(
    (booking) => booking.status === 'CONFIRMED',
  ).length;

  const revenue = bookings.reduce((total, booking) => total + booking.total, 0);

  const items = [
    {
      title: 'Total Bookings',
      value: totalBookings,
      description: 'All reservations',
      icon: CalendarCheck,
    },
    {
      title: 'Pending',
      value: pendingBookings,
      description: 'Awaiting confirmation',
      icon: Clock3,
    },
    {
      title: 'Confirmed',
      value: confirmedBookings,
      description: 'Confirmed reservations',
      icon: CreditCard,
    },
    {
      title: 'Revenue',
      value: `₱${revenue.toLocaleString()}`,
      description: 'Total booking value',
      icon: Wallet,
    },
  ];

  return (
    <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Card key={item.title}>
            <CardContent className='flex items-start justify-between p-6'>
              <div className='space-y-1'>
                <p className='text-sm text-muted-foreground'>{item.title}</p>

                <p className='text-2xl font-semibold tracking-tight'>
                  {item.value}
                </p>

                <p className='text-xs text-muted-foreground'>
                  {item.description}
                </p>
              </div>

              <div className='rounded-lg bg-muted p-2.5'>
                <Icon className='size-5 text-muted-foreground' />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

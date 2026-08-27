import { CalendarCheck, Clock3, CreditCard, Users } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

export default function AdminPage() {
  const stats = [
    {
      title: 'Total Bookings',
      value: '248',
      description: 'All reservations',
      icon: CalendarCheck,
    },
    {
      title: 'Pending Bookings',
      value: '18',
      description: 'Awaiting confirmation',
      icon: Clock3,
    },
    {
      title: 'Confirmed',
      value: '190',
      description: 'Confirmed reservations',
      icon: CreditCard,
    },
    {
      title: 'Total Guests',
      value: '426',
      description: 'Registered guests',
      icon: Users,
    },
  ];

  return (
    <div className='space-y-8'>
      {/* Header */}
      <div>
        <h1 className='text-2xl font-semibold tracking-tight'>Dashboard</h1>

        <p className='text-sm text-muted-foreground'>
          Overview of your hotel operations and bookings.
        </p>
      </div>

      {/* Summary */}
      <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <Card key={stat.title}>
              <CardContent className='flex items-start justify-between p-6'>
                <div className='space-y-1'>
                  <p className='text-sm text-muted-foreground'>{stat.title}</p>

                  <p className='text-2xl font-semibold tracking-tight'>
                    {stat.value}
                  </p>

                  <p className='text-xs text-muted-foreground'>
                    {stat.description}
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

      {/* Content */}
      <div className='grid gap-6 lg:grid-cols-2'>
        <Card>
          <CardContent className='p-6'>
            <h2 className='font-semibold'>Recent Bookings</h2>

            <p className='mt-1 text-sm text-muted-foreground'>
              Latest guest reservations.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className='p-6'>
            <h2 className='font-semibold'>Booking Activity</h2>

            <p className='mt-1 text-sm text-muted-foreground'>
              Recent activity across your hotel.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

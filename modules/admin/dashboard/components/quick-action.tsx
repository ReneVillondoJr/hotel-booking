import Link from 'next/link';

import { BedDouble, CalendarPlus, Users } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const actions = [
  {
    title: 'New Booking',
    description: 'Create a reservation',
    href: '/admin/bookings',
    icon: CalendarPlus,
  },
  {
    title: 'Manage Rooms',
    description: 'Update room availability',
    href: '/admin/rooms',
    icon: BedDouble,
  },
  {
    title: 'View Guests',
    description: 'Manage guest information',
    href: '/admin/guests',
    icon: Users,
  },
];

export default function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>

      <CardContent className='space-y-3'>
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className='flex items-center gap-4 rounded-xl border p-4 transition-colors hover:bg-muted/50'
            >
              <div className='rounded-lg bg-muted p-2.5'>
                <Icon className='size-5' />
              </div>

              <div>
                <p className='text-sm font-medium'>{action.title}</p>

                <p className='text-xs text-muted-foreground'>
                  {action.description}
                </p>
              </div>
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}

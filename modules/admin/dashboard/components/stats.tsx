import { BedDouble, CalendarCheck, TrendingUp, Users } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

const stats = [
  {
    title: 'Total Bookings',
    value: '248',
    change: '+12.5%',
    description: 'Compared to last month',
    icon: CalendarCheck,
  },
  {
    title: 'Today’s Check-ins',
    value: '18',
    change: '+4',
    description: 'Guests arriving today',
    icon: Users,
  },
  {
    title: 'Room Occupancy',
    value: '78%',
    change: '+6.2%',
    description: 'Current occupancy rate',
    icon: BedDouble,
  },
  {
    title: 'Monthly Revenue',
    value: '₱428,500',
    change: '+18.4%',
    description: 'Compared to last month',
    icon: TrendingUp,
  },
];

export default function DashboardStats() {
  return (
    <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card key={stat.title} className='transition-shadow hover:shadow-md'>
            <CardContent className='p-5'>
              <div className='flex items-start justify-between'>
                <div className='rounded-xl bg-muted p-2.5'>
                  <Icon className='size-5 text-muted-foreground' />
                </div>

                <span className='text-xs font-medium text-emerald-600'>
                  {stat.change}
                </span>
              </div>

              <div className='mt-5'>
                <p className='text-sm text-muted-foreground'>{stat.title}</p>

                <p className='mt-1 text-2xl font-semibold tracking-tight'>
                  {stat.value}
                </p>

                <p className='mt-1 text-xs text-muted-foreground'>
                  {stat.description}
                </p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

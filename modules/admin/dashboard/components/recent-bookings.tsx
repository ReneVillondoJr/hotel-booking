import Link from 'next/link';

import { ArrowUpRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { dashboardBookings } from '../data/dashboard';

const statusStyles = {
  PENDING: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100',
  CONFIRMED: 'bg-green-100 text-green-700 hover:bg-green-100',
  CHECKED_IN: 'bg-blue-100 text-blue-700 hover:bg-blue-100',
  CHECKED_OUT: 'bg-muted text-muted-foreground hover:bg-muted',
  CANCELLED: 'bg-red-100 text-red-700 hover:bg-red-100',
} as const;

const statusLabels = {
  PENDING: 'Pending',
  CONFIRMED: 'Confirmed',
  CHECKED_IN: 'Checked In',
  CHECKED_OUT: 'Checked Out',
  CANCELLED: 'Cancelled',
} as const;

export default function RecentBookings() {
  return (
    <Card className='overflow-hidden'>
      <CardHeader className='flex flex-row items-start justify-between gap-4'>
        <div className='space-y-1'>
          <CardTitle>Recent Bookings</CardTitle>

          <CardDescription>
            Latest reservations from your guests.
          </CardDescription>
        </div>

        <Button variant='ghost' size='sm' className='shrink-0'>
          <Link href='/admin/bookings' className='flex items-center gap-1'>
            View all
            <ArrowUpRight className='size-4' />
          </Link>
        </Button>
      </CardHeader>

      <CardContent className='p-0'>
        <div className='overflow-x-auto'>
          <Table>
            <TableHeader>
              <TableRow className='bg-muted/40 hover:bg-muted/40'>
                <TableHead className='px-6'>Guest</TableHead>

                <TableHead className='px-6'>Room</TableHead>

                <TableHead className='px-6'>Stay</TableHead>

                <TableHead className='px-6'>Status</TableHead>

                <TableHead className='px-6 text-right'>Total</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {dashboardBookings.map((booking) => (
                <TableRow key={booking.id} className='hover:bg-muted/30'>
                  <TableCell className='px-6 py-4'>
                    <div className='space-y-0.5'>
                      <p className='text-sm font-medium'>
                        {booking.guest.name}
                      </p>

                      <p className='text-xs text-muted-foreground'>
                        {booking.bookingNumber}
                      </p>
                    </div>
                  </TableCell>

                  <TableCell className='px-6 py-4'>
                    <span className='text-sm'>{booking.room}</span>
                  </TableCell>

                  <TableCell className='px-6 py-4'>
                    <div className='space-y-0.5'>
                      <p className='text-sm'>{booking.checkIn}</p>

                      <p className='text-xs text-muted-foreground'>
                        {booking.checkOut}
                      </p>
                    </div>
                  </TableCell>

                  <TableCell className='px-6 py-4'>
                    <Badge
                      variant='secondary'
                      className={statusStyles[booking.status]}
                    >
                      {statusLabels[booking.status]}
                    </Badge>
                  </TableCell>

                  <TableCell className='px-6 py-4 text-right'>
                    <span className='text-sm font-medium'>
                      ₱{booking.total.toLocaleString()}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

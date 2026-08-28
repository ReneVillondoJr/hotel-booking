'use client';

import { MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import type { Booking } from '@/modules/admin/booking/types/booking';

import { BookingStatusBadge } from '@/modules/admin/booking/components/booking-status-badge';
import { BookingPaymentBadge } from '@/modules/admin/booking/components/booking-payment';
import { BookingPagination } from '@/modules/admin/booking/components/booking-pagination';

interface BookingTableProps {
  bookings: Booking[];
  loading: boolean;
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  onRefresh: () => void;
}

export function BookingTable({
  bookings,
  loading,
  page,
  pageCount,
  onPageChange,
}: BookingTableProps) {
  return (
    <Card className='overflow-hidden'>
      <div className='overflow-x-auto'>
        <table className='w-full'>
          <thead className='border-b bg-muted/50'>
            <tr>
              <th className='px-6 py-4 text-left text-sm font-medium'>
                Booking
              </th>

              <th className='px-6 py-4 text-left text-sm font-medium'>Guest</th>

              <th className='px-6 py-4 text-left text-sm font-medium'>Room</th>

              <th className='px-6 py-4 text-left text-sm font-medium'>Stay</th>

              <th className='px-6 py-4 text-left text-sm font-medium'>
                Status
              </th>

              <th className='px-6 py-4 text-left text-sm font-medium'>
                Payment
              </th>

              <th className='w-12 px-6 py-4' />
            </tr>
          </thead>

          <tbody className='divide-y'>
            {loading ?
              <tr>
                <td
                  colSpan={7}
                  className='px-6 py-12 text-center text-muted-foreground'
                >
                  Loading bookings...
                </td>
              </tr>
            : bookings.length === 0 ?
              <tr>
                <td
                  colSpan={7}
                  className='px-6 py-12 text-center text-muted-foreground'
                >
                  No bookings found.
                </td>
              </tr>
            : bookings.map((booking) => (
                <tr key={booking.id}>
                  <td className='px-6 py-4 font-medium'>
                    {booking.bookingNumber}
                  </td>

                  <td className='px-6 py-4'>
                    <div>
                      <p className='font-medium'>
                        {booking.guest.firstName} {booking.guest.lastName}
                      </p>

                      <p className='text-sm text-muted-foreground'>
                        {booking.guest.email}
                      </p>
                    </div>
                  </td>

                  <td className='px-6 py-4'>{booking.room.name}</td>

                  <td className='px-6 py-4'>
                    <div className='text-sm'>
                      <p>{booking.checkIn}</p>
                      <p className='text-muted-foreground'>
                        {booking.nights} nights
                      </p>
                    </div>
                  </td>

                  <td className='px-6 py-4'>
                    <BookingStatusBadge status={booking.status} />
                  </td>

                  <td className='px-6 py-4'>
                    <BookingPaymentBadge status={booking.paymentStatus} />
                  </td>

                  <td className='px-6 py-4'>
                    <Button variant='ghost' size='icon'>
                      <MoreHorizontal />
                    </Button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      <BookingPagination
        page={page}
        pageCount={pageCount}
        onPageChange={onPageChange}
      />
    </Card>
  );
}

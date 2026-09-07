'use client';

import { CalendarDays } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { BookingActions } from './booking-actions';
import { BookingPaymentBadge } from './booking-payment';
import { BookingStatusBadge } from './booking-status-badge';

import type { Booking } from '../types/booking';

interface BookingTableProps {
  bookings: Booking[];
  loading: boolean;
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  onRefresh: () => void;
  onView?: (booking: Booking) => void;
  onEdit?: (booking: Booking) => void;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-PH', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function BookingTable({
  bookings,
  loading,
  page,
  pageCount,
  onPageChange,
  onRefresh,
  onView,
  onEdit,
}: BookingTableProps) {
  return (
    <Card className='overflow-hidden'>
      <CardHeader className='flex flex-row items-center justify-between gap-4 border-b'>
        <div>
          <CardTitle className='text-base font-semibold'>Bookings</CardTitle>

          <p className='mt-1 text-sm text-muted-foreground'>
            Manage hotel reservations and guest stays.
          </p>
        </div>
      </CardHeader>

      <CardContent className='p-0'>
        <div className='w-full overflow-x-auto'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='min-w-45'>Booking</TableHead>

                <TableHead className='min-w-35'>Guest</TableHead>

                <TableHead className='min-w-45'>Room</TableHead>

                <TableHead>Stay</TableHead>

                <TableHead>Status</TableHead>

                <TableHead>Payment</TableHead>

                <TableHead className='text-right'>Total</TableHead>

                <TableHead className='w-12 text-right'>
                  <span className='sr-only'>Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {loading ?
                Array.from({ length: 5 }).map((_, index) => (
                  <TableRow key={`loading-${index}`}>
                    <TableCell>
                      <div className='space-y-2'>
                        <div className='h-4 w-28 animate-pulse rounded bg-muted' />
                        <div className='h-3 w-20 animate-pulse rounded bg-muted' />
                      </div>
                    </TableCell>

                    <TableCell>
                      <div className='space-y-2'>
                        <div className='h-4 w-28 animate-pulse rounded bg-muted' />
                        <div className='h-3 w-36 animate-pulse rounded bg-muted' />
                      </div>
                    </TableCell>

                    <TableCell>
                      <div className='space-y-2'>
                        <div className='h-4 w-32 animate-pulse rounded bg-muted' />
                        <div className='h-3 w-20 animate-pulse rounded bg-muted' />
                      </div>
                    </TableCell>

                    <TableCell>
                      <div className='h-4 w-28 animate-pulse rounded bg-muted' />
                    </TableCell>

                    <TableCell>
                      <div className='h-6 w-20 animate-pulse rounded-full bg-muted' />
                    </TableCell>

                    <TableCell>
                      <div className='h-6 w-16 animate-pulse rounded-full bg-muted' />
                    </TableCell>

                    <TableCell>
                      <div className='ml-auto h-4 w-20 animate-pulse rounded bg-muted' />
                    </TableCell>

                    <TableCell />
                  </TableRow>
                ))
              : bookings.length === 0 ?
                <TableRow>
                  <TableCell colSpan={8} className='h-32 text-center'>
                    <div className='flex flex-col items-center justify-center gap-2'>
                      <CalendarDays className='size-8 text-muted-foreground' />

                      <div>
                        <p className='font-medium'>No bookings found</p>

                        <p className='text-sm text-muted-foreground'>
                          Try adjusting your filters.
                        </p>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              : bookings.map((booking) => {
                  const guestName = `${booking.guest.firstName} ${booking.guest.lastName}`;

                  return (
                    <TableRow key={booking.id} className='hover:bg-muted/40'>
                      {/* Booking */}
                      <TableCell>
                        <div className='space-y-1'>
                          <p className='font-medium'>{booking.bookingNumber}</p>

                          <p className='text-xs text-muted-foreground'>
                            {formatDate(booking.createdAt)}
                          </p>
                        </div>
                      </TableCell>

                      {/* Guest */}
                      <TableCell>
                        <div className='space-y-1'>
                          <p className='font-medium'>{guestName}</p>

                          <p className='max-w-44 truncate text-xs text-muted-foreground'>
                            {booking.guest.email}
                          </p>

                          {booking.guest.contactNumber && (
                            <p className='text-xs text-muted-foreground'>
                              {booking.guest.contactNumber}
                            </p>
                          )}
                        </div>
                      </TableCell>

                      {/* Room */}
                      <TableCell>
                        <div className='space-y-1'>
                          <p className='font-medium'>{booking.room.name}</p>

                          <div className='flex items-center gap-2 text-xs text-muted-foreground'>
                            <span>{booking.room.type}</span>

                            <span>•</span>

                            <span>
                              {formatCurrency(booking.room.price)}
                              /night
                            </span>
                          </div>
                        </div>
                      </TableCell>

                      {/* Stay */}
                      <TableCell>
                        <div className='space-y-1'>
                          <div className='flex items-center gap-1.5 text-sm'>
                            <CalendarDays className='size-3.5 text-muted-foreground' />

                            <span>{formatDate(booking.checkIn)}</span>
                          </div>

                          <p className='text-xs text-muted-foreground'>
                            {booking.nights}{' '}
                            {booking.nights === 1 ? 'night' : 'nights'} ·{' '}
                            {booking.guests}{' '}
                            {booking.guests === 1 ? 'guest' : 'guests'}
                          </p>
                        </div>
                      </TableCell>

                      {/* Status */}
                      <TableCell>
                        <BookingStatusBadge status={booking.status} />
                      </TableCell>

                      {/* Payment */}
                      <TableCell>
                        <BookingPaymentBadge status={booking.paymentStatus} />
                      </TableCell>

                      {/* Total */}
                      <TableCell className='text-right'>
                        <div className='space-y-1'>
                          <p className='font-semibold'>
                            {formatCurrency(booking.total)}
                          </p>

                          {booking.discount > 0 && (
                            <p className='text-xs text-muted-foreground'>
                              -{formatCurrency(booking.discount)} discount
                            </p>
                          )}
                        </div>
                      </TableCell>

                      {/* Actions */}
                      <TableCell className='text-right'>
                        <BookingActions
                          booking={booking}
                          onView={onView}
                          onEdit={onEdit}
                          onRefresh={onRefresh}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })
              }
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        {pageCount > 1 && !loading && (
          <div className='flex items-center justify-between border-t px-4 py-3'>
            <p className='text-sm text-muted-foreground'>
              Page {page} of {pageCount}
            </p>

            <div className='flex items-center gap-2'>
              <Button
                type='button'
                variant='outline'
                size='sm'
                disabled={page <= 1}
                onClick={() => onPageChange(page - 1)}
              >
                Previous
              </Button>

              <Button
                type='button'
                variant='outline'
                size='sm'
                disabled={page >= pageCount}
                onClick={() => onPageChange(page + 1)}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

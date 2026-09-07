'use client';

import { useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import type { Booking, BookingStatus, PaymentStatus } from '../types/booking';

interface BookingEditDialogProps {
  booking: Booking;

  open: boolean;

  onOpenChange: (open: boolean) => void;

  onSave?: (booking: Booking) => void;
}

const bookingStatuses: BookingStatus[] = [
  'PENDING',
  'CONFIRMED',
  'CHECKED_IN',
  'CHECKED_OUT',
  'CANCELLED',
];

const paymentStatuses: PaymentStatus[] = [
  'UNPAID',
  'PARTIAL',
  'PAID',
  'REFUNDED',
];

function createDraft(booking: Booking): Booking {
  return {
    ...booking,

    guest: {
      ...booking.guest,
    },

    room: {
      ...booking.room,
    },
  };
}

function calculateStay(
  checkIn: string,
  checkOut: string,
  roomRate: number,
  discount: number,
) {
  if (!checkIn || !checkOut) {
    return { nights: 0, subtotal: 0, tax: 0, total: 0 };
  }

  const nights = Math.max(
    0,
    Math.ceil(
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
        (1000 * 60 * 60 * 24),
    ),
  );
  const subtotal = roomRate * nights;
  const tax = subtotal * 0.12;

  return { nights, subtotal, tax, total: subtotal + tax - discount };
}

export function BookingEditDialog({
  booking,
  open,
  onOpenChange,
  onSave,
}: BookingEditDialogProps) {
  const [form, setForm] = useState<Booking>(() => createDraft(booking));

  function updateField<K extends keyof Booking>(field: K, value: Booking[K]) {
    setForm((current) => {
      const next = { ...current, [field]: value };

      if (field === 'checkIn' || field === 'checkOut') {
        return {
          ...next,
          ...calculateStay(
            next.checkIn,
            next.checkOut,
            next.roomRate,
            next.discount,
          ),
        };
      }

      return next;
    });
  }

  function updateGuest(field: keyof Booking['guest'], value: string) {
    setForm((current) => ({
      ...current,

      guest: {
        ...current.guest,

        [field]: value,
      },
    }));
  }

  function handleSave() {
    onSave?.(form);

    onOpenChange(false);
  }

  function handleCancel() {
    setForm(createDraft(booking));

    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className='
          max-h-[90vh]
          overflow-y-auto
          sm:max-w-2xl
        '
      >
        <DialogHeader>
          <DialogTitle>Edit Booking</DialogTitle>

          <DialogDescription>
            Update booking information for{' '}
            <span className='font-medium text-foreground'>
              {booking.bookingNumber}
            </span>
          </DialogDescription>
        </DialogHeader>

        <div className='space-y-6'>
          {/* Guest Information */}

          <section className='space-y-4'>
            <div>
              <h3 className='text-sm font-semibold'>Guest Information</h3>

              <p className='mt-1 text-xs text-muted-foreground'>
                Update the guest contact information.
              </p>
            </div>

            <div className='grid gap-4 sm:grid-cols-2'>
              <div className='space-y-2'>
                <label
                  htmlFor={`first-name-${booking.id}`}
                  className='text-sm font-medium'
                >
                  First Name
                </label>

                <Input
                  id={`first-name-${booking.id}`}
                  value={form.guest.firstName}
                  onChange={(event) =>
                    updateGuest('firstName', event.target.value)
                  }
                />
              </div>

              <div className='space-y-2'>
                <label
                  htmlFor={`last-name-${booking.id}`}
                  className='text-sm font-medium'
                >
                  Last Name
                </label>

                <Input
                  id={`last-name-${booking.id}`}
                  value={form.guest.lastName}
                  onChange={(event) =>
                    updateGuest('lastName', event.target.value)
                  }
                />
              </div>

              <div className='space-y-2'>
                <label
                  htmlFor={`email-${booking.id}`}
                  className='text-sm font-medium'
                >
                  Email
                </label>

                <Input
                  id={`email-${booking.id}`}
                  type='email'
                  value={form.guest.email}
                  onChange={(event) => updateGuest('email', event.target.value)}
                />
              </div>

              <div className='space-y-2'>
                <label
                  htmlFor={`phone-${booking.id}`}
                  className='text-sm font-medium'
                >
                  Contact Number
                </label>

                <Input
                  id={`phone-${booking.id}`}
                  value={form.guest.contactNumber ?? ''}
                  onChange={(event) =>
                    updateGuest('contactNumber', event.target.value)
                  }
                />
              </div>
            </div>
          </section>

          {/* Stay Information */}

          <section className='space-y-4'>
            <div>
              <h3 className='text-sm font-semibold'>Stay Information</h3>

              <p className='mt-1 text-xs text-muted-foreground'>
                Update the reservation details.
              </p>
            </div>

            <div className='grid gap-4 sm:grid-cols-2'>
              <div className='space-y-2'>
                <label
                  htmlFor={`check-in-${booking.id}`}
                  className='text-sm font-medium'
                >
                  Check-in
                </label>

                <Input
                  id={`check-in-${booking.id}`}
                  type='date'
                  value={form.checkIn.slice(0, 10)}
                  onChange={(event) =>
                    updateField('checkIn', event.target.value)
                  }
                />
              </div>

              <div className='space-y-2'>
                <label
                  htmlFor={`check-out-${booking.id}`}
                  className='text-sm font-medium'
                >
                  Check-out
                </label>

                <Input
                  id={`check-out-${booking.id}`}
                  type='date'
                  value={form.checkOut.slice(0, 10)}
                  onChange={(event) =>
                    updateField('checkOut', event.target.value)
                  }
                />
              </div>

              <div className='space-y-2'>
                <label
                  htmlFor={`guests-${booking.id}`}
                  className='text-sm font-medium'
                >
                  Guests
                </label>

                <Input
                  id={`guests-${booking.id}`}
                  type='number'
                  min={1}
                  value={form.guests}
                  onChange={(event) =>
                    updateField(
                      'guests',
                      Math.max(1, Number(event.target.value)),
                    )
                  }
                />
              </div>

              <div className='space-y-2'>
                <label
                  htmlFor={`room-${booking.id}`}
                  className='text-sm font-medium'
                >
                  Room
                </label>

                <Input
                  id={`room-${booking.id}`}
                  value={form.room.name}
                  disabled
                />
              </div>
            </div>
          </section>

          {/* Status */}

          <section className='space-y-4'>
            <div>
              <h3 className='text-sm font-semibold'>Booking Status</h3>

              <p className='mt-1 text-xs text-muted-foreground'>
                Update reservation and payment status.
              </p>
            </div>

            <div className='grid gap-4 sm:grid-cols-2'>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Booking Status</label>

                <Select
                  value={form.status}
                  onValueChange={(value) =>
                    updateField('status', value as BookingStatus)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder='Select status' />
                  </SelectTrigger>

                  <SelectContent>
                    {bookingStatuses.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status.replaceAll('_', ' ')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-medium'>Payment Status</label>

                <Select
                  value={form.paymentStatus}
                  onValueChange={(value) =>
                    updateField('paymentStatus', value as PaymentStatus)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder='Select payment status' />
                  </SelectTrigger>

                  <SelectContent>
                    {paymentStatuses.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>
        </div>

        <DialogFooter className='gap-2'>
          <Button type='button' variant='outline' onClick={handleCancel}>
            Cancel
          </Button>

          <Button type='button' onClick={handleSave}>
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

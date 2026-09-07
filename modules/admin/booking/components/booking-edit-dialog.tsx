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
  booking: Booking | null;
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

function createDraft(booking: Booking | null): Booking | null {
  if (!booking) return null;

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

export function BookingEditDialog({
  booking,
  open,
  onOpenChange,
  onSave,
}: BookingEditDialogProps) {
  const [form, setForm] = useState<Booking | null>(() => createDraft(booking));

  const [lastBookingId, setLastBookingId] = useState<string | null>(
    booking?.id ?? null,
  );

  /*
   * When a different booking is opened, create a fresh draft.
   *
   * This avoids useEffect + setState synchronization.
   */
  if (booking?.id !== lastBookingId) {
    setLastBookingId(booking?.id ?? null);
    setForm(createDraft(booking));
  }

  if (!form) return null;

  function updateField<K extends keyof Booking>(field: K, value: Booking[K]) {
    setForm((current) =>
      current ?
        {
          ...current,
          [field]: value,
        }
      : current,
    );
  }

  function updateGuest(field: keyof Booking['guest'], value: string) {
    setForm((current) =>
      current ?
        {
          ...current,
          guest: {
            ...current.guest,
            [field]: value,
          },
        }
      : current,
    );
  }

  function handleSave() {
    if (!form) return;

    onSave?.(form);
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-h-[90vh] overflow-y-auto sm:max-w-2xl'>
        <DialogHeader>
          <DialogTitle>Edit Booking</DialogTitle>

          <DialogDescription>
            Update booking information for {form.bookingNumber}.
          </DialogDescription>
        </DialogHeader>

        <div className='grid gap-6'>
          {/* Guest Information */}
          <section className='space-y-4'>
            <div>
              <h3 className='text-sm font-semibold'>Guest Information</h3>

              <p className='mt-1 text-xs text-muted-foreground'>
                Update the guest contact details.
              </p>
            </div>

            <div className='grid gap-4 sm:grid-cols-2'>
              <div className='space-y-2'>
                <label
                  htmlFor='booking-first-name'
                  className='text-sm font-medium'
                >
                  First Name
                </label>

                <Input
                  id='booking-first-name'
                  value={form.guest.firstName}
                  onChange={(event) =>
                    updateGuest('firstName', event.target.value)
                  }
                />
              </div>

              <div className='space-y-2'>
                <label
                  htmlFor='booking-last-name'
                  className='text-sm font-medium'
                >
                  Last Name
                </label>

                <Input
                  id='booking-last-name'
                  value={form.guest.lastName}
                  onChange={(event) =>
                    updateGuest('lastName', event.target.value)
                  }
                />
              </div>

              <div className='space-y-2'>
                <label htmlFor='booking-email' className='text-sm font-medium'>
                  Email
                </label>

                <Input
                  id='booking-email'
                  type='email'
                  value={form.guest.email}
                  onChange={(event) => updateGuest('email', event.target.value)}
                />
              </div>

              <div className='space-y-2'>
                <label htmlFor='booking-phone' className='text-sm font-medium'>
                  Contact Number
                </label>

                <Input
                  id='booking-phone'
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
                Update the reservation dates and guest count.
              </p>
            </div>

            <div className='grid gap-4 sm:grid-cols-2'>
              <div className='space-y-2'>
                <label
                  htmlFor='booking-check-in'
                  className='text-sm font-medium'
                >
                  Check-in
                </label>

                <Input
                  id='booking-check-in'
                  type='date'
                  value={form.checkIn.slice(0, 10)}
                  onChange={(event) =>
                    updateField('checkIn', event.target.value)
                  }
                />
              </div>

              <div className='space-y-2'>
                <label
                  htmlFor='booking-check-out'
                  className='text-sm font-medium'
                >
                  Check-out
                </label>

                <Input
                  id='booking-check-out'
                  type='date'
                  value={form.checkOut.slice(0, 10)}
                  onChange={(event) =>
                    updateField('checkOut', event.target.value)
                  }
                />
              </div>

              <div className='space-y-2'>
                <label htmlFor='booking-guests' className='text-sm font-medium'>
                  Guests
                </label>

                <Input
                  id='booking-guests'
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
                <label htmlFor='booking-room' className='text-sm font-medium'>
                  Room
                </label>

                <Input id='booking-room' value={form.room.name} disabled />
              </div>
            </div>
          </section>

          {/* Status */}
          <section className='space-y-4'>
            <div>
              <h3 className='text-sm font-semibold'>Booking Status</h3>

              <p className='mt-1 text-xs text-muted-foreground'>
                Manage reservation and payment status.
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
          <Button
            type='button'
            variant='outline'
            onClick={() => onOpenChange(false)}
          >
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

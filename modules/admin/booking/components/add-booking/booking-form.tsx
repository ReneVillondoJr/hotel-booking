'use client';

import { useState, type FormEvent, type ReactNode } from 'react';
import {
  CalendarDays,
  CreditCard,
  Hotel,
  Loader2,
  Mail,
  Phone,
  User,
  Users,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export interface NewBookingFormData {
  guestName: string;
  email: string;
  phone: string;
  roomId: string;
  checkIn: string;
  checkOut: string;
  adults: string;
  children: string;
  bookingStatus: string;
  paymentStatus: string;
  specialRequests: string;
}

interface NewBookingFormProps {
  onCancel?: () => void;
  onSubmit?: (data: NewBookingFormData) => void | Promise<void>;
}

const rooms = [
  { id: '101', name: 'Deluxe King Room', price: 4500 },
  { id: '102', name: 'Deluxe Twin Room', price: 4800 },
  { id: '201', name: 'Executive Suite', price: 7500 },
  { id: '301', name: 'Presidential Suite', price: 12000 },
];

const bookingStatuses: [string, string][] = [
  ['CONFIRMED', 'Confirmed'],
  ['PENDING', 'Pending'],
  ['CANCELLED', 'Cancelled'],
];

const paymentStatuses: [string, string][] = [
  ['PENDING', 'Pending'],
  ['PARTIAL', 'Partially Paid'],
  ['PAID', 'Paid'],
  ['REFUNDED', 'Refunded'],
];

const initialFormData: NewBookingFormData = {
  guestName: '',
  email: '',
  phone: '',
  roomId: '',
  checkIn: '',
  checkOut: '',
  adults: '1',
  children: '0',
  bookingStatus: 'CONFIRMED',
  paymentStatus: 'PENDING',
  specialRequests: '',
};

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className='space-y-1.5'>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}

function SectionTitle({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: ReactNode;
}) {
  return (
    <div className='mb-4 flex items-center gap-2'>
      <Icon className='size-4 text-muted-foreground' />
      <h2 className='text-sm font-semibold'>{children}</h2>
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  placeholder,
  options,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  options: [string, string][];
  onChange: (value: string | null) => void;
}) {
  return (
    <Field label={label} htmlFor={id}>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger id={id}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          {options.map(([value, label]) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  );
}

function IconInput({
  icon: Icon,
  ...props
}: React.ComponentProps<typeof Input> & {
  icon: React.ElementType;
}) {
  return (
    <div className='relative'>
      <Icon className='absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground' />

      <Input {...props} className='pl-9' />
    </div>
  );
}

export default function NewBookingForm({
  onCancel,
  onSubmit,
}: NewBookingFormProps) {
  const [formData, setFormData] = useState<NewBookingFormData>(initialFormData);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedRoom = rooms.find((room) => room.id === formData.roomId);

  function updateField(field: keyof NewBookingFormData, value: string | null) {
    setFormData((current) => ({
      ...current,
      [field]: value ?? '',
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await onSubmit?.(formData);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div className='grid gap-4 xl:grid-cols-[minmax(0,1fr)_340px]'>
        {/* Main */}
        <div className='space-y-4'>
          {/* Guest */}
          <Card>
            <CardContent className='p-5'>
              <SectionTitle icon={User}>Guest Information</SectionTitle>

              <div className='grid gap-4 md:grid-cols-2'>
                <Field label='Guest Name' htmlFor='guestName'>
                  <IconInput
                    id='guestName'
                    placeholder='Guest full name'
                    value={formData.guestName}
                    onChange={(e) => updateField('guestName', e.target.value)}
                    icon={User}
                    required
                  />
                </Field>

                <Field label='Email Address' htmlFor='email'>
                  <IconInput
                    id='email'
                    type='email'
                    placeholder='guest@example.com'
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    icon={Mail}
                    required
                  />
                </Field>

                <Field label='Phone Number' htmlFor='phone'>
                  <IconInput
                    id='phone'
                    type='tel'
                    placeholder='+63 912 345 6789'
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    icon={Phone}
                    required
                  />
                </Field>
              </div>
            </CardContent>
          </Card>

          {/* Stay */}
          <Card>
            <CardContent className='p-5'>
              <SectionTitle icon={Hotel}>Stay Information</SectionTitle>

              <div className='grid gap-4 md:grid-cols-2'>
                <div className='md:col-span-2'>
                  <SelectField
                    id='room'
                    label='Room'
                    value={formData.roomId}
                    placeholder='Select a room'
                    options={rooms.map((room) => [
                      room.id,
                      `${room.name} — ₱${room.price.toLocaleString()}/night`,
                    ])}
                    onChange={(value) => updateField('roomId', value)}
                  />
                </div>

                <Field label='Check-in' htmlFor='checkIn'>
                  <IconInput
                    id='checkIn'
                    type='date'
                    value={formData.checkIn}
                    onChange={(e) => updateField('checkIn', e.target.value)}
                    icon={CalendarDays}
                    required
                  />
                </Field>

                <Field label='Check-out' htmlFor='checkOut'>
                  <IconInput
                    id='checkOut'
                    type='date'
                    value={formData.checkOut}
                    onChange={(e) => updateField('checkOut', e.target.value)}
                    icon={CalendarDays}
                    required
                  />
                </Field>
              </div>
            </CardContent>
          </Card>

          {/* Guests */}
          <Card>
            <CardContent className='p-5'>
              <SectionTitle icon={Users}>Guests</SectionTitle>

              <div className='grid gap-4 md:grid-cols-2'>
                <SelectField
                  id='adults'
                  label='Adults'
                  value={formData.adults}
                  options={['1', '2', '3', '4', '5', '6'].map((value) => [
                    value,
                    `${value} Adult${value === '1' ? '' : 's'}`,
                  ])}
                  onChange={(value) => updateField('adults', value)}
                />

                <SelectField
                  id='children'
                  label='Children'
                  value={formData.children}
                  options={['0', '1', '2', '3', '4'].map((value) => [
                    value,
                    value === '0' ? 'No Children' : (
                      `${value} ${value === '1' ? 'Child' : 'Children'}`
                    ),
                  ])}
                  onChange={(value) => updateField('children', value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Requests */}
          <Card>
            <CardContent className='p-5'>
              <SectionTitle icon={CalendarDays}>Special Requests</SectionTitle>

              <Textarea
                placeholder='Enter special requests or guest preferences...'
                value={formData.specialRequests}
                onChange={(e) => updateField('specialRequests', e.target.value)}
                rows={3}
              />
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className='space-y-4'>
          {/* Summary */}
          <Card>
            <CardHeader className='px-5 py-4'>
              <CardTitle className='text-base'>Booking Summary</CardTitle>
            </CardHeader>

            <CardContent className='px-5 pb-5'>
              {selectedRoom ?
                <div className='space-y-4'>
                  <div className='rounded-lg border bg-muted/30 p-4'>
                    <p className='font-medium'>{selectedRoom.name}</p>

                    <p className='mt-1 text-sm text-muted-foreground'>
                      Room {selectedRoom.id}
                    </p>
                  </div>

                  <div className='flex items-center justify-between border-b pb-3'>
                    <span className='text-sm text-muted-foreground'>
                      Room rate
                    </span>

                    <span className='font-medium'>
                      ₱{selectedRoom.price.toLocaleString()}
                    </span>
                  </div>

                  <div className='flex items-center justify-between'>
                    <span className='font-medium'>Total / night</span>

                    <span className='text-lg font-semibold'>
                      ₱{selectedRoom.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              : <div className='rounded-lg border border-dashed p-6 text-center'>
                  <Hotel className='mx-auto size-5 text-muted-foreground' />

                  <p className='mt-2 text-sm text-muted-foreground'>
                    Select a room to view the booking summary.
                  </p>
                </div>
              }
            </CardContent>
          </Card>

          {/* Status */}
          <Card>
            <CardContent className='p-5'>
              <SectionTitle icon={CreditCard}>Booking & Payment</SectionTitle>

              <div className='space-y-4'>
                <SelectField
                  id='bookingStatus'
                  label='Booking Status'
                  value={formData.bookingStatus}
                  options={bookingStatuses}
                  onChange={(value) => updateField('bookingStatus', value)}
                />

                <SelectField
                  id='paymentStatus'
                  label='Payment Status'
                  value={formData.paymentStatus}
                  options={paymentStatuses}
                  onChange={(value) => updateField('paymentStatus', value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className='flex flex-col gap-2'>
            <Button type='submit' disabled={isSubmitting} className='w-full'>
              {isSubmitting ?
                <>
                  <Loader2 className='size-4 animate-spin' />
                  Creating...
                </>
              : <>
                  <CalendarDays className='size-4' />
                  Create Booking
                </>
              }
            </Button>

            <Button
              type='button'
              variant='outline'
              onClick={onCancel}
              disabled={isSubmitting}
              className='w-full'
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

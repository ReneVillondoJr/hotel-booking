'use client';

import { Search, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import type { BookingFilters as BookingFiltersType } from '@/modules/admin/modules/booking/types/booking-filter';
import { BOOKING_STATUSES } from '@/modules/admin/modules/booking/data/booking-status';
import { PAYMENT_STATUSES } from '@/modules/admin/modules/booking/data/booking-payment';

interface BookingFiltersProps {
  filters: BookingFiltersType;

  onFilterChange: <K extends keyof BookingFiltersType>(
    key: K,
    value: BookingFiltersType[K],
  ) => void;

  onClear: () => void;
}

export function BookingFilters({
  filters,
  onFilterChange,
  onClear,
}: BookingFiltersProps) {
  const hasFilters =
    filters.search !== '' ||
    filters.status !== 'ALL' ||
    filters.paymentStatus !== 'ALL' ||
    filters.room !== 'ALL';

  return (
    <div className='rounded-xl border bg-card p-4'>
      <div className='flex flex-col gap-3 lg:flex-row lg:items-center'>
        {/* Search */}
        <div className='relative flex-1'>
          <Search className='absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground' />

          <Input
            value={filters.search}
            onChange={(event) => onFilterChange('search', event.target.value)}
            placeholder='Search bookings, guests, rooms...'
            className='h-10 pl-9'
          />
        </div>

        {/* Status */}
        <Select
          value={filters.status}
          onValueChange={(value) =>
            onFilterChange('status', value as BookingFiltersType['status'])
          }
        >
          <SelectTrigger className='w-full lg:w-[170px]'>
            <SelectValue placeholder='Status' />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value='ALL'>All Statuses</SelectItem>

            {BOOKING_STATUSES.map((status) => (
              <SelectItem key={status.value} value={status.value}>
                {status.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Payment */}
        <Select
          value={filters.paymentStatus}
          onValueChange={(value) =>
            onFilterChange(
              'paymentStatus',
              value as BookingFiltersType['paymentStatus'],
            )
          }
        >
          <SelectTrigger className='w-full lg:w-[170px]'>
            <SelectValue placeholder='Payment' />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value='ALL'>All Payments</SelectItem>

            {PAYMENT_STATUSES.map((status) => (
              <SelectItem key={status.value} value={status.value}>
                {status.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Clear */}
        {hasFilters && (
          <Button variant='ghost' onClick={onClear} className='shrink-0'>
            <X className='size-4' />
            Clear
          </Button>
        )}
      </div>
    </div>
  );
}

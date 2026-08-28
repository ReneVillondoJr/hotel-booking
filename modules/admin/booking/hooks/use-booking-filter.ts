'use client';

import { useMemo, useState } from 'react';

import type { Booking } from '../types/booking';
import type { BookingFilters } from '../types/booking-filter';

export function useBookingFilters(bookings: Booking[]) {
  const [filters, setFilters] = useState<BookingFilters>({
    search: '',
    status: 'ALL',
    paymentStatus: 'ALL',
    room: 'ALL',
  });

  const filteredBookings = useMemo(() => {
    return bookings.filter((booking) => {
      const search = filters.search.toLowerCase();

      const matchesSearch =
        !search ||
        booking.bookingNumber.toLowerCase().includes(search) ||
        `${booking.guest.firstName} ${booking.guest.lastName}`
          .toLowerCase()
          .includes(search) ||
        booking.guest.email.toLowerCase().includes(search) ||
        booking.room.name.toLowerCase().includes(search);

      const matchesStatus =
        filters.status === 'ALL' || booking.status === filters.status;

      const matchesPayment =
        filters.paymentStatus === 'ALL' ||
        booking.paymentStatus === filters.paymentStatus;

      return matchesSearch && matchesStatus && matchesPayment;
    });
  }, [bookings, filters]);

  function updateFilter<K extends keyof BookingFilters>(
    key: K,
    value: BookingFilters[K],
  ) {
    setFilters((current) => ({
      ...current,
      [key]: value,
    }));
  }

  function clearFilters() {
    setFilters({
      search: '',
      status: 'ALL',
      paymentStatus: 'ALL',
      room: 'ALL',
    });
  }

  return {
    filters,
    filteredBookings,
    updateFilter,
    clearFilters,
  };
}

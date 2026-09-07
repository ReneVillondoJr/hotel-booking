'use client';

import { useState } from 'react';

import { bookings as localBookings } from '../data/booking';
import type { Booking } from '../types/booking';

export function useBookings() {
  const [bookings, setBookings] = useState<Booking[]>(() => [...localBookings]);

  function fetchBookings() {
    setBookings([...localBookings]);
    return Promise.resolve();
  }

  function updateBooking(updatedBooking: Booking) {
    setBookings((current) =>
      current.map((booking) =>
        booking.id === updatedBooking.id ?
          { ...updatedBooking, updatedAt: new Date().toISOString() }
        : booking,
      ),
    );
  }

  function deleteBooking(bookingToDelete: Booking) {
    setBookings((current) =>
      current.filter((booking) => booking.id !== bookingToDelete.id),
    );
  }

  return {
    bookings,
    loading: false,
    refetch: fetchBookings,
    updateBooking,
    deleteBooking,
  };
}

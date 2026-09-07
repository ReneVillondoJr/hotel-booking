'use client';

import { useState } from 'react';

import { bookings as localBookings } from '../data/booking';
import type { Booking } from '../types/booking';

export function useBookings() {
  const [bookings] = useState<Booking[]>(() => [...localBookings]);

  function fetchBookings() {
    return Promise.resolve();
  }

  return {
    bookings,
    loading: false,
    refetch: fetchBookings,
  };
}

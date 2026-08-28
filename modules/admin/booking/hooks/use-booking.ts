'use client';

import { useEffect, useState } from 'react';

import type { Booking } from '../types/booking';

export function useBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchBookings() {
    try {
      setLoading(true);

      const response = await fetch('/api/bookings');

      if (!response.ok) {
        throw new Error('Failed to fetch bookings');
      }

      const data = await response.json();

      setBookings(data.items ?? []);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBookings();
  }, []);

  return {
    bookings,
    loading,
    refetch: fetchBookings,
  };
}

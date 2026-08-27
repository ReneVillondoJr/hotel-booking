'use client';

import { useMemo, useState } from 'react';

import { BOOKING_PAGE_SIZE } from '../constant/booking';
import type { Booking } from '../types/booking';

export function useBookingPagination(bookings: Booking[]) {
  const [page, setPage] = useState(1);

  const pageSize = BOOKING_PAGE_SIZE;

  const pageCount = Math.max(1, Math.ceil(bookings.length / pageSize));

  const pageBookings = useMemo(() => {
    const start = (page - 1) * pageSize;

    return bookings.slice(start, start + pageSize);
  }, [bookings, page]);

  function changePage(nextPage: number) {
    setPage(Math.min(Math.max(nextPage, 1), pageCount));
  }

  return {
    page,
    pageSize,
    pageCount,
    pageBookings,
    changePage,
  };
}

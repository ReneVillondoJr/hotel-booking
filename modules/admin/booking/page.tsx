'use client';

import BookingHeader from './components/booking-header';
import { BookingSummary } from '@/modules/admin/booking/components/booking-summer';
import { BookingFilters } from '@/modules/admin/booking/components/booking-filters';
import { BookingTable } from './components/booking-table';

import { useBookings } from './hooks/use-booking';
import { useBookingFilters } from './hooks/use-booking-filter';
import { useBookingPagination } from './hooks/use-booking-pagination';

export default function BookingPage() {
  const { bookings, loading, refetch } = useBookings();

  const { filters, filteredBookings, updateFilter, clearFilters } =
    useBookingFilters(bookings);

  const { page, pageCount, pageBookings, changePage } =
    useBookingPagination(filteredBookings);

  return (
    <div className='space-y-6'>
      <BookingHeader />

      <BookingSummary bookings={bookings} />

      <BookingFilters
        filters={filters}
        onFilterChange={updateFilter}
        onClear={clearFilters}
      />

      <BookingTable
        bookings={pageBookings}
        loading={loading}
        page={page}
        pageCount={pageCount}
        onPageChange={changePage}
        onRefresh={refetch}
      />
    </div>
  );
}

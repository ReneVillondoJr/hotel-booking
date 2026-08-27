'use client';

export function useBookingActions() {
  async function confirmBooking(id: string) {
    return fetch(`/api/bookings/${id}/confirm`, {
      method: 'POST',
    });
  }

  async function cancelBooking(id: string) {
    return fetch(`/api/bookings/${id}/cancel`, {
      method: 'POST',
    });
  }

  async function checkInBooking(id: string) {
    return fetch(`/api/bookings/${id}/check-in`, {
      method: 'POST',
    });
  }

  async function checkOutBooking(id: string) {
    return fetch(`/api/bookings/${id}/check-out`, {
      method: 'POST',
    });
  }

  return {
    confirmBooking,
    cancelBooking,
    checkInBooking,
    checkOutBooking,
  };
}

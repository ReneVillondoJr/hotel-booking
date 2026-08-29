import type { Guest } from '../types/guest';

export function getGuestSummary(guests: Guest[]) {
  return {
    total: guests.length,

    active: guests.filter((guest) => guest.status === 'ACTIVE').length,

    inactive: guests.filter((guest) => guest.status === 'INACTIVE').length,

    blocked: guests.filter((guest) => guest.status === 'BLOCKED').length,

    verified: guests.filter(
      (guest) => guest.emailVerified && guest.phoneVerified,
    ).length,

    withBookings: guests.filter((guest) => guest.totalBookings > 0).length,

    totalRevenue: guests.reduce((total, guest) => total + guest.totalSpent, 0),
  };
}

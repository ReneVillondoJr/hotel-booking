'use client';

import { useMemo, useState } from 'react';

import type { BookingRoom, GuestInformation } from '../types/booking';

const defaultGuest: GuestInformation = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  specialRequests: '',
};

export function useBooking(room: BookingRoom) {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();

  const [guests, setGuests] = useState(1);

  const [guest, setGuest] = useState<GuestInformation>(defaultGuest);

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) {
      return 0;
    }

    const difference = checkOut.getTime() - checkIn.getTime();

    return Math.max(0, Math.ceil(difference / (1000 * 60 * 60 * 24)));
  }, [checkIn, checkOut]);

  const roomTotal = room.price * nights;

  const updateGuest = (field: keyof GuestInformation, value: string) => {
    setGuest((current) => ({
      ...current,
      [field]: value,
    }));
  };

  return {
    checkIn,
    checkOut,
    guests,
    guest,
    nights,
    roomTotal,

    setCheckIn,
    setCheckOut,
    setGuests,
    updateGuest,
  };
}

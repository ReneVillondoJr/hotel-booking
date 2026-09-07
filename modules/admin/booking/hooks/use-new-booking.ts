'use client';

import { useMemo, useState } from 'react';

import { initialBookingData, rooms } from '../data/booking';

import type { NewBookingFormData } from '../types/booking';

export function useNewBooking() {
  const [formData, setFormData] =
    useState<NewBookingFormData>(initialBookingData);

  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(field: keyof NewBookingFormData, value: string | null) {
    setFormData((current) => ({
      ...current,
      [field]: value ?? '',
    }));
  }

  const selectedRoom = useMemo(
    () => rooms.find((room) => room.id === formData.roomId),
    [formData.roomId],
  );

  const nights = useMemo(() => {
    if (!formData.checkIn || !formData.checkOut) {
      return 0;
    }

    const checkIn = new Date(formData.checkIn);
    const checkOut = new Date(formData.checkOut);

    const difference = checkOut.getTime() - checkIn.getTime();

    const calculatedNights = Math.ceil(difference / (1000 * 60 * 60 * 24));

    return calculatedNights > 0 ? calculatedNights : 0;
  }, [formData.checkIn, formData.checkOut]);

  const total = useMemo(() => {
    if (!selectedRoom || nights === 0) {
      return 0;
    }

    return selectedRoom.price * nights;
  }, [selectedRoom, nights]);

  async function submitBooking() {
    setIsSubmitting(true);

    try {
      // Connect your API/server action here.
      console.log('Booking:', {
        ...formData,
        nights,
        total,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function resetBooking() {
    setFormData(initialBookingData);
  }

  return {
    formData,
    updateField,

    selectedRoom,

    nights,
    total,

    isSubmitting,

    submitBooking,
    resetBooking,
  };
}

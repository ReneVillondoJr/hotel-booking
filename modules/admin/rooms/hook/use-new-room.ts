'use client';

import { useMemo, useState } from 'react';

import type { NewRoomFormData } from '../types/room';

const initialFormData: NewRoomFormData = {
  name: '',
  roomNumber: '',
  description: '',
  type: 'DELUXE',
  pricePerNight: '',
  currency: 'PHP',
  maxGuests: '2',
  adults: '2',
  children: '0',
  beds: '1',
  bedType: '1 King Bed',
  bathrooms: '1',
  size: '',
  status: 'AVAILABLE',
  amenities: [],
  images: [],
  isBookable: true,
  isFeatured: false,
};

export function useNewRoom() {
  const [formData, setFormData] = useState<NewRoomFormData>(initialFormData);

  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField<K extends keyof NewRoomFormData>(
    field: K,
    value: NewRoomFormData[K],
  ) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  }

  const slug = useMemo(() => {
    return formData.name
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }, [formData.name]);

  async function submitRoom() {
    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        slug,
        pricePerNight: Number(formData.pricePerNight),
        maxGuests: Number(formData.maxGuests),
        adults: Number(formData.adults),
        children: Number(formData.children),
        beds: Number(formData.beds),
        bathrooms: Number(formData.bathrooms),
        size: Number(formData.size),
      };

      console.log('Creating room:', payload);

      // TODO:
      // await fetch('/api/admin/rooms', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(payload),
      // });

      return payload;
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    formData,
    updateField,
    slug,
    isSubmitting,
    submitRoom,
  };
}

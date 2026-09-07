'use client';

import { useState } from 'react';

import type { NewGuestFormData } from '../types/guest';

const initialFormData: NewGuestFormData = {
  firstName: '',
  lastName: '',

  email: '',
  phone: '',

  gender: 'MALE',
  dateOfBirth: '',

  address: '',
  city: '',
  state: '',
  country: 'Philippines',
  postalCode: '',

  nationality: 'Filipino',
  idType: 'Passport',
  idNumber: '',

  status: 'ACTIVE',

  notes: '',

  hasAccount: false,
  emailVerified: false,
  phoneVerified: false,
};

export function useNewGuest() {
  const [formData, setFormData] = useState<NewGuestFormData>(initialFormData);

  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField<K extends keyof NewGuestFormData>(
    field: K,
    value: NewGuestFormData[K],
  ) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function submitGuest() {
    setIsSubmitting(true);

    try {
      /*
       * Replace this with your API/server action.
       *
       * Example:
       *
       * await createGuest(formData);
       */

      console.log('Creating guest:', formData);

      await new Promise((resolve) => setTimeout(resolve, 500));

      return formData;
    } finally {
      setIsSubmitting(false);
    }
  }

  function resetForm() {
    setFormData(initialFormData);
  }

  return {
    formData,
    isSubmitting,
    updateField,
    submitGuest,
    resetForm,
  };
}

'use client';

import type { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

import AddressInformation from './address-information';
import GuestActions from './guest-actions';
import GuestHeader from './guest-header';
import GuestNotes from './guest-notes';
import AccountInformation from './account-information';
import ContactInformation from './contact-information';
import IdentityInformation from './identity-information';
import PersonalInformation from './personal-information';

import { useNewGuest } from '../../hook/use-new-guest';

export default function AddGuestPageClient() {
  const router = useRouter();

  const { formData, isSubmitting, updateField, submitGuest } = useNewGuest();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await submitGuest();

      router.push('/admin/guests');
    } catch (error) {
      console.error('Failed to create guest:', error);
    }
  }

  function handleCancel() {
    router.push('/admin/guests');
  }

  return (
    <div className='space-y-5'>
      <GuestHeader />

      <form onSubmit={handleSubmit} className='mx-auto max-w-5xl space-y-4'>
        <PersonalInformation
          firstName={formData.firstName}
          lastName={formData.lastName}
          gender={formData.gender}
          dateOfBirth={formData.dateOfBirth}
          onChange={updateField}
        />

        <ContactInformation
          email={formData.email}
          phone={formData.phone}
          onChange={updateField}
        />

        <AddressInformation
          address={formData.address}
          city={formData.city}
          state={formData.state}
          country={formData.country}
          postalCode={formData.postalCode}
          onChange={updateField}
        />

        <IdentityInformation
          nationality={formData.nationality}
          idType={formData.idType}
          idNumber={formData.idNumber}
          onChange={updateField}
        />

        <AccountInformation
          status={formData.status}
          hasAccount={formData.hasAccount}
          emailVerified={formData.emailVerified}
          phoneVerified={formData.phoneVerified}
          onChange={updateField}
        />

        <GuestNotes notes={formData.notes} onChange={updateField} />

        <GuestActions isSubmitting={isSubmitting} onCancel={handleCancel} />
      </form>
    </div>
  );
}

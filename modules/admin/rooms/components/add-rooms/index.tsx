'use client';

import type { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

import BasicInformation from './basic-information';
import CapacityInformation from './capacity-information';
import RoomActions from './room-actions';
import RoomAmenities from './room-amenities';
import RoomDetails from './room-details';
import RoomHeader from './room-header';
import RoomStatus from './room-status';

import { useNewRoom } from '@/modules/admin/rooms/hook/use-new-room';

export default function NewRoomPageClient() {
  const router = useRouter();

  const { formData, updateField, isSubmitting, submitRoom } = useNewRoom();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await submitRoom();
      router.push('/admin/rooms');
    } catch (error) {
      console.error('Failed to create room:', error);
    }
  }

  function handleCancel() {
    router.push('/admin/rooms');
  }

  return (
    <div className='space-y-5'>
      <RoomHeader />

      <form
        onSubmit={handleSubmit}
        className='grid gap-4 xl:grid-cols-[minmax(0,1fr)_340px]'
      >
        {/* Main */}
        <div className='space-y-4'>
          <BasicInformation
            name={formData.name}
            roomNumber={formData.roomNumber}
            description={formData.description}
            onChange={updateField}
          />

          <RoomDetails
            type={formData.type}
            pricePerNight={formData.pricePerNight}
            currency={formData.currency}
            beds={formData.beds}
            bedType={formData.bedType}
            bathrooms={formData.bathrooms}
            size={formData.size}
            onChange={updateField}
          />

          <CapacityInformation
            maxGuests={formData.maxGuests}
            adults={formData.adults}
            childCount={formData.children}
            onChange={updateField}
          />

          <RoomAmenities
            selectedAmenities={formData.amenities}
            onChange={(amenities) => updateField('amenities', amenities)}
          />
        </div>

        {/* Sidebar */}
        <div className='space-y-4'>
          <RoomStatus
            isBookable={formData.isBookable}
            isFeatured={formData.isFeatured}
            onChange={updateField}
          />

          <RoomActions isSubmitting={isSubmitting} onCancel={handleCancel} />
        </div>
      </form>
    </div>
  );
}

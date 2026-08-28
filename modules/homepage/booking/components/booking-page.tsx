'use client';

import { bookingRooms } from '../data/booking';
import { useBooking } from '../hooks/use-booking';

import BookingProgress from './booking-progress';
import BookingSummary from './booking-summary';
import GuestInformationForm from './guest-information-form';
import RoomSelection from './room-selection';

export default function BookingPage() {
  const room = bookingRooms[0];

  const booking = useBooking(room);

  return (
    <main className='min-h-screen bg-background'>
      <div className='mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12'>
        {/* Header */}
        <header className='max-w-2xl'>
          <p className='hotel-eyebrow'>Reserve your stay</p>

          <h1 className='hotel-heading mt-2 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl'>
            Complete your booking.
          </h1>

          <p className='mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base'>
            Choose your room, provide your details, and confirm your stay at
            Lumora.
          </p>
        </header>

        {/* Progress */}
        <div className='mt-8'>
          <BookingProgress />
        </div>

        {/* Main Content */}
        <div className='mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_360px] xl:gap-8'>
          {/* Left Column */}
          <div className='min-w-0 space-y-6'>
            <RoomSelection
              room={room}
              checkIn={booking.checkIn}
              checkOut={booking.checkOut}
              setCheckIn={booking.setCheckIn}
              setCheckOut={booking.setCheckOut}
              guests={booking.guests}
              setGuests={booking.setGuests}
            />

            <GuestInformationForm
              guest={booking.guest}
              updateGuest={booking.updateGuest}
            />
          </div>

          {/* Right Column */}
          <BookingSummary
            room={room}
            checkIn={booking.checkIn}
            checkOut={booking.checkOut}
            guests={booking.guests}
            nights={booking.nights}
            roomTotal={booking.roomTotal}
          />
        </div>
      </div>
    </main>
  );
}

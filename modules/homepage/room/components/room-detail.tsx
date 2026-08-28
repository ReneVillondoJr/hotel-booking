import Image from 'next/image';
import Link from 'next/link';

import { ArrowLeft, ArrowUpRight, Check, Users } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import type { Room } from '../types/room';

interface RoomDetailProps {
  room: Room;
}

export default function RoomDetail({ room }: RoomDetailProps) {
  return (
    <main className='min-h-screen bg-background'>
      <div className='mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-12'>
        {/* Back */}
        <Link
          href='/guest/rooms'
          className='mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground'
        >
          <ArrowLeft className='size-4' />
          Back to rooms
        </Link>

        {/* Hero image */}
        <div className='relative aspect-[16/8] overflow-hidden rounded-[2rem] shadow-xl sm:aspect-[16/7]'>
          <Image
            src={room.image}
            alt={room.name}
            fill
            priority
            className='object-cover'
            sizes='100vw'
          />

          <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />

          <div className='absolute bottom-6 left-6 right-6 text-white sm:bottom-8 sm:left-8'>
            <span className='inline-flex rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-foreground backdrop-blur'>
              {room.type}
            </span>

            <h1 className='mt-3 text-3xl font-semibold tracking-tight sm:text-5xl'>
              {room.name}
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className='mt-10 grid gap-12 lg:grid-cols-[1fr_380px]'>
          {/* Main */}
          <div>
            <p className='max-w-3xl text-base leading-8 text-muted-foreground'>
              {room.description}
            </p>

            <div className='mt-7 inline-flex items-center gap-3 rounded-full bg-muted px-4 py-2.5 text-sm'>
              <Users className='size-4 text-primary' />
              Up to {room.maxGuests} {room.maxGuests === 1 ? 'guest' : 'guests'}
            </div>

            <Separator className='my-10' />

            <div>
              <p className='hotel-eyebrow'>Everything you need</p>

              <h2 className='mt-2 text-2xl font-semibold'>Room amenities</h2>

              <div className='mt-6 grid gap-3 sm:grid-cols-2'>
                {room.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className='flex items-center gap-3 rounded-2xl border bg-card p-4 transition hover:bg-muted/50'
                  >
                    <span className='flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10'>
                      <Check className='size-4 text-primary' />
                    </span>

                    <span className='text-sm font-medium'>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking card */}
          <Card className='h-fit rounded-3xl border-0 p-6 shadow-xl ring-1 ring-border/60 lg:sticky lg:top-6'>
            <div className='flex items-start justify-between'>
              <div>
                <p className='text-sm text-muted-foreground'>Starting from</p>

                <div className='mt-1 flex items-baseline gap-1'>
                  <span className='text-3xl font-semibold text-primary'>
                    ${room.price}
                  </span>

                  <span className='text-sm text-muted-foreground'>/ night</span>
                </div>
              </div>

              <div className='flex size-10 items-center justify-center rounded-full bg-primary/10'>
                <ArrowUpRight className='size-5 text-primary' />
              </div>
            </div>

            <Separator className='my-6' />

            <div className='rounded-2xl bg-muted/60 p-4'>
              <p className='text-sm font-medium'>Ready to stay?</p>

              <p className='mt-1 text-sm leading-6 text-muted-foreground'>
                Choose your dates and continue to complete your reservation.
              </p>
            </div>

            <Link
              href={`/guest/booking?room=${room.id}`}
              className='mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90'
            >
              Book This Room
              <ArrowUpRight className='size-4' />
            </Link>

            <p className='mt-4 text-center text-xs text-muted-foreground'>
              No payment required to explore availability
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
}

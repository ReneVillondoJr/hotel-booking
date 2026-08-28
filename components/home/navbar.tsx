'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navigation = [
  { label: 'Rooms', href: '#rooms' },
  { label: 'Experiences', href: '#experience' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  return (
    <header className='absolute inset-x-0 top-0 z-50'>
      <div className='mx-auto max-w-7xl px-5 pt-5 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <Link
            href='/'
            className='text-xl font-semibold tracking-[0.2em] text-white'
          >
            LUMORA
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden items-center gap-1 rounded-full border border-white/15 bg-black/10 p-1.5 backdrop-blur-md md:flex'>
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className='rounded-full px-4 py-2 text-sm font-medium text-white/75 transition-all hover:bg-white/10 hover:text-white'
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Booking */}
          <Link
            href='/guest/booking'
            className='hidden h-10 items-center rounded-full bg-white px-5 text-sm font-medium text-stone-900 transition-all hover:bg-white/90 md:inline-flex'
          >
            Book Your Stay
          </Link>

          {/* Mobile */}
          <Sheet>
            <SheetTrigger
              className='inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/10 text-white backdrop-blur-md transition hover:bg-white/15 md:hidden'
              aria-label='Open menu'
            >
              <Menu className='size-5' />
            </SheetTrigger>

            <SheetContent side='right' className='w-[300px] sm:w-[360px]'>
              <div className='flex h-full flex-col'>
                {/* Mobile Brand */}
                <div className='flex items-center justify-between'>
                  <Link
                    href='/'
                    className='text-lg font-semibold tracking-[0.18em]'
                  >
                    LUMORA
                  </Link>
                </div>

                {/* Navigation */}
                <nav className='mt-12 flex flex-col gap-1'>
                  {navigation.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className='rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-muted hover:text-foreground'
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* Booking */}
                <Link
                  href='/guest/booking'
                  className='mt-6 flex h-12 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground transition hover:bg-primary/90'
                >
                  Book Your Stay
                </Link>

                {/* Footer */}
                <div className='mt-auto border-t pt-6'>
                  <p className='text-xs leading-5 text-muted-foreground'>
                    A thoughtful place to stay.
                  </p>

                  <p className='mt-2 text-xs text-muted-foreground'>
                    © {new Date().getFullYear()} Lumora Hotel
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

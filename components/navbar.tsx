'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navigation = [
  { label: 'Rooms', href: '#rooms' },
  { label: 'Experience', href: '#experience' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  return (
    <header className='absolute inset-x-0 top-0 z-50'>
      <div className='mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8'>
        {/* Logo */}
        <Link
          href='/'
          className='text-xl font-semibold tracking-[0.12em] text-white'
        >
          LUMORA
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden items-center gap-8 md:flex'>
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className='text-sm font-medium text-white/85 transition hover:text-white'
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Booking */}
        <Link
          href='/guest/booking'
          className='hidden h-10 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-stone-900 transition hover:bg-white/90 md:inline-flex'
        >
          Book Your Stay
        </Link>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className='inline-flex size-10 items-center justify-center rounded-md text-white transition hover:bg-white/10 hover:text-white md:hidden'>
            <Menu className='size-5' />
            <span className='sr-only'>Open menu</span>
          </SheetTrigger>

          <SheetContent>
            <div className='mt-8 flex flex-col gap-6'>
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className='text-lg font-medium'
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href='/guest/booking'
                className='mt-2 inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition hover:bg-primary/90'
              >
                Book Your Stay
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

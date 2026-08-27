'use client';

import Link from 'next/link';

import {
  BedDouble,
  CalendarCheck,
  LayoutDashboard,
  Settings,
  Users,
} from 'lucide-react';

const navigation = [
  {
    label: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    label: 'Bookings',
    href: '/admin/bookings',
    icon: CalendarCheck,
  },
  {
    label: 'Rooms',
    href: '/admin/rooms',
    icon: BedDouble,
  },
  {
    label: 'Guests',
    href: '/admin/guests',
    icon: Users,
  },
  {
    label: 'Settings',
    href: '/admin/settings',
    icon: Settings,
  },
];

export default function AdminSidebar() {
  return (
    <aside className='fixed inset-y-0 left-0 z-40 hidden w-64 border-r bg-background lg:block'>
      <div className='flex h-16 items-center border-b px-6'>
        <Link href='/admin' className='text-lg font-semibold tracking-tight'>
          Hotel Admin
        </Link>
      </div>

      <nav className='space-y-1 p-4'>
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className='flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
            >
              <Icon className='size-4' />

              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

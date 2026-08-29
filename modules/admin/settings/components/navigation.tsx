'use client';

import {
  Bell,
  Building2,
  CalendarCheck,
  CreditCard,
  FileText,
  LockKeyhole,
  Palette,
  Phone,
} from 'lucide-react';

import { cn } from '@/lib/utils';

import type { SettingsSection } from '../types/settings';

interface SettingsNavigationProps {
  activeSection: SettingsSection;

  onSectionChange: (section: SettingsSection) => void;
}

const navigation = [
  {
    id: 'HOTEL' as const,
    label: 'Hotel',
    description: 'General hotel information',
    icon: Building2,
  },
  {
    id: 'CONTACT' as const,
    label: 'Contact',
    description: 'Contact and address details',
    icon: Phone,
  },
  {
    id: 'BOOKING' as const,
    label: 'Booking',
    description: 'Reservation rules',
    icon: CalendarCheck,
  },
  {
    id: 'PAYMENT' as const,
    label: 'Payment',
    description: 'Payment and tax settings',
    icon: CreditCard,
  },
  {
    id: 'NOTIFICATIONS' as const,
    label: 'Notifications',
    description: 'Email and booking alerts',
    icon: Bell,
  },
  {
    id: 'POLICIES' as const,
    label: 'Policies',
    description: 'Hotel policies',
    icon: FileText,
  },
  {
    id: 'APPEARANCE' as const,
    label: 'Appearance',
    description: 'Website appearance',
    icon: Palette,
  },
  {
    id: 'SECURITY' as const,
    label: 'Security',
    description: 'Account and access settings',
    icon: LockKeyhole,
  },
];

export default function SettingsNavigation({
  activeSection,
  onSectionChange,
}: SettingsNavigationProps) {
  return (
    <nav className='flex gap-2 overflow-x-auto lg:flex-col'>
      {navigation.map((item) => {
        const Icon = item.icon;

        const isActive = activeSection === item.id;

        return (
          <button
            key={item.id}
            type='button'
            onClick={() => onSectionChange(item.id)}
            className={cn(
              'flex min-w-[180px] items-center gap-3 rounded-lg px-3 py-3 text-left transition-colors lg:min-w-0',
              isActive ? 'bg-muted' : 'hover:bg-muted/60',
            )}
          >
            <div className='flex size-9 shrink-0 items-center justify-center rounded-md border bg-background'>
              <Icon className='size-4' />
            </div>

            <div className='min-w-0'>
              <p className='text-sm font-medium'>{item.label}</p>

              <p className='truncate text-xs text-muted-foreground'>
                {item.description}
              </p>
            </div>
          </button>
        );
      })}
    </nav>
  );
}

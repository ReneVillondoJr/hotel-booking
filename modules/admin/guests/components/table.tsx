'use client';

import { Mail, Phone, Users } from 'lucide-react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import type { Guest } from '../types/guest';

import GuestActions from './actions';
import GuestStatusBadge from './status-badge';

interface GuestTableProps {
  guests: Guest[];
}

export default function GuestTable({ guests }: GuestTableProps) {
  if (guests.length === 0) {
    return (
      <div className='flex min-h-[300px] flex-col items-center justify-center rounded-lg border border-dashed'>
        <Users className='size-10 text-muted-foreground' />

        <h3 className='mt-4 font-semibold'>No guests found</h3>

        <p className='mt-1 text-sm text-muted-foreground'>
          Try adjusting your search or filters.
        </p>
      </div>
    );
  }

  return (
    <div className='overflow-hidden rounded-lg border'>
      <div className='overflow-x-auto'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Guest</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Bookings</TableHead>
              <TableHead>Total Spent</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className='text-right'>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {guests.map((guest) => (
              <TableRow key={guest.id}>
                <TableCell>
                  <div>
                    <p className='font-medium'>
                      {guest.firstName} {guest.lastName}
                    </p>

                    <p className='text-sm text-muted-foreground'>
                      {guest.nationality ?? 'Guest'}
                    </p>
                  </div>
                </TableCell>

                <TableCell>
                  <div className='space-y-1'>
                    <div className='flex items-center gap-2 text-sm'>
                      <Mail className='size-3.5 text-muted-foreground' />

                      <span>{guest.email}</span>
                    </div>

                    <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                      <Phone className='size-3.5' />

                      <span>{guest.phone}</span>
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  <div>
                    <p className='font-medium'>{guest.totalBookings}</p>

                    <p className='text-xs text-muted-foreground'>
                      {guest.completedBookings} completed
                    </p>
                  </div>
                </TableCell>

                <TableCell>
                  <span className='font-medium'>
                    ₱{guest.totalSpent.toLocaleString()}
                  </span>
                </TableCell>

                <TableCell>
                  <GuestStatusBadge status={guest.status} />
                </TableCell>

                <TableCell className='text-right'>
                  <GuestActions guestId={guest.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

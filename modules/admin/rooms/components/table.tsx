'use client';

import Image from 'next/image';

import { BedDouble, Users } from 'lucide-react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import type { Room } from '../types/room';

import RoomActions from './actions';
import RoomStatusBadge from './status-padge';

interface RoomTableProps {
  rooms: Room[];
}

export default function RoomTable({ rooms }: RoomTableProps) {
  if (rooms.length === 0) {
    return (
      <div className='flex min-h-[300px] flex-col items-center justify-center rounded-lg border border-dashed'>
        <BedDouble className='size-10 text-muted-foreground' />

        <h3 className='mt-4 font-semibold'>No rooms found</h3>

        <p className='mt-1 text-sm text-muted-foreground'>
          Try adjusting your search or filters.
        </p>
      </div>
    );
  }

  return (
    <div className='rounded-lg border'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Room</TableHead>

            <TableHead>Type</TableHead>

            <TableHead>Capacity</TableHead>

            <TableHead>Price</TableHead>

            <TableHead>Status</TableHead>

            <TableHead className='text-right'>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {rooms.map((room) => {
            const coverImage =
              room.images.find((image) => image.isCover) ?? room.images[0];

            return (
              <TableRow key={room.id}>
                <TableCell>
                  <div className='flex items-center gap-3'>
                    <div className='size-12 shrink-0 overflow-hidden rounded-md bg-muted'>
                      {coverImage && (
                        <Image
                          src={coverImage.url}
                          alt={coverImage.alt}
                          width={48}
                          height={48}
                          unoptimized
                          className='size-12 object-cover'
                        />
                      )}
                    </div>

                    <div>
                      <p className='font-medium'>{room.name}</p>

                      <p className='text-sm text-muted-foreground'>
                        Room {room.roomNumber}
                      </p>
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  <span className='capitalize'>{room.type.toLowerCase()}</span>
                </TableCell>

                <TableCell>
                  <div className='flex items-center gap-2 text-sm'>
                    <Users className='size-4 text-muted-foreground' />
                    {room.maxGuests} Guests
                  </div>
                </TableCell>

                <TableCell>
                  <div>
                    <p className='font-medium'>
                      ₱{room.pricePerNight.toLocaleString()}
                    </p>

                    <p className='text-xs text-muted-foreground'>per night</p>
                  </div>
                </TableCell>

                <TableCell>
                  <RoomStatusBadge status={room.status} />
                </TableCell>

                <TableCell className='text-right'>
                  <RoomActions roomId={room.id} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

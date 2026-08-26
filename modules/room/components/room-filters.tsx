'use client';

import type { Dispatch, SetStateAction } from 'react';

import { Search, SlidersHorizontal, Users, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import type { RoomType } from '../types/room';

interface RoomFiltersProps {
  search: string;
  setSearch: (value: string) => void;
  type: RoomType | 'ALL';
  setType: Dispatch<SetStateAction<RoomType | 'ALL'>>;
  maxGuests: number | 'ALL';
  setMaxGuests: Dispatch<SetStateAction<number | 'ALL'>>;
  onClear: () => void;
}

export default function RoomFilters({
  search,
  setSearch,
  type,
  setType,
  maxGuests,
  setMaxGuests,
  onClear,
}: RoomFiltersProps) {
  const hasFilters =
    search.trim() !== '' || type !== 'ALL' || maxGuests !== 'ALL';

  return (
    <div className='rounded-3xl border bg-card shadow-md'>
      <div className='grid md:grid-cols-[minmax(0,1fr)_200px_180px]'>
        {/* Search */}
        <div className='border-b p-4 md:border-b-0 md:border-r'>
          <div className='mb-2 flex items-center gap-2'>
            <Search className='size-3.5 text-primary' />

            <span className='text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground'>
              Search
            </span>
          </div>

          <Input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder='Search rooms or suites...'
            className='h-8 border-0 bg-transparent px-0 text-sm shadow-none focus-visible:ring-0'
          />
        </div>

        {/* Room Type */}
        <div className='border-b p-4 md:border-b-0 md:border-r'>
          <div className='mb-2 flex items-center gap-2'>
            <SlidersHorizontal className='size-3.5 text-primary' />

            <span className='text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground'>
              Room type
            </span>
          </div>

          <Select
            value={type}
            onValueChange={(value) => {
              setType(value as RoomType | 'ALL');
            }}
          >
            <SelectTrigger className='h-8 border-0 bg-transparent px-0 text-sm shadow-none focus:ring-0'>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value='ALL'>All room types</SelectItem>
              <SelectItem value='DELUXE'>Deluxe</SelectItem>
              <SelectItem value='SUITE'>Suite</SelectItem>
              <SelectItem value='PREMIER'>Premier</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Guests */}
        <div className='p-4'>
          <div className='mb-2 flex items-center gap-2'>
            <Users className='size-3.5 text-primary' />

            <span className='text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground'>
              Guests
            </span>
          </div>

          <Select
            value={String(maxGuests)}
            onValueChange={(value) => {
              setMaxGuests(value === 'ALL' ? 'ALL' : Number(value));
            }}
          >
            <SelectTrigger className='h-8 border-0 bg-transparent px-0 text-sm shadow-none focus:ring-0'>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value='ALL'>Any guests</SelectItem>
              <SelectItem value='1'>1+ guest</SelectItem>
              <SelectItem value='2'>2+ guests</SelectItem>
              <SelectItem value='3'>3+ guests</SelectItem>
              <SelectItem value='4'>4+ guests</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Active filters */}
      {hasFilters && (
        <div className='flex items-center justify-between border-t bg-muted/30 px-4 py-2.5'>
          <p className='text-xs text-muted-foreground'>Filters applied</p>

          <Button
            type='button'
            variant='ghost'
            onClick={onClear}
            className='h-7 rounded-full px-2.5 text-xs text-muted-foreground hover:text-foreground'
          >
            <X className='size-3' />
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
}

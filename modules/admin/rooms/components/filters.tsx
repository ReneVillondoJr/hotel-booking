'use client';

import { Search, SlidersHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import type { RoomStatus, RoomType } from '../types/room';

interface RoomFiltersProps {
  search: string;
  status: RoomStatus | 'ALL';
  type: RoomType | 'ALL';

  onSearchChange: (value: string) => void;
  onStatusChange: (value: RoomStatus | 'ALL') => void;

  onTypeChange: (value: RoomType | 'ALL') => void;

  onReset: () => void;
}

export default function RoomFilters({
  search,
  status,
  type,
  onSearchChange,
  onStatusChange,
  onTypeChange,
  onReset,
}: RoomFiltersProps) {
  return (
    <div className='flex flex-col gap-3 lg:flex-row lg:items-center'>
      <div className='relative flex-1'>
        <Search className='absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground' />

        <Input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder='Search room name or number...'
          className='pl-9'
        />
      </div>

      <div className='grid grid-cols-2 gap-3 sm:flex'>
        <Select
          value={status}
          onValueChange={(value) => onStatusChange(value as RoomStatus | 'ALL')}
        >
          <SelectTrigger className='w-full sm:w-[160px]'>
            <SelectValue placeholder='Status' />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value='ALL'>All Status</SelectItem>

            <SelectItem value='AVAILABLE'>Available</SelectItem>

            <SelectItem value='OCCUPIED'>Occupied</SelectItem>

            <SelectItem value='RESERVED'>Reserved</SelectItem>

            <SelectItem value='MAINTENANCE'>Maintenance</SelectItem>

            <SelectItem value='CLEANING'>Cleaning</SelectItem>

            <SelectItem value='INACTIVE'>Inactive</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={type}
          onValueChange={(value) => onTypeChange(value as RoomType | 'ALL')}
        >
          <SelectTrigger className='w-full sm:w-[160px]'>
            <SelectValue placeholder='Room Type' />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value='ALL'>All Types</SelectItem>

            <SelectItem value='STANDARD'>Standard</SelectItem>

            <SelectItem value='DELUXE'>Deluxe</SelectItem>

            <SelectItem value='SUPERIOR'>Superior</SelectItem>

            <SelectItem value='EXECUTIVE'>Executive</SelectItem>

            <SelectItem value='SUITE'>Suite</SelectItem>

            <SelectItem value='FAMILY'>Family</SelectItem>

            <SelectItem value='PRESIDENTIAL'>Presidential</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        variant='outline'
        size='icon'
        onClick={onReset}
        className='hidden lg:flex'
      >
        <SlidersHorizontal className='size-4' />

        <span className='sr-only'>Reset filters</span>
      </Button>
    </div>
  );
}

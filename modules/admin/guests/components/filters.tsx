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

import type { GuestStatus } from '../types/guest';

interface GuestFiltersProps {
  search: string;
  status: GuestStatus | 'ALL';

  onSearchChange: (value: string) => void;

  onStatusChange: (value: GuestStatus | 'ALL') => void;

  onReset: () => void;
}

export default function GuestFilters({
  search,
  status,
  onSearchChange,
  onStatusChange,
  onReset,
}: GuestFiltersProps) {
  return (
    <div className='flex flex-col gap-3 lg:flex-row lg:items-center'>
      <div className='relative flex-1'>
        <Search className='absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground' />

        <Input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder='Search guest name, email, or phone...'
          className='pl-9'
        />
      </div>

      <Select
        value={status}
        onValueChange={(value) => onStatusChange(value as GuestStatus | 'ALL')}
      >
        <SelectTrigger className='w-full lg:w-[170px]'>
          <SelectValue placeholder='Status' />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value='ALL'>All Status</SelectItem>

          <SelectItem value='ACTIVE'>Active</SelectItem>

          <SelectItem value='INACTIVE'>Inactive</SelectItem>

          <SelectItem value='BLOCKED'>Blocked</SelectItem>
        </SelectContent>
      </Select>

      <Button
        variant='outline'
        size='icon'
        onClick={onReset}
        className='hidden lg:inline-flex'
        aria-label='Reset filters'
      >
        <SlidersHorizontal className='size-4' />
      </Button>
    </div>
  );
}

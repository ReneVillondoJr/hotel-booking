'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface BookingPaginationProps {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}

export function BookingPagination({
  page,
  pageCount,
  onPageChange,
}: BookingPaginationProps) {
  return (
    <div className='flex items-center justify-between border-t px-6 py-4'>
      <p className='text-sm text-muted-foreground'>
        Page {page} of {pageCount}
      </p>

      <div className='flex items-center gap-2'>
        <Button
          variant='outline'
          size='icon'
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
        >
          <ChevronLeft className='size-4' />
        </Button>

        <Button
          variant='outline'
          size='icon'
          disabled={page >= pageCount}
          onClick={() => onPageChange(page + 1)}
        >
          <ChevronRight className='size-4' />
        </Button>
      </div>
    </div>
  );
}

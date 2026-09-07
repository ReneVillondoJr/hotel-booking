'use client';

import { useState } from 'react';

import {
  AlertTriangle,
  Eye,
  MoreHorizontal,
  Pencil,
  UserX,
} from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from '@/components/ui/button';

interface GuestActionsProps {
  guestId: string;
  guestName?: string;
  email?: string;
  phone?: string;
  status?: string;
}

export default function GuestActions({
  guestId,
  guestName = 'Guest',
  email = '-',
  phone = '-',
  status = 'ACTIVE',
}: GuestActionsProps) {
  const [viewOpen, setViewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deactivateOpen, setDeactivateOpen] = useState(false);
  const [isDeactivating, setIsDeactivating] = useState(false);

  function handleView() {
    setViewOpen(true);
  }

  function handleEdit() {
    setEditOpen(true);
  }

  function handleDeactivate() {
    setDeactivateOpen(true);
  }

  async function confirmDeactivate() {
    try {
      setIsDeactivating(true);

      // TODO:
      // Connect your actual deactivate guest API/server action here.
      //
      // Example:
      // await deactivateGuest(guestId);

      console.log('Deactivating guest:', guestId);

      setDeactivateOpen(false);
    } catch (error) {
      console.error('Failed to deactivate guest:', error);
    } finally {
      setIsDeactivating(false);
    }
  }

  return (
    <>
      {/* ========================================= */}
      {/* ACTION MENU */}
      {/* ========================================= */}

      <DropdownMenu>
        <DropdownMenuTrigger
          type='button'
          className='inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-transparent p-0 text-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
          aria-label='Open guest actions'
        >
          <MoreHorizontal className='size-4' />
        </DropdownMenuTrigger>

        <DropdownMenuContent align='end' className='w-44'>
          {/* VIEW */}

          <DropdownMenuItem className='cursor-pointer' onClick={handleView}>
            <Eye className='mr-2 size-4 shrink-0' />
            <span>View Guest</span>
          </DropdownMenuItem>

          {/* EDIT */}

          <DropdownMenuItem className='cursor-pointer' onClick={handleEdit}>
            <Pencil className='mr-2 size-4 shrink-0' />
            <span>Edit Guest</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          {/* DEACTIVATE */}

          <DropdownMenuItem
            className='cursor-pointer text-destructive focus:text-destructive'
            onClick={handleDeactivate}
          >
            <UserX className='mr-2 size-4 shrink-0' />
            <span>Deactivate</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* ========================================= */}
      {/* VIEW GUEST */}
      {/* ========================================= */}

      <Dialog open={viewOpen} onOpenChange={setViewOpen}>
        <DialogContent className='max-w-2xl'>
          <DialogHeader>
            <DialogTitle>{guestName}</DialogTitle>

            <DialogDescription>
              Guest information and account details.
            </DialogDescription>
          </DialogHeader>

          <div className='space-y-5'>
            {/* Guest summary */}

            <div className='rounded-lg border bg-muted/30 p-4'>
              <div className='flex items-center justify-between gap-4'>
                <div>
                  <p className='text-sm text-muted-foreground'>Guest</p>

                  <p className='text-lg font-semibold'>{guestName}</p>
                </div>

                <span className='rounded-full bg-muted px-3 py-1 text-xs font-medium'>
                  {status}
                </span>
              </div>
            </div>

            {/* Guest details */}

            <div className='grid gap-3 sm:grid-cols-2'>
              <div className='rounded-lg border p-4'>
                <p className='text-xs text-muted-foreground'>Guest ID</p>

                <p className='mt-1 break-all text-sm font-medium'>{guestId}</p>
              </div>

              <div className='rounded-lg border p-4'>
                <p className='text-xs text-muted-foreground'>Status</p>

                <p className='mt-1 text-sm font-medium'>{status}</p>
              </div>

              <div className='rounded-lg border p-4 sm:col-span-2'>
                <p className='text-xs text-muted-foreground'>Email</p>

                <p className='mt-1 break-all text-sm font-medium'>{email}</p>
              </div>

              <div className='rounded-lg border p-4 sm:col-span-2'>
                <p className='text-xs text-muted-foreground'>Phone</p>

                <p className='mt-1 text-sm font-medium'>{phone}</p>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              type='button'
              variant='outline'
              onClick={() => setViewOpen(false)}
            >
              Close
            </Button>

            <Button
              type='button'
              onClick={() => {
                setViewOpen(false);
                setEditOpen(true);
              }}
            >
              <Pencil className='mr-2 size-4' />
              Edit Guest
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ========================================= */}
      {/* EDIT GUEST */}
      {/* ========================================= */}

      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className='max-h-[90vh] max-w-2xl overflow-y-auto'>
          <DialogHeader>
            <DialogTitle>Edit Guest</DialogTitle>

            <DialogDescription>
              Update the information for {guestName}.
            </DialogDescription>
          </DialogHeader>

          <form
            className='space-y-5'
            onSubmit={(event) => {
              event.preventDefault();

              // TODO:
              // Connect your actual update guest
              // API/server action here.

              setEditOpen(false);
            }}
          >
            {/* Name */}

            <div className='space-y-2'>
              <label
                htmlFor={`guest-name-${guestId}`}
                className='text-sm font-medium'
              >
                Guest Name
              </label>

              <input
                id={`guest-name-${guestId}`}
                defaultValue={guestName}
                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring'
              />
            </div>

            {/* Email */}

            <div className='space-y-2'>
              <label
                htmlFor={`guest-email-${guestId}`}
                className='text-sm font-medium'
              >
                Email
              </label>

              <input
                id={`guest-email-${guestId}`}
                type='email'
                defaultValue={email}
                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring'
              />
            </div>

            {/* Phone */}

            <div className='space-y-2'>
              <label
                htmlFor={`guest-phone-${guestId}`}
                className='text-sm font-medium'
              >
                Phone
              </label>

              <input
                id={`guest-phone-${guestId}`}
                type='tel'
                defaultValue={phone}
                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring'
              />
            </div>

            {/* Status */}

            <div className='space-y-2'>
              <label
                htmlFor={`guest-status-${guestId}`}
                className='text-sm font-medium'
              >
                Status
              </label>

              <select
                id={`guest-status-${guestId}`}
                defaultValue={status}
                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring'
              >
                <option value='ACTIVE'>Active</option>

                <option value='INACTIVE'>Inactive</option>
              </select>
            </div>

            <DialogFooter>
              <Button
                type='button'
                variant='outline'
                onClick={() => setEditOpen(false)}
              >
                Cancel
              </Button>

              <Button type='submit'>Save Changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* ========================================= */}
      {/* DEACTIVATE CONFIRMATION */}
      {/* ========================================= */}

      <Dialog open={deactivateOpen} onOpenChange={setDeactivateOpen}>
        <DialogContent className='max-w-md'>
          <DialogHeader>
            <div className='mb-2 flex size-10 items-center justify-center rounded-full bg-destructive/10'>
              <AlertTriangle className='size-5 text-destructive' />
            </div>

            <DialogTitle>Deactivate Guest?</DialogTitle>

            <DialogDescription>
              Are you sure you want to deactivate{' '}
              <span className='font-medium text-foreground'>{guestName}</span>?
            </DialogDescription>
          </DialogHeader>

          <div className='rounded-lg border bg-muted/30 p-4'>
            <div className='space-y-1'>
              <p className='text-sm font-medium'>{guestName}</p>

              <p className='text-xs text-muted-foreground'>{email}</p>

              <p className='text-xs text-muted-foreground'>
                Guest ID: {guestId}
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button
              type='button'
              variant='outline'
              disabled={isDeactivating}
              onClick={() => setDeactivateOpen(false)}
            >
              Cancel
            </Button>

            <Button
              type='button'
              variant='destructive'
              disabled={isDeactivating}
              onClick={confirmDeactivate}
            >
              <UserX className='mr-2 size-4' />

              {isDeactivating ? 'Deactivating...' : 'Deactivate'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

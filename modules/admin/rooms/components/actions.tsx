'use client';

import { useState } from 'react';

import {
  AlertTriangle,
  Eye,
  MoreHorizontal,
  Pencil,
  Trash2,
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

interface RoomActionsProps {
  roomId: string;
  roomName?: string;
  roomNumber?: string;
  roomType?: string;
  pricePerNight?: number;
  status?: string;
}

export default function RoomActions({
  roomId,
  roomName = 'Room',
  roomNumber = '-',
  roomType = 'STANDARD',
  pricePerNight = 0,
  status = 'AVAILABLE',
}: RoomActionsProps) {
  const [viewOpen, setViewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleView = () => {
    setViewOpen(true);
  };

  const handleEdit = () => {
    setEditOpen(true);
  };

  const handleDelete = () => {
    setDeleteOpen(true);
  };

  const confirmDelete = async () => {
    try {
      setIsDeleting(true);

      // TODO:
      // Replace this with your actual delete API call.
      //
      // Example:
      // await deleteRoom(roomId);

      console.log('Deleting room:', roomId);

      setDeleteOpen(false);
    } catch (error) {
      console.error('Failed to delete room:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      {/* ACTION MENU */}
      <DropdownMenu>
        <DropdownMenuTrigger
          type='button'
          className='inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-transparent p-0 text-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
          aria-label='Open room actions'
        >
          <MoreHorizontal className='size-4' />
        </DropdownMenuTrigger>

        <DropdownMenuContent align='end' className='w-44'>
          {/* VIEW */}
          <DropdownMenuItem className='cursor-pointer' onClick={handleView}>
            <Eye className='mr-2 size-4' />
            <span>View Room</span>
          </DropdownMenuItem>

          {/* EDIT */}
          <DropdownMenuItem className='cursor-pointer' onClick={handleEdit}>
            <Pencil className='mr-2 size-4' />
            <span>Edit Room</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          {/* DELETE */}
          <DropdownMenuItem
            className='cursor-pointer text-destructive focus:text-destructive'
            onClick={handleDelete}
          >
            <Trash2 className='mr-2 size-4' />
            <span>Delete Room</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* ========================================= */}
      {/* VIEW ROOM */}
      {/* ========================================= */}

      <Dialog open={viewOpen} onOpenChange={setViewOpen}>
        <DialogContent className='max-h-[90vh] max-w-2xl overflow-y-auto'>
          <DialogHeader>
            <DialogTitle>{roomName}</DialogTitle>

            <DialogDescription>
              Room {roomNumber} · {roomType}
            </DialogDescription>
          </DialogHeader>

          <div className='space-y-5'>
            <div className='rounded-lg border bg-muted/30 p-4'>
              <div className='flex items-center justify-between gap-4'>
                <div>
                  <p className='text-sm text-muted-foreground'>Room Number</p>

                  <p className='text-lg font-semibold'>{roomNumber}</p>
                </div>

                <span className='rounded-full bg-muted px-3 py-1 text-xs font-medium'>
                  {status}
                </span>
              </div>
            </div>

            <div className='grid gap-3 sm:grid-cols-2'>
              <div className='rounded-lg border p-4'>
                <p className='text-xs text-muted-foreground'>Room ID</p>

                <p className='mt-1 break-all text-sm font-medium'>{roomId}</p>
              </div>

              <div className='rounded-lg border p-4'>
                <p className='text-xs text-muted-foreground'>Room Type</p>

                <p className='mt-1 text-sm font-medium'>{roomType}</p>
              </div>

              <div className='rounded-lg border p-4'>
                <p className='text-xs text-muted-foreground'>Price Per Night</p>

                <p className='mt-1 text-sm font-semibold'>
                  ₱{pricePerNight.toLocaleString()}
                </p>
              </div>

              <div className='rounded-lg border p-4'>
                <p className='text-xs text-muted-foreground'>Status</p>

                <p className='mt-1 text-sm font-medium'>{status}</p>
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

                setTimeout(() => {
                  setEditOpen(true);
                }, 100);
              }}
            >
              <Pencil className='mr-2 size-4' />
              Edit Room
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ========================================= */}
      {/* EDIT ROOM */}
      {/* ========================================= */}

      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className='max-h-[90vh] max-w-2xl overflow-y-auto'>
          <DialogHeader>
            <DialogTitle>Edit Room</DialogTitle>

            <DialogDescription>
              Update the information for {roomName}.
            </DialogDescription>
          </DialogHeader>

          <form
            className='space-y-5'
            onSubmit={(event) => {
              event.preventDefault();

              // TODO:
              // Connect your updateRoom API here.

              setEditOpen(false);
            }}
          >
            <div className='space-y-2'>
              <label
                htmlFor={`room-name-${roomId}`}
                className='text-sm font-medium'
              >
                Room Name
              </label>

              <input
                id={`room-name-${roomId}`}
                defaultValue={roomName}
                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring'
              />
            </div>

            <div className='space-y-2'>
              <label
                htmlFor={`room-number-${roomId}`}
                className='text-sm font-medium'
              >
                Room Number
              </label>

              <input
                id={`room-number-${roomId}`}
                defaultValue={roomNumber}
                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring'
              />
            </div>

            <div className='grid gap-4 sm:grid-cols-2'>
              <div className='space-y-2'>
                <label
                  htmlFor={`room-type-${roomId}`}
                  className='text-sm font-medium'
                >
                  Room Type
                </label>

                <select
                  id={`room-type-${roomId}`}
                  defaultValue={roomType}
                  className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring'
                >
                  <option value='STANDARD'>Standard</option>
                  <option value='DELUXE'>Deluxe</option>
                  <option value='SUPERIOR'>Superior</option>
                  <option value='EXECUTIVE'>Executive</option>
                  <option value='SUITE'>Suite</option>
                  <option value='FAMILY'>Family</option>
                  <option value='PRESIDENTIAL'>Presidential</option>
                </select>
              </div>

              <div className='space-y-2'>
                <label
                  htmlFor={`room-price-${roomId}`}
                  className='text-sm font-medium'
                >
                  Price Per Night
                </label>

                <input
                  id={`room-price-${roomId}`}
                  type='number'
                  min='0'
                  defaultValue={pricePerNight}
                  className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring'
                />
              </div>
            </div>

            <div className='space-y-2'>
              <label
                htmlFor={`room-status-${roomId}`}
                className='text-sm font-medium'
              >
                Status
              </label>

              <select
                id={`room-status-${roomId}`}
                defaultValue={status}
                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring'
              >
                <option value='AVAILABLE'>Available</option>
                <option value='OCCUPIED'>Occupied</option>
                <option value='RESERVED'>Reserved</option>
                <option value='MAINTENANCE'>Maintenance</option>
                <option value='CLEANING'>Cleaning</option>
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
      {/* DELETE CONFIRMATION */}
      {/* ========================================= */}

      <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <DialogContent className='max-w-md'>
          <DialogHeader>
            <div className='mb-2 flex size-10 items-center justify-center rounded-full bg-destructive/10'>
              <AlertTriangle className='size-5 text-destructive' />
            </div>

            <DialogTitle>Delete Room?</DialogTitle>

            <DialogDescription>
              Are you sure you want to delete{' '}
              <span className='font-medium text-foreground'>{roomName}</span>?
              This action cannot be undone.
            </DialogDescription>
          </DialogHeader>

          <div className='rounded-lg border bg-muted/30 p-4'>
            <div className='flex items-center justify-between gap-4'>
              <div>
                <p className='text-sm font-medium'>{roomName}</p>

                <p className='text-xs text-muted-foreground'>
                  Room {roomNumber}
                </p>
              </div>

              <span className='text-xs text-muted-foreground'>{roomId}</span>
            </div>
          </div>

          <DialogFooter>
            <Button
              type='button'
              variant='outline'
              disabled={isDeleting}
              onClick={() => setDeleteOpen(false)}
            >
              Cancel
            </Button>

            <Button
              type='button'
              variant='destructive'
              disabled={isDeleting}
              onClick={confirmDelete}
            >
              <Trash2 className='mr-2 size-4' />

              {isDeleting ? 'Deleting...' : 'Delete Room'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

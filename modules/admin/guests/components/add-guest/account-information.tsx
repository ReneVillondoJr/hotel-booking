'use client';

import type { NewGuestFormData } from '../../types/guest';

interface AccountInformationProps {
  status: NewGuestFormData['status'];
  hasAccount: boolean;
  emailVerified: boolean;
  phoneVerified: boolean;
  onChange: <K extends keyof NewGuestFormData>(
    field: K,
    value: NewGuestFormData[K],
  ) => void;
}

export default function AccountInformation({
  status,
  hasAccount,
  emailVerified,
  phoneVerified,
  onChange,
}: AccountInformationProps) {
  return (
    <section className='rounded-xl border bg-card'>
      <div className='border-b px-5 py-4'>
        <h2 className='font-semibold'>Account Information</h2>

        <p className='mt-1 text-sm text-muted-foreground'>
          Manage guest account and verification status.
        </p>
      </div>

      <div className='space-y-5 p-5'>
        <div className='space-y-2'>
          <label htmlFor='status' className='text-sm font-medium'>
            Guest Status
          </label>

          <select
            id='status'
            value={status}
            onChange={(event) =>
              onChange(
                'status',
                event.target.value as NewGuestFormData['status'],
              )
            }
            className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring'
          >
            <option value='ACTIVE'>Active</option>

            <option value='INACTIVE'>Inactive</option>

            <option value='BLOCKED'>Blocked</option>
          </select>
        </div>

        <div className='space-y-4'>
          <label className='flex cursor-pointer items-center gap-3'>
            <input
              type='checkbox'
              checked={hasAccount}
              onChange={(event) => onChange('hasAccount', event.target.checked)}
              className='size-4 rounded border-input'
            />

            <span>
              <span className='block text-sm font-medium'>
                Create guest account
              </span>

              <span className='block text-xs text-muted-foreground'>
                Allow this guest to access the customer portal.
              </span>
            </span>
          </label>

          <label className='flex cursor-pointer items-center gap-3'>
            <input
              type='checkbox'
              checked={emailVerified}
              onChange={(event) =>
                onChange('emailVerified', event.target.checked)
              }
              className='size-4 rounded border-input'
            />

            <span>
              <span className='block text-sm font-medium'>Email verified</span>

              <span className='block text-xs text-muted-foreground'>
                Mark the guest email as verified.
              </span>
            </span>
          </label>

          <label className='flex cursor-pointer items-center gap-3'>
            <input
              type='checkbox'
              checked={phoneVerified}
              onChange={(event) =>
                onChange('phoneVerified', event.target.checked)
              }
              className='size-4 rounded border-input'
            />

            <span>
              <span className='block text-sm font-medium'>Phone verified</span>

              <span className='block text-xs text-muted-foreground'>
                Mark the guest phone as verified.
              </span>
            </span>
          </label>
        </div>
      </div>
    </section>
  );
}

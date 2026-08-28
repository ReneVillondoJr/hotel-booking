'use client';

import { CreditCard, Landmark, Wallet } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';

interface PaymentSectionProps {
  paymentMethod: string;
  setPaymentMethod: (value: string) => void;
}

export default function PaymentSection({
  paymentMethod,
  setPaymentMethod,
}: PaymentSectionProps) {
  return (
    <section className='rounded-2xl border bg-card p-6'>
      <div>
        <p className='hotel-eyebrow'>Payment</p>

        <h2 className='mt-2 text-2xl font-semibold'>
          Choose your payment method.
        </h2>

        <p className='mt-2 text-sm text-muted-foreground'>
          Select how you would like to pay for your stay.
        </p>
      </div>

      <RadioGroup
        value={paymentMethod}
        onValueChange={setPaymentMethod}
        className='mt-6 grid gap-3'
      >
        {/* Card */}
        <label
          htmlFor='card'
          className='flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition hover:bg-muted'
        >
          <RadioGroupItem value='card' id='card' />

          <div className='flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary'>
            <CreditCard className='size-5' />
          </div>

          <div className='flex-1'>
            <p className='font-medium'>Credit or debit card</p>
            <p className='text-sm text-muted-foreground'>
              Visa, Mastercard, and other supported cards
            </p>
          </div>
        </label>

        {/* Bank */}
        <label
          htmlFor='bank'
          className='flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition hover:bg-muted'
        >
          <RadioGroupItem value='bank' id='bank' />

          <div className='flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary'>
            <Landmark className='size-5' />
          </div>

          <div className='flex-1'>
            <p className='font-medium'>Bank transfer</p>
            <p className='text-sm text-muted-foreground'>
              Pay directly through your bank
            </p>
          </div>
        </label>

        {/* E-wallet */}
        <label
          htmlFor='wallet'
          className='flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition hover:bg-muted'
        >
          <RadioGroupItem value='wallet' id='wallet' />

          <div className='flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary'>
            <Wallet className='size-5' />
          </div>

          <div className='flex-1'>
            <p className='font-medium'>E-wallet</p>
            <p className='text-sm text-muted-foreground'>
              Pay using an available digital wallet
            </p>
          </div>
        </label>
      </RadioGroup>

      {/* Card details */}
      {paymentMethod === 'card' && (
        <div className='mt-6 space-y-5'>
          <Separator />

          <div className='grid gap-5'>
            <div className='space-y-2'>
              <label htmlFor='card-number' className='text-sm font-medium'>
                Card number
              </label>

              <Input
                id='card-number'
                placeholder='1234 5678 9012 3456'
                inputMode='numeric'
              />
            </div>

            <div className='grid gap-5 sm:grid-cols-2'>
              <div className='space-y-2'>
                <label htmlFor='expiry' className='text-sm font-medium'>
                  Expiry date
                </label>

                <Input id='expiry' placeholder='MM / YY' />
              </div>

              <div className='space-y-2'>
                <label htmlFor='cvc' className='text-sm font-medium'>
                  CVC
                </label>

                <Input id='cvc' placeholder='123' inputMode='numeric' />
              </div>
            </div>

            <div className='space-y-2'>
              <label htmlFor='card-name' className='text-sm font-medium'>
                Name on card
              </label>

              <Input id='card-name' placeholder='John Smith' />
            </div>
          </div>
        </div>
      )}

      {paymentMethod === 'bank' && (
        <div className='mt-6 rounded-xl bg-muted p-4'>
          <p className='text-sm font-medium'>Bank transfer instructions</p>

          <p className='mt-1 text-sm text-muted-foreground'>
            Bank transfer details will be provided after you continue.
          </p>
        </div>
      )}

      {paymentMethod === 'wallet' && (
        <div className='mt-6 rounded-xl bg-muted p-4'>
          <p className='text-sm font-medium'>E-wallet payment</p>

          <p className='mt-1 text-sm text-muted-foreground'>
            You will be redirected to the selected payment provider after
            continuing.
          </p>
        </div>
      )}

      <Button type='button' className='mt-6 h-12 w-full rounded-full'>
        Continue to confirmation
      </Button>
    </section>
  );
}

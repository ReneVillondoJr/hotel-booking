import { Check } from 'lucide-react';

const steps = ['Choose room', 'Guest details', 'Confirmation'];

export default function BookingProgress() {
  return (
    <div className='flex items-center gap-3 overflow-x-auto pb-2'>
      {steps.map((step, index) => (
        <div key={step} className='flex shrink-0 items-center gap-3'>
          <div className='flex size-8 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground'>
            {index === 0 ?
              <Check className='size-4' />
            : index + 1}
          </div>

          <span className='text-sm font-medium'>{step}</span>

          {index < steps.length - 1 && (
            <div className='h-px w-10 bg-border sm:w-16' />
          )}
        </div>
      ))}
    </div>
  );
}

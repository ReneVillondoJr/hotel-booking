import { CircleCheck, ShieldAlert, UserCheck, Users } from 'lucide-react';

import GuestSummaryCard from './summary-card';

interface GuestSummaryProps {
  total: number;
  active: number;
  inactive: number;
  blocked: number;
}

export default function GuestSummary({
  total,
  active,
  inactive,
  blocked,
}: GuestSummaryProps) {
  return (
    <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
      <GuestSummaryCard
        title='Total Guests'
        value={total}
        description='All registered guests'
        icon={<Users className='size-5 text-muted-foreground' />}
      />

      <GuestSummaryCard
        title='Active'
        value={active}
        description='Active guest accounts'
        icon={<UserCheck className='size-5 text-muted-foreground' />}
      />

      <GuestSummaryCard
        title='Inactive'
        value={inactive}
        description='Inactive accounts'
        icon={<CircleCheck className='size-5 text-muted-foreground' />}
      />

      <GuestSummaryCard
        title='Blocked'
        value={blocked}
        description='Blocked accounts'
        icon={<ShieldAlert className='size-5 text-muted-foreground' />}
      />
    </div>
  );
}

import { BedDouble, CircleCheck, DoorOpen, Wrench } from 'lucide-react';

import RoomSummaryCard from './summary-card';

interface RoomSummaryProps {
  total: number;
  available: number;
  occupied: number;
  maintenance: number;
}

export default function RoomSummary({
  total,
  available,
  occupied,
  maintenance,
}: RoomSummaryProps) {
  return (
    <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
      <RoomSummaryCard
        title='Total Rooms'
        value={total}
        description='All registered rooms'
        icon={<BedDouble className='size-5 text-muted-foreground' />}
      />

      <RoomSummaryCard
        title='Available'
        value={available}
        description='Ready for booking'
        icon={<CircleCheck className='size-5 text-muted-foreground' />}
      />

      <RoomSummaryCard
        title='Occupied'
        value={occupied}
        description='Currently occupied'
        icon={<DoorOpen className='size-5 text-muted-foreground' />}
      />

      <RoomSummaryCard
        title='Maintenance'
        value={maintenance}
        description='Maintenance or cleaning'
        icon={<Wrench className='size-5 text-muted-foreground' />}
      />
    </div>
  );
}

'use client';

import {
  Bath,
  BedDouble,
  Building,
  Building2,
  Car,
  Coffee,
  ConciergeBell,
  GlassWater,
  Lock,
  Monitor,
  Snowflake,
  Tv,
  Utensils,
  Waves,
  Wind,
  Wifi,
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { roomAmenities } from '@/modules/admin/rooms/data/room';

interface RoomAmenitiesProps {
  selectedAmenities: string[];
  onChange: (amenities: string[]) => void;
}

const iconMap = {
  Wifi,
  Snowflake,
  Tv,
  Utensils,
  GlassWater,
  Lock,
  Building,
  Waves,
  Building2,
  Bath,
  Monitor,
  Coffee,
  Wind,
  ConciergeBell,
  Car,
};

export default function RoomAmenities({
  selectedAmenities,
  onChange,
}: RoomAmenitiesProps) {
  function toggleAmenity(id: string) {
    if (selectedAmenities.includes(id)) {
      onChange(selectedAmenities.filter((amenity) => amenity !== id));

      return;
    }

    onChange([...selectedAmenities, id]);
  }

  return (
    <Card>
      <CardHeader className='px-5 py-4'>
        <CardTitle className='text-base'>Amenities</CardTitle>
      </CardHeader>

      <CardContent className='px-5 pb-5'>
        <div className='grid gap-2 sm:grid-cols-2 lg:grid-cols-3'>
          {roomAmenities.map((amenity) => {
            const Icon = iconMap[amenity.icon as keyof typeof iconMap];

            const selected = selectedAmenities.includes(amenity.id);

            return (
              <button
                key={amenity.id}
                type='button'
                onClick={() => toggleAmenity(amenity.id)}
                className={`flex items-center gap-3 rounded-lg border p-3 text-left text-sm transition ${
                  selected ? 'border-primary bg-primary/5' : 'hover:bg-muted/50'
                }`}
                aria-pressed={selected}
              >
                {Icon ?
                  <Icon className='size-4 shrink-0 text-primary' />
                : null}

                <span>{amenity.name}</span>
              </button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

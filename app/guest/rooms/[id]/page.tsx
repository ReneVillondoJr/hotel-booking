import { notFound } from 'next/navigation';

import { RoomDetail } from '@/modules/homepage/room';

import { rooms } from '@/modules/homepage/room/data/room';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const room = rooms.find((item) => item.id === id);

  if (!room) {
    notFound();
  }

  return <RoomDetail room={room} />;
}

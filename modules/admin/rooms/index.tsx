'use client';

import { useMemo, useState } from 'react';

import { rooms } from '@/modules/admin/rooms/data/room';
import { getRoomSummary } from '@/modules/admin/rooms/data/summary';

import type { RoomStatus, RoomType } from './types/room';

import RoomFilters from './components/filters';
import RoomHeader from './components/header';
import RoomSummary from './components/summary';
import RoomTable from './components/table';

export default function RoomsPage() {
  const [search, setSearch] = useState('');

  const [status, setStatus] = useState<RoomStatus | 'ALL'>('ALL');

  const [type, setType] = useState<RoomType | 'ALL'>('ALL');

  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      const searchValue = `${room.name} ${room.roomNumber}`.toLowerCase();

      const matchesSearch = searchValue.includes(search.toLowerCase());

      const matchesStatus = status === 'ALL' || room.status === status;

      const matchesType = type === 'ALL' || room.type === type;

      return matchesSearch && matchesStatus && matchesType;
    });
  }, [search, status, type]);

  const summary = getRoomSummary(rooms);

  function handleReset() {
    setSearch('');
    setStatus('ALL');
    setType('ALL');
  }

  return (
    <div className='space-y-6'>
      <RoomHeader />

      <RoomSummary
        total={summary.total}
        available={summary.available}
        occupied={summary.occupied}
        maintenance={summary.maintenance}
      />

      <div className='space-y-4'>
        <RoomFilters
          search={search}
          status={status}
          type={type}
          onSearchChange={setSearch}
          onStatusChange={setStatus}
          onTypeChange={setType}
          onReset={handleReset}
        />

        <RoomTable rooms={filteredRooms} />
      </div>
    </div>
  );
}

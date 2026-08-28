'use client';

import { useMemo, useState } from 'react';

import type { Room, RoomType } from '../types/room';

export function useRoomFilters(roomList: Room[]) {
  const [search, setSearch] = useState('');

  const [type, setType] = useState<RoomType | 'ALL'>('ALL');

  const [maxGuests, setMaxGuests] = useState<number | 'ALL'>('ALL');

  const filteredRooms = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return roomList.filter((room) => {
      const matchesSearch =
        normalizedSearch === '' ||
        room.name.toLowerCase().includes(normalizedSearch) ||
        room.description.toLowerCase().includes(normalizedSearch);

      const matchesType = type === 'ALL' || room.type === type;

      const matchesGuests = maxGuests === 'ALL' || room.maxGuests >= maxGuests;

      return matchesSearch && matchesType && matchesGuests;
    });
  }, [roomList, search, type, maxGuests]);

  const clearFilters = () => {
    setSearch('');
    setType('ALL');
    setMaxGuests('ALL');
  };

  return {
    search,
    setSearch,

    type,
    setType,

    maxGuests,
    setMaxGuests,

    filteredRooms,
    clearFilters,
  };
}

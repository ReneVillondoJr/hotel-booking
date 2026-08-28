import type { Room } from '../types/room';

export function getRoomSummary(rooms: Room[]) {
  return {
    total: rooms.length,

    available: rooms.filter((room) => room.status === 'AVAILABLE').length,

    occupied: rooms.filter((room) => room.status === 'OCCUPIED').length,

    reserved: rooms.filter((room) => room.status === 'RESERVED').length,

    maintenance: rooms.filter(
      (room) => room.status === 'MAINTENANCE' || room.status === 'CLEANING',
    ).length,

    inactive: rooms.filter((room) => room.status === 'INACTIVE').length,
  };
}

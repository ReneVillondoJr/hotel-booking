'use client';

import { useMemo, useState } from 'react';

import { guests } from './data/guest';
import { getGuestSummary } from './data/guest-summary';

import GuestFilters from './components/filters';
import GuestHeader from './components/header';
import GuestSummary from './components/summary';
import GuestTable from './components/table';

import type { GuestStatus } from './types/guest';

export default function GuestsPage() {
  const [search, setSearch] = useState('');

  const [status, setStatus] = useState<GuestStatus | 'ALL'>('ALL');

  const filteredGuests = useMemo(() => {
    const query = search.toLowerCase().trim();

    return guests.filter((guest) => {
      const fullName = `${guest.firstName} ${guest.lastName}`.toLowerCase();

      const matchesSearch =
        !query ||
        fullName.includes(query) ||
        guest.email.toLowerCase().includes(query) ||
        guest.phone.toLowerCase().includes(query);

      const matchesStatus = status === 'ALL' || guest.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  const summary = getGuestSummary(guests);

  function handleReset() {
    setSearch('');
    setStatus('ALL');
  }

  return (
    <div className='space-y-6'>
      <GuestHeader />

      <GuestSummary
        total={summary.total}
        active={summary.active}
        inactive={summary.inactive}
        blocked={summary.blocked}
      />

      <div className='space-y-4'>
        <GuestFilters
          search={search}
          status={status}
          onSearchChange={setSearch}
          onStatusChange={setStatus}
          onReset={handleReset}
        />

        <GuestTable guests={filteredGuests} />
      </div>
    </div>
  );
}

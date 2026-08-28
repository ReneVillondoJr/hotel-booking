import DashboardHeader from './components/header';
import DashboardStats from './components/stats';
import QuickActions from './components/quick-action';
import RecentBookings from './components/recent-bookings';
import RoomOverview from './components/room-overview';

export default function AdminDashboardPage() {
  return (
    <div className='space-y-6 lg:space-y-8'>
      <DashboardHeader />

      <DashboardStats />

      <div className='grid gap-6 xl:grid-cols-3'>
        <div className='xl:col-span-2'>
          <RecentBookings />
        </div>

        <div className='space-y-6'>
          <RoomOverview />

          <QuickActions />
        </div>
      </div>
    </div>
  );
}

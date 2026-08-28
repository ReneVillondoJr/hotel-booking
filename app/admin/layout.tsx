import type { ReactNode } from 'react';

import AdminSidebar from '@/components/admin/sidebar';
import AdminHeader from '@/components/admin/header';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className='min-h-screen bg-muted/30 text-foreground'>
      <AdminSidebar />

      <div className='lg:pl-64'>
        <AdminHeader />

        <main className='min-h-[calc(100vh-4rem)] px-4 py-6 sm:px-6 lg:px-8'>
          <div className='mx-auto w-full max-w-7xl'>{children}</div>
        </main>
      </div>
    </div>
  );
}

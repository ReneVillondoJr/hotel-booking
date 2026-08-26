import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Lumora Hotel',
    template: '%s | Lumora Hotel',
  },
  description:
    'Discover comfortable rooms, refined amenities, and a relaxing stay at Lumora Hotel.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className='min-h-full bg-background font-sans text-foreground'>
        {children}
      </body>
    </html>
  );
}

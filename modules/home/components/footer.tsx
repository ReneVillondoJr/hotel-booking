import Link from 'next/link';

const links = [
  { label: 'Rooms', href: '#rooms' },
  { label: 'Experience', href: '#experience' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'About', href: '#about' },
];

export default function Footer() {
  return (
    <footer className='border-t bg-card'>
      <div className='mx-auto max-w-7xl px-5 py-12 lg:px-8'>
        <div className='flex flex-col justify-between gap-8 md:flex-row md:items-center'>
          <div>
            <Link href='/' className='text-lg font-semibold tracking-[0.12em]'>
              LUMORA
            </Link>

            <p className='mt-2 text-sm text-muted-foreground'>
              A thoughtful place to stay.
            </p>
          </div>

          <nav className='flex flex-wrap gap-x-6 gap-y-3'>
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className='text-sm text-muted-foreground transition hover:text-foreground'
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className='mt-10 border-t pt-6 text-sm text-muted-foreground'>
          © {new Date().getFullYear()} Lumora Hotel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

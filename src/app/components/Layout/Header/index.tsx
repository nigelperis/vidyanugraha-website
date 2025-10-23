'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/colleges', label: 'Colleges' },
  { href: '/contact', label: 'Contact' },
];

function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="-m-2 flex h-22 w-26 items-center justify-center p-1 sm:m-0">
            <Image
              src="/vidyanugraha-logo.jpg"
              alt="Vidyanugraha Education Trust Logo"
              width={100}
              height={100}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <div>
            <p className="text-sm tracking-[0.2em] text-slate-500 uppercase">
              Vidyanugraha Education Trust
            </p>
            {/* <p className="text-lg font-semibold text-[var(--color-muted)]">
              Empowering Education
            </p> */}
          </div>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${isActive
                  ? 'text-[var(--color-primary)]'
                  : 'text-slate-600 hover:text-[var(--color-primary)]'
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          onClick={() => {
            setIsMenuOpen((prev) => !prev);
          }}
          className="flex h-10 w-20 items-center justify-center border border-slate-200 text-slate-600 md:hidden"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation menu</span>
          <div className="relative flex h-5 w-6 flex-col items-center justify-center">
            <span
              className={`absolute block h-[2px] w-5 bg-current transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                }`}
            />
            <span
              className={`absolute block h-[2px] w-4 bg-current transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
            />
            <span
              className={`absolute block h-[2px] w-5 bg-current transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                }`}
            />
          </div>
        </button>
      </div>
      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 ease-in-out md:hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <nav className="container flex flex-col py-2">
          {NAV_ITEMS.map((item, index) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`py-2 text-lg font-medium transition-all duration-200 ease-in-out hover:bg-slate-50 hover:px-4 ${isActive
                  ? 'text-[var(--color-primary)]'
                  : 'text-slate-600 hover:text-[var(--color-primary)]'
                  }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default Header;

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
          className="flex h-10 w-10 items-center justify-center border border-slate-200 text-slate-600 md:hidden"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation menu</span>
          <div className="flex flex-col gap-[5px]">
            <span className="block h-[2px] w-5 bg-current" />
            <span className="block h-[2px] w-4 bg-current" />
            <span className="block h-[2px] w-6 bg-current" />
          </div>
        </button>
      </div>
      {isMenuOpen ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="container flex flex-col gap-4 py-4">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-base font-medium transition ${isActive
                    ? 'text-[var(--color-primary)]'
                    : 'text-slate-600 hover:text-[var(--color-primary)]'
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export default Header;

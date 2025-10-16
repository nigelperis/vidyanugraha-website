'use client';

import { useEffect, useRef, useState } from 'react';
import { type HeaderItem } from '@/app/types/menu';
import { Icon } from '@iconify/react/dist/iconify.js';

import Logo from './Logo';
import HeaderLink from './Navigation/HeaderLink';
import MobileHeaderLink from './Navigation/MobileHeaderLink';

interface HeaderResponse {
  HeaderData: HeaderItem[];
}

const isHeaderResponse = (value: unknown): value is HeaderResponse => {
  return (
    typeof value === 'object' &&
    value !== null &&
    'HeaderData' in value &&
    Array.isArray((value as { HeaderData: unknown }).HeaderData)
  );
};

export default function Header() {
  const [headerData, setHeaderData] = useState<HeaderItem[]>([]);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data');

        if (!res.ok) throw new Error('Failed to fetch');

        const data: unknown = await res.json();

        if (isHeaderResponse(data)) {
          setHeaderData(data.HeaderData);
        } else {
          console.error('Unexpected header response', data);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchData();
  }, []);

  const handleScroll = () => {
    setSticky(window.scrollY >= 10);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside, navbarOpen]);

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [navbarOpen]);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        sticky ? 'bg-white py-4 shadow-lg' : 'py-4 shadow-none'
      }`}
    >
      <div>
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-4">
          <Logo />
          <nav className="ml-14 hidden grow items-center justify-start gap-8 lg:flex">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setNavbarOpen(!navbarOpen);
              }}
              className="block rounded-lg p-2 lg:hidden"
              aria-label="Toggle mobile menu"
            >
              <span className="block h-0.5 w-6 bg-black" />
              <span className="mt-1.5 block h-0.5 w-6 bg-black" />
              <span className="mt-1.5 block h-0.5 w-6 bg-black" />
            </button>
          </div>
        </div>
        {navbarOpen ? (
          <div className="fixed top-0 left-0 z-40 h-full w-full bg-black/50" />
        ) : null}
        <div
          ref={mobileMenuRef}
          className={`fixed top-0 right-0 h-full w-full max-w-xs transform bg-white shadow-lg transition-transform duration-300 lg:hidden ${
            navbarOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50`}
        >
          <div className="flex items-center justify-between p-4">
            <h2 className="text-midnight_text text-lg font-bold">
              <Logo />
            </h2>
            <button
              onClick={() => {
                setNavbarOpen(false);
              }}
              className="rounded-full bg-black/30 p-1 text-white"
              aria-label="Close menu Modal"
            >
              <Icon
                icon="material-symbols:close-rounded"
                width={24}
                height={24}
              />
            </button>
          </div>
          <nav className="flex flex-col items-start p-4">
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

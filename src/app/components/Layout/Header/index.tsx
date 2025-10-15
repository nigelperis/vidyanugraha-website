'use client';

import { useEffect, useRef, useState } from 'react';
import Signin from '@/app/components/Auth/SignIn';
import SignUp from '@/app/components/Auth/SignUp';
import { HeaderItem } from '@/app/types/menu';
import { Icon } from '@iconify/react/dist/iconify.js';

import HeaderLink from '../Header/Navigation/HeaderLink';
import MobileHeaderLink from '../Header/Navigation/MobileHeaderLink';
import Logo from './Logo';

type HeaderResponse = {
  HeaderData: HeaderItem[];
};

const isHeaderResponse = (value: unknown): value is HeaderResponse => {
  return (
    typeof value === 'object' &&
    value !== null &&
    'HeaderData' in value &&
    Array.isArray((value as { HeaderData: unknown }).HeaderData)
  );
};

const Header: React.FC = () => {
  const [headerData, setHeaderData] = useState<HeaderItem[]>([]);

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);
  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);
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
      signInRef.current &&
      !signInRef.current.contains(event.target as Node)
    ) {
      setIsSignInOpen(false);
    }
    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false);
    }
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
  }, [navbarOpen, isSignInOpen, isSignUpOpen]);

  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || navbarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen]);

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
              className="text-primary hover:bg-primary border-primary hidden rounded-lg border bg-transparent px-6 py-2 duration-300 hover:cursor-pointer hover:text-white lg:block"
              onClick={() => {
                setIsSignInOpen(true);
              }}
            >
              Sign In
            </button>
            {isSignInOpen && (
              <div className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black/50">
                <div
                  ref={signInRef}
                  className="bg-dark_grey/90 relative mx-auto w-full max-w-md overflow-hidden rounded-lg bg-white px-8 pt-14 pb-8 text-center backdrop-blur-md"
                >
                  <button
                    onClick={() => setIsSignInOpen(false)}
                    className="absolute top-0 right-0 mt-8 mr-8 dark:invert"
                    aria-label="Close Sign In Modal"
                  >
                    <Icon
                      icon="material-symbols:close-rounded"
                      width={24}
                      height={24}
                      className="hover:text-primary inline-block text-black hover:cursor-pointer"
                    />
                  </button>
                  <Signin />
                </div>
              </div>
            )}
            <button
              className="bg-primary hover:text-primary border-primary hidden rounded-lg border px-6 py-2 text-base font-medium text-white duration-300 hover:cursor-pointer hover:bg-transparent lg:block"
              onClick={() => {
                setIsSignUpOpen(true);
              }}
            >
              Sign Up
            </button>
            {isSignUpOpen && (
              <div className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black/50">
                <div
                  ref={signUpRef}
                  className="bg-dark_grey/90 relative mx-auto w-full max-w-md overflow-hidden rounded-lg bg-white px-8 pt-14 pb-8 text-center backdrop-blur-md"
                >
                  <button
                    onClick={() => setIsSignUpOpen(false)}
                    className="absolute top-0 right-0 mt-8 mr-8 dark:invert"
                    aria-label="Close Sign Up Modal"
                  >
                    <Icon
                      icon="material-symbols:close-rounded"
                      width={24}
                      height={24}
                      className="hover:text-primary inline-block text-black hover:cursor-pointer"
                    />
                  </button>
                  <SignUp />
                </div>
              </div>
            )}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block rounded-lg p-2 lg:hidden"
              aria-label="Toggle mobile menu"
            >
              <span className="block h-0.5 w-6 bg-black"></span>
              <span className="mt-1.5 block h-0.5 w-6 bg-black"></span>
              <span className="mt-1.5 block h-0.5 w-6 bg-black"></span>
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div className="fixed top-0 left-0 z-40 h-full w-full bg-black/50" />
        )}
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
            {/*  */}
            <button
              onClick={() => setNavbarOpen(false)}
              className="rounded-full bg-black/30 p-1 text-white"
              aria-label="Close menu Modal"
            >
              <Icon
                icon={'material-symbols:close-rounded'}
                width={24}
                height={24}
              />
            </button>
          </div>
          <nav className="flex flex-col items-start p-4">
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
            <div className="mt-4 flex w-full flex-col gap-4">
              <button
                className="bg-primary border-primary hover:text-primary rounded-lg border px-4 py-2 text-white transition duration-300 ease-in-out hover:cursor-pointer hover:bg-transparent"
                onClick={() => {
                  setIsSignInOpen(true);
                  setNavbarOpen(false);
                }}
              >
                Sign In
              </button>
              <button
                className="bg-primary border-primary hover:text-primary rounded-lg border px-4 py-2 text-white transition duration-300 ease-in-out hover:cursor-pointer hover:bg-transparent"
                onClick={() => {
                  setIsSignUpOpen(true);
                  setNavbarOpen(false);
                }}
              >
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

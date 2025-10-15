'use client';

import { useState } from 'react';
// import nextImg from '/public/images/documentation/Categories=Nextjs.svg'
// import reactImg from '/public/images/documentation/Categories=React.svg'
// import tailwindImg from '/public/images/documentation/Categories=Tailwind.svg'
// import nextauthImg from '/public/images/documentation/nextauth.png'
// import typescriptImg from '/public/images/documentation/Categories=Typescript.svg'
// import axiosImg from '/public/images/documentation/axios.svg'
import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';

import { DocNavigation } from './DocNavigation';

export const Introduction = () => {
  const [docNavbarOpen, setDocNavbarOpen] = useState(false);
  const PackageVersions = [
    {
      id: '1',
      packageName: 'NextJs',
      img: '/images/documentation/Categories=Nextjs.svg',
      version: '15.0.3',
    },
    {
      id: '2',
      packageName: 'React',
      img: '/images/documentation/Categories=React.svg',
      version: '18.3.1',
    },
    {
      id: '3',
      packageName: 'Tailwindcss',
      img: '/images/documentation/Categories=Tailwind.svg',
      version: '3.4.1',
    },
    {
      id: '4',
      packageName: 'NextAuth',
      img: '/images/documentation/nextauth.png',
      version: '4.24.7',
    },
    {
      id: '5',
      packageName: 'Typescript',
      img: '/images/documentation/Categories=Typescript.svg',
      version: '5.6.3',
    },
  ];
  return (
    <>
      <div id="version" className="scroll-m-28 md:scroll-m-[180px]">
        {docNavbarOpen && (
          <div
            className="bg-opacity-50 fixed top-0 left-0 z-40 h-full w-full bg-black"
            onClick={() => setDocNavbarOpen(false)}
          />
        )}

        <div className="item-center flex justify-between">
          <h3 className="mt-4 mb-6 text-2xl font-semibold text-black">
            Pacakge Versions
          </h3>
          <button onClick={() => setDocNavbarOpen(true)} className="p-0">
            {' '}
            <Icon icon="gg:menu-right" className="block text-3xl lg:hidden" />
          </button>
        </div>

        <div className="border-dark_border border-opacity-60 flex w-full flex-wrap justify-between gap-6 rounded-md border p-6 lg:flex-nowrap lg:gap-0">
          {PackageVersions &&
            PackageVersions.map((item) => {
              return (
                <div
                  key={item.id}
                  className="border-dark_border border-opacity-60 border-b text-center last:border-b-0 md:w-full lg:w-1/5 lg:border-e lg:border-b-0 lg:last:border-e-0"
                >
                  <Image
                    src={item.img}
                    width={64}
                    height={64}
                    alt="npm-package"
                    className="mx-auto h-10 w-10"
                  />
                  <h5 className="mt-3.5 text-2xl font-bold text-black">{`v${item.version}`}</h5>
                  <p className="text-muted text-base font-medium">
                    {item.packageName}
                  </p>
                </div>
              );
            })}
        </div>
        <div className="mt-5">
          <p className="text-muted text-opacity-60 text-base font-medium">
            SiEducational Tailwind NextJs Template is built with Tailwindcss and
            Nextjs.
          </p>
          <p className="text-muted text-opacity-60 text-base font-medium">
            These theme is ready to use and you can totally customize as per
            your requirement.
          </p>
          <p className="text-muted text-opacity-60 text-base font-medium">
            For Customize, You should have knowledge of NextJs, ReactJs,
            Tailwind and JSX to be able to modify these template.
          </p>
        </div>
      </div>

      <div
        className={`dark:bg-dark fixed top-0 right-0 block h-full w-full max-w-xs transform bg-white shadow-lg transition-transform duration-300 lg:hidden ${
          docNavbarOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-midnight_text text-lg font-bold dark:text-black">
            Docs Menu
          </h2>
          <button
            onClick={() => setDocNavbarOpen(false)}
            aria-label="Close mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="dark:text-black"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="px-4">
          <DocNavigation />
        </nav>
      </div>
    </>
  );
};

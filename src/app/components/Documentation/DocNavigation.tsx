'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export const DocNavigation = () => {
  const [navItem, setNavItem] = useState('version');

  function getNavItem(item: string) {
    setNavItem(item);
  }

  useEffect(() => {
    console.log(navItem);
  }, [navItem]);

  const DocsNav = [
    {
      id: 1,
      navItem: 'Package Versions',
      hash: 'version',
    },
    {
      id: 2,
      navItem: 'Pacakge Structure',
      hash: 'structure',
    },
    {
      id: 3,
      navItem: 'Quick Start',
      hash: 'start',
    },
    {
      id: 4,
      navItem: 'Project Configuration',
      hash: 'configuration',
    },
  ];

  return (
    <div className="fixed mt-4 flex flex-col items-start gap-0.5 pe-4">
      {DocsNav.map((item) => {
        return (
          <Link
            key={item.id}
            href={`#${item.hash}`}
            onClick={() => getNavItem(item.hash)}
            className={`hover:bg-primary/20 hover:text-primary dark:hover:text-primary min-w-full rounded-md px-4 py-2.5 text-base font-medium lg:min-w-52 xl:min-w-60 ${
              item.hash === navItem ? 'bg-primary text-white' : 'text-black/60'
            }`}
          >
            {item.navItem}
          </Link>
        );
      })}
    </div>
  );
};

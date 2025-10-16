'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { type HeaderItem } from '../../../../types/menu';

function HeaderLink({ item }: { item: HeaderItem }) {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();
  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true);
    }
  };
  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        className={`hover:text-primary capitalized flex text-base font-medium ${
          path === item.href ? 'text-primary' : 'text-black'
        }`}
      >
        {item.label}
        {item.submenu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        ) : null}
      </Link>
      {submenuOpen ? (
        <div
          className="dark:bg-darklight absolute left-0 mt-0.5 w-60 rounded-lg bg-white py-2 shadow-lg dark:text-white"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          {item.submenu?.map((subItem) => (
            <Link
              key={subItem.href}
              href={subItem.href}
              className={`block px-4 py-2 ${
                path === subItem.href
                  ? 'bg-primary text-white'
                  : 'hover:bg-primary text-black dark:text-white'
              }`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default HeaderLink;

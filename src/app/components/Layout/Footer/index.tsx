'use client';

import { useEffect, useState } from 'react';
import { FooterLinkType } from '@/app/types/footerlinks';
import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import Link from 'next/link';

type FooterResponse = {
  FooterLinkData: FooterLinkType[];
};

const isFooterResponse = (value: unknown): value is FooterResponse => {
  return (
    typeof value === 'object' &&
    value !== null &&
    'FooterLinkData' in value &&
    Array.isArray((value as { FooterLinkData: unknown }).FooterLinkData)
  );
};

const Footer = () => {
  const [footerlink, SetFooterlink] = useState<FooterLinkType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data');
        if (!res.ok) throw new Error('Failed to fetch');
        const data: unknown = await res.json();
        if (isFooterResponse(data)) {
          SetFooterlink(data.FooterLinkData);
        } else {
          console.error('Unexpected footer response', data);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-primary" id="first-section">
      <div className="container pt-60 pb-10">
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-8">
          <div className="col-span-4 flex flex-col gap-5">
            <div>
              <Image
                src="/images/logo/logo2.svg"
                alt="Logo"
                width={48}
                height={64}
              />
            </div>
            <p className="text-lg leading-7 font-medium text-white">
              {' '}
              Level up your skills, and get dream <br /> job with passion.{' '}
            </p>
            <div className="flex gap-4">
              <Link
                href="/"
                className="hover:bg-cream hover:text-primary rounded-full bg-white/20 p-2 text-white duration-300"
              >
                <Icon
                  icon="tabler:brand-instagram"
                  className="inline-block text-2xl"
                />
              </Link>
              <Link
                href="/"
                className="hover:bg-cream hover:text-primary rounded-full bg-white/20 p-2 text-white duration-300"
              >
                <Icon
                  icon="tabler:brand-dribbble"
                  className="inline-block text-2xl"
                />
              </Link>
              <Link
                href="/"
                className="hover:bg-cream hover:text-primary rounded-full bg-white/20 p-2 text-white duration-300"
              >
                <Icon
                  icon="tabler:brand-twitter-filled"
                  className="inline-block text-2xl"
                />
              </Link>
              <Link
                href="/"
                className="hover:bg-cream hover:text-primary rounded-full bg-white/20 p-2 text-white duration-300"
              >
                <Icon
                  icon="tabler:brand-youtube-filled"
                  className="inline-block text-2xl"
                />
              </Link>
            </div>
          </div>

          {/* CLOUMN-2/3 */}
          <div className="col-span-4">
            <div className="flex gap-20">
              {footerlink.map((product, i) => (
                <div key={i} className="group relative col-span-2">
                  <p className="mb-9 text-xl font-semibold text-white">
                    {product.section}
                  </p>
                  <ul>
                    {product.links.map((item, i) => (
                      <li key={i} className="mb-3">
                        <Link
                          href={item.href}
                          className="mb-6 text-sm font-normal text-white/60 hover:text-white"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* CLOUMN-4 */}

          <div className="col-span-4">
            <h3 className="mb-6 text-xl font-semibold text-white">
              Stay up to date
            </h3>
            <div className="relative flex w-[50%] flex-row-reverse text-white focus-within:text-white lg:w-full">
              <input
                type="Email address"
                name="q"
                className="bg-emailbg w-full rounded-md bg-white/15 py-4 pl-4 text-sm text-white focus:text-white focus:outline-hidden"
                placeholder="Your email address"
                autoComplete="off"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                <button
                  type="submit"
                  className="focus:shadow-outline p-1 focus:outline-hidden"
                >
                  <Icon
                    icon="tabler:send"
                    className="me-2 inline-block text-2xl text-white"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3">
        <h3 className="text-center text-white/60">
          @2025 - All Rights Reserved by{' '}
          <Link
            href="https://adminmart.com/"
            target="_blank"
            className="hover:text-white"
          >
            {' '}
            GetNextJs Templates.com
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Footer;

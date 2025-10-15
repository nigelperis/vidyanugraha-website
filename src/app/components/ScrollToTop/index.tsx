'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed right-8 bottom-8 z-999">
      <div className="flex items-center gap-2.5">
        <Link
          href={
            'https://getnextjstemplates.com/products/si-educational-free-nextjs-landing-page-template'
          }
          target="_blank"
          className="bg-primary hover:bg-darkmode hidden rounded-lg px-4 py-3.5 text-sm leading-none font-medium text-nowrap text-white lg:block"
        >
          Download Now
        </Link>
        {isVisible && (
          <div
            onClick={scrollToTop}
            aria-label="scroll to top"
            className="back-to-top hover:bg-dark flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-[#102C46] text-white shadow-md transition duration-300 ease-in-out"
          >
            <span className="mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white"></span>
          </div>
        )}
      </div>
    </div>
  );
}

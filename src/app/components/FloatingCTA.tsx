'use client';

import { useEffect, useState } from 'react';
import { Mail, Phone, X } from 'lucide-react';
import Link from 'next/link';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed right-6 bottom-6 z-50">
      <div
        className={`transition-all duration-300 ${isExpanded ? 'space-y-3' : ''}`}
      >
        {/* Expanded options */}
        {isExpanded && (
          <div className="animate-in slide-in-from-bottom space-y-3 duration-300">
            <Link
              href="mailto:hello@vidyanugraha.com"
              className="flex items-center gap-3 rounded-full bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              <Mail className="h-4 w-4 text-blue-600" />
              <span>Send Email</span>
            </Link>

            <Link
              href="tel:+91-9876543210"
              className="flex items-center gap-3 rounded-full bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              <Phone className="h-4 w-4 text-green-600" />
              <span>Call Now</span>
            </Link>
          </div>
        )}

        {/* Main button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="pulse-glow flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[var(--color-accent)] to-orange-500 text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        >
          {isExpanded ? (
            <X className="h-6 w-6" />
          ) : (
            <Mail className="h-6 w-6" />
          )}
        </button>
      </div>
    </div>
  );
}

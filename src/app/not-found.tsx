import { BASE_URL } from '~/constants/config';
import { ArrowRight, Home, Mail, Search, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Vidyanugraha Education Trust',
  description: 'The page you are looking for could not be found. Return to Vidyanugraha Education Trust homepage.',
  alternates: {
    canonical: `${BASE_URL}/404`,
  },
};

export default function NotFound() {
  return (
    <div className="space-y-0 overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--color-primary)] via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-[url('/images/banner/college_building.webp')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

        <div className="relative container grid gap-12 py-20 md:grid-cols-[1fr,1fr] md:items-center">
          <div className="animate-in slide-in-from-left space-y-8 duration-1000">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              <span className="tracking-wider uppercase">Page Not Found</span>
            </div>

            <h1 className="text-5xl leading-tight font-bold tracking-tight text-blue-100 sm:text-6xl md:text-7xl">
              Oops! This page seems to be
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                {' '}
                missing
              </span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-white/90">
              The page you&lsquo;re looking for doesn&lsquo;t exist or has been moved.
              Let&lsquo;s get you back to exploring our educational services and partnerships.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-orange-500 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-orange-500/25 transition-all hover:scale-105 hover:shadow-orange-500/40"
              >
                <Home className="h-4 w-4" />
                Back to Homepage
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
              >
                <Mail className="h-4 w-4" />
                Contact Us
              </Link>
            </div>
          </div>

          <div className="animate-in slide-in-from-right delay-300 duration-1000">
            <div className="relative">
              <div className="text-center">
                <div className="text-[200px] font-bold leading-none text-white/20 sm:text-[300px]">
                  404
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-white/10 p-8 backdrop-blur-lg">
                    <Search className="h-16 w-16 text-orange-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Companies from '@/app/components/Home/Companies';
import NamesList from '@/app/components/Home/Courses';
import Hero from '@/app/components/Home/Hero';
import Mentor from '@/app/components/Home/Mentor';
import Newsletter from '@/app/components/Home/Newsletter';
import Testimonial from '@/app/components/Home/Testimonial';

import ContactForm from './components/Contact/Form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vidyanugraha Education Trust',
  description: '',
  keywords: ['Vidyanugraha Education Trust', 'Education', 'Vidyanugraha'],
  authors: [{ name: 'Vidyanugraha Education Trust' }],
  creator: 'Vidyanugraha Education Trust',
  publisher: 'Vidyanugraha Education Trust',
  metadataBase: new URL('https://vidyanugraha.com'), // change when deployed
  openGraph: {
    title: 'Vidyanugraha Education Trust',
    description: '',
    url: 'https://vidyanugraha.com',
    siteName: 'Vidyanugraha Education Trust',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // add your Open Graph image
        width: 1200,
        height: 630,
        alt: 'Vidyanugraha Education Trust',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vidyanugraha Education Trust',
    description: '',
    images: ['/og-image.jpg'],
    creator: '@vidyanugraha', // if you make a Twitter/X handle later
  },
  alternates: {
    canonical: 'https://vidyanugraha.com',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <NamesList />
      <Mentor />
      <Testimonial />
      <ContactForm />
      <Newsletter />
    </main>
  );
}

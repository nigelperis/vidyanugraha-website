import { Documentation } from '@/app/components/Documentation/Documentation';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vidyanugraha Education Trust',
  description:
    'Vidyanugraha Education Trust delivers foundational education with a human touch, offering faculty recruitment and management services.',
  keywords: [
    'Vidyanugraha',
    'Moodbidri',
    'Mangalore Faculty Team',
    'NEET',
    'JEE',
    'CET',
    'Coaching',
    'PUC',
  ],
  authors: [
    { name: 'Vidyanugraha Education Trust', url: 'https://vidyanugraha.com' },
  ],
  openGraph: {
    title: 'Vidyanugraha Education Trust',
    description:
      'Vidyanugraha Education Trust delivers foundational education with a human touch, offering faculty recruitment and management services.',
    url: 'https://vidyanugraha.com',
    siteName: 'Vidyanugraha Education Trust',
    images: [
      {
        url: 'https://vidyanugraha.com/vidyanugraha-logo.png',
        width: 1200,
        height: 630,
        alt: 'Vidyanugraha Education Trust',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vidyanugraha Education Trust',
    description:
      'Vidyanugraha Education Trust delivers foundational education with a human touch, offering faculty recruitment and management services.',
    images: ['https://vidyanugraha.com/vidyanugraha-logo.png'],
  },
};

export default function Page() {
  return (
    <>
      <Documentation />
    </>
  );
}

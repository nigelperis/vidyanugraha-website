import React from 'react';
import Companies from '@/app/components/Home/Companies';
import NamesList from '@/app/components/Home/Courses';
import Hero from '@/app/components/Home/Hero';
import Mentor from '@/app/components/Home/Mentor';
import Newsletter from '@/app/components/Home/Newsletter';
import Testimonial from '@/app/components/Home/Testimonial';

import ContactForm from './components/Contact/Form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Si Educational',
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

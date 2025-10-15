import { Documentation } from '@/app/components/Documentation/Documentation';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Featurs | SiEducational',
};

export default function Page() {
  return (
    <>
      <Documentation />
    </>
  );
}

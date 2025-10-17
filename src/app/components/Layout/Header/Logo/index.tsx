import { type JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Logo(): JSX.Element {
  return (
    <Link href="/">
      <Image
        src="/vidyanugraha-logo.png"
        alt="logo"
        width={160}
        height={50}
        style={{ width: 'auto', height: 'auto' }}
        quality={100}
      />
    </Link>
  );
}

export default Logo;

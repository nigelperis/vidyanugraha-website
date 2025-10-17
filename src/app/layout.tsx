import { Inter } from 'next/font/google';

import './globals.css';

import Footer from '@/app/components/Layout/Footer';
import Header from '@/app/components/Layout/Header';

const font = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} flex min-h-screen flex-col`}>
        <Header />
        <main className="flex-1 pt-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

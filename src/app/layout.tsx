import Footer from '@/app/components/Layout/Footer';
import Header from '@/app/components/Layout/Header';
import { Inter } from 'next/font/google';

import GoogleAnalyticsScript from './components/GoogleAnalyticsScript';
import MicrosoftClarity from './components/MicrosoftClarity';

import './globals.css';

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
      <GoogleAnalyticsScript />
      <MicrosoftClarity />
    </html>
  );
}

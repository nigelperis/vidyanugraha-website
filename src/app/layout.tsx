import { Inter } from 'next/font/google';

import GoogleAnalyticsScript from '~/app/components/GoogleAnalyticsScript';
import MicrosoftClarity from '~/app/components/MicrosoftClarity';
import Header from '~/app/components/Layout/Header'
import Footer from '~/app/components/Layout/Footer'

import './globals.css';

const font = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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

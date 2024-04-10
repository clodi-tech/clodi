import type { Metadata } from 'next';
import { Rajdhani } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

import Header from "@/app/ui/header";
import Menu from "@/app/ui/menu";
import Footer from "@/app/ui/footer";

const font = Rajdhani({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: 'clodi',
  description: 'operating systems for engineering freedom.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body className={font.className}>
        <Providers>
          <Header />
          <Menu />
          {children}
          <Footer />
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

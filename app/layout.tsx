import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import ModalProvider from '@/providers/modalProvider';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import './globals.css';

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Modern|Looks',
  description: '1st store of many, managed by just one dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}

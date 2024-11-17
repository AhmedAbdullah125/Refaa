//Edited date :14/10/2024
//change Main layout structure
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header/Header';
import Contact from '@/components/home/Contact';
import Footer from '@/components/home/Footer';
import Rights from '@/components/home/Rights';
import '../style/main.css';

export const metadata: Metadata = {
  title: 'رفاع الكويت',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="w-full">
        <Header />
        {children}
        <Contact />
        <Footer />
        <Rights />
      </body>
    </html>
  );
}
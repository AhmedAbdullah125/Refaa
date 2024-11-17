import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Her you can know more about us',
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-full">{children}</div>;
}

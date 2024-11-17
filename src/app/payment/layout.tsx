import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payment',
  description: 'Her you can pay for your trip',
};

export default function PaymentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-full">{children}</div>;
}

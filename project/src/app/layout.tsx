import '@/app/globals.css';
import Header from '@/components/header/Header';
import Providers from '@/lib/provider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Community',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}

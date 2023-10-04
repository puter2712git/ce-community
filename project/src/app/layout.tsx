import Header from '@/components/templates/header';
import '@/app/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Providers from '@/utils/provider';

const queryClient = new QueryClient();

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

import './globals.css';
import Link from 'next/link';
import QueryProvider from '@/components/QueryProvider';

export const metadata = {
  title: 'MovieFinder',
  description: 'Search and favorite movies',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <header>
            <h1 style={{ fontWeight: 700, fontSize: '1.2rem', color: '#06b6d4' }}>
              🎥 MovieFinder
            </h1>
            <nav>
              <Link href="/">Search</Link>
              <Link href="/favorites">Favorites</Link>
            </nav>
          </header>

          <main>{children}</main>
        </QueryProvider>
      </body>
    </html>
  );
}

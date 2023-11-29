import { Syne } from 'next/font/google';
import './globals.css';
import Bar from '@/components/Bar';

const syne = Syne({ subsets: ['latin'] });

export const metadata = {
  title: 'Life Arquitectos',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${syne.className}`}>
        <Bar />
        {children}
      </body>
    </html>
  );
}

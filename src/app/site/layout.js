'use client';
import { SessionProvider } from 'next-auth/react';
export default function SiteLayout({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}

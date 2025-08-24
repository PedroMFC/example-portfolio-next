import '@/app/ui/global.css';
import { jetbrainsMono } from '@/app/ui/fonts';

import { Header } from '@/components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.className} antialiased`}>
      <Header/>
      {children}</body>
    </html>
  );
}

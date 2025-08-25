import '@/app/ui/global.css';
import { jetbrainsMono } from '@/app/ui/fonts';

import { Header } from '@/components/Header';
import { PageTransition } from '@/components/PageTransition';
import { StairTransition } from '@/components/StairTransition';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.className} antialiased`}>
      <Header/>
      <StairTransition/>
      <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}

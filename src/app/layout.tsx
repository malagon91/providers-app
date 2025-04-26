import type { Metadata } from 'next';
import { Theme } from '@radix-ui/themes';
import './globals.css';
import { Geist } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Digial Product',
  description: 'Aplicación para gestionar proveedores y productos',
};

const geistSans = Geist({
  display: 'swap',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <Theme
          accentColor="mint"
          grayColor="gray"
          panelBackground="solid"
          scaling="100%"
          radius="full"
        >
          {children}
        </Theme>
      </body>
    </html>
  );
}

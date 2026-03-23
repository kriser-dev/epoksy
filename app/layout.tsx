import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1, 
  themeColor: '#2563eb', 
};

export const metadata: Metadata = {
  title: "Posadzki żywiczne i przemysłowe | Trwałe systemy Epoksy",
  description: "Profesjonalne posadzki żywiczne, epoksydowe i poliuretanowe. Tworzymy trwałe, antypoślizgowe rozwiązania dla przemysłu, magazynów i garaży.",
  keywords: [
    "posadzki żywiczne", 
    "posadzki epoksydowe", 
    "posadzki przemysłowe", 
    "żywica na beton", 
    "posadzki garażowe",
    "systemy epoksydowe"
  ],
  alternates: {
    canonical: "https://epoksy.pl",
    languages: {
      'pl-PL': "https://epoksy.pl",
    },
  },
  openGraph: {
    title: "Epoksy – Posadzki przemysłowe",
    description: "Profesjonalne systemy żywiczne dla przemysłu.",
    url: "https://epoksy.pl",
    siteName: "Epoksy",
    images: [{ url: "https://epoksy.pl/og-image.jpg", width: 1200, height: 630 }],
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
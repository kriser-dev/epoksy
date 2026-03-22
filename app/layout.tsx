import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Posadzki żywiczne przemysłowe | Epoksy",
  description: "Specjalistyczne posadzki epoksydowe i poliuretanowe. Realizacje w całej Polsce. Darmowa wycena w 24h.",
  keywords: [
    "posadzki żywiczne", 
    "posadzki epoksydowe", 
    "posadzki przemysłowe", 
    "żywica na beton", 
    "posadzki garażowe"
  ],
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
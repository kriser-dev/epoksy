// app/layout.tsx
import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Posadzki żywiczne przemysłowe | SteelResin",
  description: "Specjalistyczne posadzki epoksydowe i poliuretanowe. Realizacje w całej Polsce. Darmowa wycena w 24h.",
  keywords: ["posadzki żywiczne", "posadzki epoksydowe", "posadzki przemysłowe", "żywica na beton", "posadzki garażowe"],
  openGraph: {
    title: "SteelResin – Posadzki przemysłowe",
    description: "Profesjonalne systemy żywiczne dla przemysłu.",
    url: "https://steelresin.pl",
    siteName: "SteelResin",
    images: [{ url: "https://steelresin.pl/og-image.jpg", width: 1200, height: 630 }],
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
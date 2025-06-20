import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Barlow_Semi_Condensed } from 'next/font/google';
import './globals.css';
import './embla.css';
import Footer from '@/components/layout/Footer';

const barlow = Barlow_Semi_Condensed({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-barlow',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'NFT Marketplace | Discover, Collect & Trade Digital Assets',
  description:
    'Discover unique NFT collections, trade digital assets, and join our vibrant community of artists and collectors. Explore premium NFT drops and exclusive collections.',
  keywords: [
    'NFT',
    'digital assets',
    'blockchain',
    'collectibles',
    'crypto art',
    'marketplace',
  ],
  authors: [{ name: 'ZenTek' }],
  creator: 'ZenTek',
  publisher: 'ZenTek',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'NFT Marketplace | Discover, Collect & Trade Digital Assets',
    description:
      'Discover unique NFT collections, trade digital assets, and join our vibrant community of artists and collectors. Explore premium NFT drops and exclusive collections.',
    url: '/',
    siteName: 'NFT Marketplace',
    images: [
      {
        url: '/assets/images/preview.webp',
        width: 800,
        height: 600,
        alt: 'NFT Marketplace by ZenTek',
      },
      {
        url: '/assets/images/preview.webp',
        width: 1800,
        height: 1600,
        alt: 'NFT Marketplace by ZenTek',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NFT Marketplace | Discover, Collect & Trade Digital Assets',
    description:
      'Discover unique NFT collections, trade digital assets, and join our vibrant community of artists and collectors. Explore premium NFT drops and exclusive collections.',
    creator: '@ZenTek',
    images: ['/assets/images/preview.webp'],
  },

  icons: {
    icon: '/assets/icons/icons-seo/favicon.ico',
    shortcut: '/assets/icons/icons-seo/shortcut-icon.png',
    apple: '/assets/icons/icons-seo/apple-icon.png',
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/assets/icons/icons-seo/apple-touch-icon.png',
      },
    ],
  },
  manifest: '/assets/icons/icons-seo/site.webmanifest',
  alternates: {
    canonical: '/',
    languages: {},
  },
  appLinks: {
    web: {
      url: '/',
      should_fallback: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://fonts.cdnfonts.com/css/neue-haas-grotesk-display-pro'
          rel='stylesheet'
        />
      </head>

      <body
        className={`font-sans ${barlow.variable} bg-background font-normal text-text-primary antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

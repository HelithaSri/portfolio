import type { Metadata } from 'next';
import './globals.css';
import JsonLd from '@/components/ui/JsonLd';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.helithasri.dev'),
  title: 'Helitha Praveen — Backend Software Engineer | Java · Spring Boot · Fintech',
  description:
    'Helitha Praveen is a backend software engineer based in Colombo, Sri Lanka with 3+ years building fintech and payment systems using Java, Spring Boot, and REST APIs. Open to full-time and freelance opportunities.',
  keywords: [
    'backend software engineer',
    'Java developer',
    'Spring Boot',
    'REST API',
    'fintech',
    'payment systems',
    'Colombo',
    'Sri Lanka',
    'remote developer',
    'Helitha Praveen',
    'Microservices',
  ],
  authors: [{ name: 'Helitha Praveen' }],
  verification: {
    google: '_bfioFZ1vgE1nFROvfyzLOJ5ZGJMqMteddMrMGxzdso',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.helithasri.dev/',
    title: 'Helitha Praveen — Backend Software Engineer',
    description:
      'Backend engineer with 3+ years in fintech and payment systems. Java, Spring Boot, REST APIs, Microservices. Based in Colombo, Sri Lanka. Open to full-time and freelance roles.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Helitha Praveen — Backend Software Engineer',
      },
    ],
    siteName: 'Helitha Praveen Portfolio',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Helitha Praveen — Backend Software Engineer',
    description:
      'Backend engineer with 3+ years in fintech and payment systems. Java, Spring Boot, REST APIs. Open to full-time and freelance roles.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/hp_logo.svg',
    apple: '/hp_logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <JsonLd />
        {children}
        {process.env.NODE_ENV === 'production' && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
        )}
      </body>
    </html>
  );
}

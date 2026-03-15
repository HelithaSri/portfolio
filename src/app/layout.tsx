import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Helitha Praveen — Backend Software Engineer',
  description:
    'Backend Software Engineer specializing in Java, Spring Boot, Fintech APIs, and Microservices. Based in Colombo, Sri Lanka — remote-ready.',
  keywords: [
    'Helitha Praveen',
    'Backend Engineer',
    'Java',
    'Spring Boot',
    'Fintech',
    'Microservices',
    'Sri Lanka',
  ],
  authors: [{ name: 'Helitha Praveen' }],
  openGraph: {
    title: 'Helitha Praveen — Backend Software Engineer',
    description:
      'Backend Software Engineer specializing in Java, Spring Boot, Fintech APIs & Microservices.',
    type: 'website',
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
      <body>{children}</body>
    </html>
  );
}

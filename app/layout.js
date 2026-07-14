import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-plex-sans',
  weight: ['400', '500', '600'],
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-plex-mono',
  weight: ['400', '500'],
  display: 'swap',
});

const SITE_URL = 'https://selko360.com';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Selko — Credentialing & Compliance Software for Home Health',
    template: '%s | Selko',
  },
  description:
    'Selko is home health credentialing and compliance software built inside a working therapy agency. Cred tracks licenses and expirations. Comply runs your compliance module library. One record per company.',
  keywords: [
    'home health credentialing software',
    'home health compliance software',
    'PT license tracking software',
    'OT credentialing software',
    'home health staff document management',
  ],
  openGraph: {
    title: 'Selko — Credentialing & Compliance Software for Home Health',
    description:
      'Built inside a working home health agency. Cred tracks licenses. Comply runs compliance. One record per company.',
    url: SITE_URL,
    siteName: 'Selko',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Selko — Credentialing & Compliance Software for Home Health',
    description:
      'Built inside a working home health agency. Cred tracks licenses. Comply runs compliance.',
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Selko',
  url: SITE_URL,
  description:
    'Selko builds credentialing and compliance software for home health agencies.',
  brand: {
    '@type': 'Brand',
    name: 'Selko',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {children}
      </body>
    </html>
  );
}

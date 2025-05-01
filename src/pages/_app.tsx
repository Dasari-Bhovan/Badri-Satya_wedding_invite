import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Playfair_Display, Montserrat, Great_Vibes } from 'next/font/google';
import { weddingConfig } from '@/config/wedding-config';
import Head from 'next/head';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';

// ✅ Dynamically load the GoogleTranslate component (to avoid SSR issues)
const GoogleTranslate = dynamic(() => import('@/components/sections/googleTranslate'), {
  ssr: false,
});

const primary = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-primary',
  display: 'swap',
});

const secondary = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-secondary',
  display: 'swap',
});

const decorative = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-decorative',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(function (registrations) {
        for (const registration of registrations) {
          registration.unregister();
        }
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>{`The Wedding of ${weddingConfig.couple.bride.name} & ${weddingConfig.couple.groom.name}`}</title>
        <meta
          name="description"
          content="We are getting married! Join us to celebrate our special day."
        />
        <meta
          property="og:title"
          content={`The Wedding of ${weddingConfig.couple.bride.name} & ${weddingConfig.couple.groom.name}`}
        />
        <meta
          property="og:description"
          content="We are getting married! Join us to celebrate our special day."
        />
        <meta property="og:image" content="/images/og-image.webp" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <main
        className={`${primary.variable} ${secondary.variable} ${decorative.variable} font-sans`}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}

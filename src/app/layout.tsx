import type { Metadata, Viewport } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Iheb Najjar | Software Developer',
  description:
    'Iheb Najjar — Software Developer from Tunisia. Building full-stack web applications with React, Next.js, Node.js, and modern web technologies.',
  keywords: [
    'Iheb Najjar',
    'Software Developer',
    'Full Stack Developer',
    'React',
    'Next.js',
    'Node.js',
    'Tunisia',
    'Portfolio',
    'Web Developer',
    'Frontend Developer',
  ],
  authors: [{ name: 'Iheb Najjar' }],
  creator: 'Iheb Najjar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ihebnajjar.dev',
    title: 'Iheb Najjar | Software Developer',
    description:
      'Iheb Najjar — Software Developer from Tunisia. Building full-stack web applications with React, Next.js, Node.js, and modern web technologies.',
    siteName: 'Iheb Najjar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iheb Najjar | Software Developer',
    description:
      'Iheb Najjar — Software Developer from Tunisia. Building digital experiences one idea at a time.',
    creator: '@ihebnajjar',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${sora.variable}`} suppressHydrationWarning>
      <body className="bg-[#0a0a0f] text-slate-100 font-body antialiased selection:bg-indigo-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from 'next'
import { Sora, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['400', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Kashyap Parmar | Senior Network Engineer',
  description: 'Senior Network Engineer with 5+ years of experience in OCI, Linux administration, and infrastructure automation. Specialist in network security and cloud architecture.',
  keywords: ['Network Engineer', 'Cloud Infrastructure', 'OCI', 'Terraform', 'DevOps'],
  authors: [{ name: 'Kashyap Parmar' }],
  creator: 'Kashyap Parmar',
  publisher: 'Kashyap Parmar',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kashyapparmar.dev',
    siteName: 'Kashyap Parmar Portfolio',
    title: 'Kashyap Parmar | Senior Network Engineer',
    description: 'Senior Network Engineer portfolio showcasing infrastructure and cloud projects.',
    images: [
      {
        url: 'https://kashyapparmar.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kashyap Parmar Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kashyap Parmar | Senior Network Engineer',
    description: 'Senior Network Engineer portfolio showcasing infrastructure and cloud projects.',
    creator: '@kashyapparmar',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1117' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
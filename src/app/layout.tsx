import type { Metadata } from 'next'
import { Sora, DM_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://cargafy.com.br'),
  title: {
    default: 'CargaFy — Emissor de CTe e MDFe mais rápido do Brasil',
    template: '%s | CargaFy',
  },
  description:
    'Emita CTe, MDFe e gere CIOT em segundos com automação inteligente. Suporte especializado para transportadoras. Presente em SP e SC.',
  keywords: [
    'CTe',
    'MDFe',
    'CIOT',
    'emissor CTe',
    'emissor MDFe',
    'transportadora',
    'SEFAZ',
    'documento fiscal transporte',
    'emissão em lote',
    'averbação automática',
  ],
  authors: [{ name: 'CargaFy Tecnologia' }],
  creator: 'CargaFy',
  publisher: 'CargaFy Tecnologia Ltda',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://cargafy.com.br',
    siteName: 'CargaFy',
    title: 'CargaFy — Emissor de CTe e MDFe mais rápido do Brasil',
    description:
      'Emita CTe, MDFe e gere CIOT em segundos com automação inteligente. Suporte especializado para transportadoras.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'CargaFy - Plataforma de emissão fiscal' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CargaFy — Emissor de CTe e MDFe mais rápido do Brasil',
    description: 'Emita CTe, MDFe e gere CIOT em segundos com automação inteligente.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://cargafy.com.br',
  },
  icons: {
    icon: '/images/logo_cargafy.ico',
    shortcut: '/images/logo_cargafy.ico',
    apple: '/images/logo_cargafy.jpg',
  },
  verification: {
    google: '0fdi7AL-XzBoY6RUBBH_lblyjdQElah2gsEvW2UoxmM',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'CargaFy',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Emissor de CTe, MDFe e CIOT para transportadoras brasileiras.',
  url: 'https://cargafy.com.br',
  author: {
    '@type': 'Organization',
    name: 'CargaFy Tecnologia Ltda',
    url: 'https://cargafy.com.br',
    contactPoint: [
      { '@type': 'ContactPoint', telephone: '+55-11-99459-9115', contactType: 'sales', areaServed: 'BR', availableLanguage: 'Portuguese' },
    ],
    address: [
      { '@type': 'PostalAddress', addressLocality: 'São Caetano do Sul', addressRegion: 'SP', addressCountry: 'BR' },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${sora.variable} ${dmSans.variable} font-body text-slate-800 dark:text-slate-200 bg-white dark:bg-surface-dark antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

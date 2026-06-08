import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.germanreynoso.dev'

const title =
  'Germán Reynoso — Desarrollo Web, Automatización con IA y SaaS'
const description =
  'Ayudo a empresas y organismos a digitalizar procesos, automatizar tareas y construir productos web escalables. Plataformas web, automatizaciones con IA y soluciones SaaS con resultados medibles.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    'Germán Reynoso',
    'Full Stack Developer',
    'Desarrollador Argentina',
    'Inteligencia Artificial',
    'Automatización',
    'SaaS',
    'Next.js',
    'React',
  ],
  authors: [{ name: 'Germán Reynoso' }],
  creator: 'Germán Reynoso',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: siteUrl,
    siteName: 'Germán Reynoso',
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@Germanreynoso',
  },
  robots: { index: true, follow: true },
  // Los íconos y la imagen Open Graph se generan automáticamente desde
  // app/icon.tsx, app/apple-icon.tsx y app/opengraph-image.tsx.
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

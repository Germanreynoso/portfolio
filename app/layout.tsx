import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
  axes: ['wdth'],
})
const jetbrains = JetBrains_Mono({
  variable: '--font-jetbrains',
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

export const viewport: Viewport = {
  themeColor: '#181f2d',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${archivo.variable} ${jetbrains.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Saltar al contenido
        </a>
        {/* Los reveals de motion serializan opacity:0 en el SSR; sin JS el sitio quedaría en blanco */}
        <noscript>
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

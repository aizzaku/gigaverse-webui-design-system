import type { Metadata } from 'next'
import { AxeDev } from '../components/axe-dev'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gigaverse UI',
  description: 'shadcn-style component library in the Gigaverse visual language.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
        />
      </head>
      <body
        className="min-h-screen bg-giga-navy text-giga-heading antialiased"
        suppressHydrationWarning
      >
        <AxeDev />
        {children}
      </body>
    </html>
  )
}

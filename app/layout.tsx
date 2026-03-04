import type { Metadata, Viewport } from 'next'
import { Fira_Code } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'HPLG Framework V5 — High-Fidelity Product Label Generation',
  description:
    'Super Prompt Formula V5: Framework para gerar imagens de produtos com labels de alta fidelidade em modelos de IA. Tipografia legivel, hierarquia estruturada, renderizacao fotorrealista.',
  generator: 'v0.app',
  authors: [{ name: 'Marcus Dev', url: 'https://marcusdev.me' }],
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
  themeColor: '#f5f0eb',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${firaCode.variable} font-mono antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

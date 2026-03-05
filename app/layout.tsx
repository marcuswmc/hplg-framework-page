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
  title: 'HPLG Framework — High-Fidelity Product Label Generation',
  description:
    'Prompt Formula V5: Framework para gerar imagens de produtos com labels de alta fidelidade em modelos de IA. Tipografia legivel, hierarquia estruturada, renderizacao fotorrealista.',
  authors: [{ name: 'Marcus Dev', url: 'https://marcusdev.me' }],
  icons: {
    icon: [
      {
        url: '/favicon.png',
      },
    ],
    apple: '/favicon.png',
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
    <html lang="pt">
      <body className={`${firaCode.variable} font-mono antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

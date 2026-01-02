import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lilylab | Research-based Beauty & Personal Care',
  description: 'The Laboratory Meets Nature. Pure, clinically-profiled botanical oils from Nova Scotia.',
}

import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased text-slate-800 bg-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <WhatsAppFloat />
        <footer className="bg-slate-50 border-t border-slate-100 py-12 mt-auto">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-slate-400 text-sm font-light">
              &copy; 2025 Lilylab. Nova Scotia, Canada.
            </p>
            <div className="mt-4 flex justify-center space-x-6 text-xs text-slate-400 uppercase tracking-widest">
              <a href="/privacy-policy" className="hover:text-slate-600">Privacy Policy</a>
              <a href="/medical-disclaimer" className="hover:text-slate-600">Medical Disclaimer</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

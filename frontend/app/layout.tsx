 import type { Metadata } from 'next'
  import { Inter, Roboto_Mono } from 'next/font/google'
 import './globals.css'
 import Navbar from '@/components/Navbar'
 import Footer from '@/components/Footer'
 import WhatsAppButton from '@/components/WhatsAppButton'
 import Providers from '@/components/Providers'

 const geistSans = Inter({ subsets: ['latin'], variable: '--font-geist-sans' })
 const geistMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Rosana Medeiros | Consultoria de Emagrecimento',
  description: 'Consultoria Online de Emagrecimento com o Método Transforme-se de Rosana Medeiros.',
  keywords: ['emagrecimento', 'consultoria', 'treino', 'alimentação', 'fitness', 'perda de peso'],
  openGraph: {
    title: 'Rosana Medeiros | Consultoria de Emagrecimento',
    description: 'Resultados reais com o Método Transforme-se.',
    type: 'website',
    url: 'https://example.com',
  }
}

 export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background`}>
        <Providers>
          <Navbar />
          <main className="min-h-[70vh] container pb-8">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  )
}

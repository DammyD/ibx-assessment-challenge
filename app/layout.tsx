import type { Metadata } from 'next'
import './globals.css'
import { Footer, Navbar } from '@/components'



export const metadata: Metadata = {
  title: 'Book Collection',
  description: 'Discover the best courses online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        <main className='relative overflow-hidden'>
        {children}
        </main>
        <Footer />
        </body>
    </html>
  )
}

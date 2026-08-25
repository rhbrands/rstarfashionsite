import './globals.css'
import Link from 'next/link'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Rstar Fashion',
  description: 'Custom fashion made for you',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold">Rstar Fashion</Link>
            <nav className="space-x-4 hidden md:block">
              <Link href="/" className="text-gray-700">Home</Link>
              <Link href="/styles" className="text-gray-700">Styles</Link>
              <Link href="/#about" className="text-gray-700">About</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t mt-12">
          <div className="container mx-auto px-6 py-8 text-sm text-gray-600">© {new Date().getFullYear()} Rstar Fashion</div>
        </footer>
      </body>
    </html>
  )
}

import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import styles from './page.module.css'
import { NextAuthProvider } from './providers'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BooksList',
  description: 'NYT best sellers list',
}

export default function RootLayout({
  children,
  session
}: {
  children: React.ReactNode
  session: any

}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <Navbar />
          <main className={styles.main}>
          <Toaster />
            {children}
          </main>
        </NextAuthProvider>
      </body>
    </html >
  )
}

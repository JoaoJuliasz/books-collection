import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import styles from './page.module.css'
import { NextAuthProvider } from './providers'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

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
          <ToastContainer position="top-right"/>
          <main className={styles.main}>
            {children}
          </main>
        </NextAuthProvider>
      </body>
    </html >
  )
}

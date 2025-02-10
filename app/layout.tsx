import NavBar from './components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Peter's Code Club",
  description: 'Part of WAD project',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />

        
        {children}
      </body>
    </html>
  )
}

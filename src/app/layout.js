import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'League Of Marvels Next',
  description: 'Prueba tecnica usando la Api de Marvel Comics',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{margin: "initial"}}>{children}</body>
    </html>
  )
}

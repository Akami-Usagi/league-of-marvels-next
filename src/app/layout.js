"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import styled from 'styled-components'

const Body = styled.body`
  margin: initial;
`

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'League Of Marvels Next',
  description: 'Prueba tecnica usando la Api de Marvel Comics',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Body className={inter.className}>{children}</Body>
    </html>
  )
}

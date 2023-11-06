import { Inter } from 'next/font/google'
import './globals.css'
import { SiteHeader } from "@/components/site-header"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Porfolio Valentin Afonso',
  description: 'Portfolio made with create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}

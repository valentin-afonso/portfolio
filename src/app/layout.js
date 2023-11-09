import { Inter } from 'next/font/google'
import '@/styles/globals.scss'
import { SiteHeader } from "@/app/ui/header/site-header"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Porfolio Valentin Afonso',
  description: 'Portfolio made with create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="layout">
          <SiteHeader />
          {children}
        </div>
      </body>
    </html>
  )
}

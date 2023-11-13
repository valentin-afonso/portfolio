import { Inter } from 'next/font/google'
import '@/styles/globals.scss'
import ThemeProvider from '@/app/providers/theme-provider'
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
          <ThemeProvider>
            <SiteHeader />
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}

import { Inter } from 'next/font/google'
import { promises as fs } from 'fs';
import '@/styles/globals.scss'
import ThemeProvider from '@/app/providers/theme-provider'
import LangProvider from '@/app/providers/lang-provider'
import { SiteHeader } from "@/app/ui/header/site-header"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Porfolio Valentin Afonso',
  description: 'Portfolio made with create next app',
}

export default async function RootLayout({ children }) {
  const file = await fs.readFile(process.cwd() + '/src/app/json/data.json', 'utf8');
  const data = JSON.parse(file);
  const dataNavigation = data.navigation
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="layout">
        <LangProvider>
          <ThemeProvider>
            <SiteHeader 
              navigation = {dataNavigation}
            />
            {children}
          </ThemeProvider>
        </LangProvider>
        </div>
      </body>
    </html>
  )
}

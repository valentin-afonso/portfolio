import React from 'react'
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import '@/styles/header/site-header.scss'

export function SiteHeader() {
  return (
    <header>
      <div className='inside'>
        <Link href = "/">
            <div className="logo">Valentin Afonso</div>
          </Link>
          <MainNav />
          <div>FR</div>
      </div>

    </header>
  )
}

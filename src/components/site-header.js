import React from 'react'
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Logo } from "@/components/svg/logo"
import { ToggleDarkMode } from "@/components/toggle-dark-mode"
import '@/styles/header/site-header.scss'

export function SiteHeader() {
  return (
    <header>
      <div className='inside'>
        <Link href = "/">
            <div className="content_left">
              <Logo />
              <ToggleDarkMode />
            </div>
          </Link>
          <MainNav />
          <div>FR</div>
      </div>

    </header>
  )
}

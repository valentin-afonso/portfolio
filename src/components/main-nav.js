import React from 'react'
import Link from "next/link"
import '@/styles/header/main-nav.scss'

export function MainNav() {
  return (
    <nav className='mainmenu'>
      <ul>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

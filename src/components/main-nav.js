import React from 'react'
import Link from "next/link"
import '@/styles/header/main-nav.scss'

export function MainNav() {
  return (
    <nav className='mainmenu'>
      <ul>
      <li>
          <Link href="#">Career</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="#">School</Link>
        </li>
        <li className='contact'>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

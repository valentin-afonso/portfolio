import React from 'react'
import '@/styles/header/main-nav.scss'
import { NavLink } from "@/app/ui/header/nav-links"

export function MainNav() {
  return (
    <nav className='mainmenu'>
      <ul>
      <li>
          <NavLink 
            name = "Career"
            href = "/"
          />
        </li>
        <li>
          <NavLink 
            name = "Projects"
            href = "/projects"
          />
        </li>
        <li>
          <NavLink 
            name = "School"
            href = "/"
          />
        </li>
        <li className='contact'>
          <NavLink 
            name = "Contact"
            href = "/contact"
          />
        </li>
      </ul>
    </nav>
  )
}

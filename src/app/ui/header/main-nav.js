import React from 'react'
import '@/styles/header/main-nav.scss'
import { NavLink } from "@/app/ui/header/nav-links"

export function MainNav(props) {
  return (
    <nav className='mainmenu'>
      <ul>
        {props.navigation.map((item) => (
            <li key={item.id}>
              <NavLink 
                name = {item.libelle.en}
                href = {item.link}
              />
            </li>
        ))}
      </ul>
    </nav>
  )
}

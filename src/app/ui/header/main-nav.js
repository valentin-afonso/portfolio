'use client'

import React from 'react'
import '@/styles/header/main-nav.scss'
import {useLangContext} from '@/app/providers/lang-provider'
import { NavLink } from "@/app/ui/header/nav-links"

export function MainNav(props) {
  const {isEn} = useLangContext()
  const lang = isEn ? 'en' : 'fr';

  return (
    <nav className='mainmenu'>
      <ul>
        {props.navigation.map((item) => (
            <li key={item.id} className={item.id === 4 ? 'contact' : ''}>
              <NavLink 
                name = {item.libelle[lang]}
                href = {item.link}
              />
            </li>
        ))}
      </ul>
    </nav>
  )
}

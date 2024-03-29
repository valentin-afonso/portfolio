'use client'

import React from 'react'
import Link from "next/link"
import { MainNav } from "@/app/ui/header/main-nav"
import { Logo } from "@/app/ui/logo"
import { ToggleDarkMode } from "@/app/ui/toggle-dark-mode"
import { ToggleLang } from "@/app/ui/toggle-lang"
// Exemple d'utilisation theme a utiliser avec use client, l'enlever si inutile dans ce component
import {useThemeContext} from '@/app/providers/theme-provider'
import '@/styles/header/site-header.scss'

export function SiteHeader(props) {
  const {isDarkmode} = useThemeContext()
  return (
    <header>
      <div className={`inside ${isDarkmode ? 'dark' : 'light'}`}>
        <Link href = "/">
            <div className="content_left">
              <Logo />
              <ToggleDarkMode />
            </div>
          </Link>
          <MainNav 
            navigation = {props.navigation}
          />
          <ToggleLang />
      </div>
    </header>
  )
}

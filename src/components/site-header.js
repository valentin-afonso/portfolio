import React from 'react'
import Link from "next/link"
import { MainNav } from "@/components/main-nav"

export function SiteHeader() {
  return (
    <header>
        <Link href = "/">
          <div class="logo">Valentin Afonso</div>
        </Link>
        <MainNav />
    </header>
  )
}

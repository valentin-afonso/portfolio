import React from 'react'
import Link from "next/link"

export function MainNav() {
  return (
    <nav>
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

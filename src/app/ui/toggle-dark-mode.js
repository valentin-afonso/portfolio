'use client';

import { useState } from 'react'
import React from 'react'

export function ToggleDarkMode() {
  const [isDarkmode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkmode)
    document.documentElement.classList.toggle('dark')
  }
  return (
    <div className='toogle_dark_mode'>
      <button
        aria-label="Toggle Dark Mode"
        className='toggle-button'
        onClick={toggleTheme}
      >
        {isDarkmode ? (
          "dark mode"
        ) : (
          "light mode"
        )}
      </button>
        <input type="checkbox" name="dark-mode"  value="dark-mode"  id="checkbox-dark-mode"/>
        <label htmlFor="checkbox-dark-mode"></label>
    </div>
  )
}

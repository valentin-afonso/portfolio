import { useThemeContext } from '@/app/providers/theme-provider';
import React from 'react'

export function ToggleDarkMode() {
  const {isDarkmode, toggleTheme} = useThemeContext();

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
    </div>
  )
}

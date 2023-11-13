'use client'
 
import { createContext, useContext, useState } from 'react'
 
export const ThemeContext = createContext({})
 
export default function ThemeProvider({ children }) {
    const [isDarkmode, setIsDarkMode] = useState(false);
   const toggleTheme = () => {
    setIsDarkMode(!isDarkmode)
    document.documentElement.classList.toggle('dark')
   }

  return (
    <ThemeContext.Provider value={{isDarkmode, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}
export const useThemeContext = () => useContext(ThemeContext);
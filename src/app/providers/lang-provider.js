'use client'
 
import { createContext, useContext, useState } from 'react'
 
export const LangContext = createContext({})
 
export default function LangProvider({ children }) {
   const [isEn, setIsEn] = useState(false);
   const toggleLang = () => {
    setIsEn(!isEn)
   }

  return (
    <LangContext.Provider value={{isEn, toggleLang}}>
        {children}
    </LangContext.Provider>
  )
}
export const useLangContext = () => useContext(LangContext);
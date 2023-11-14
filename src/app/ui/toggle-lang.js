import React from 'react'
import { useLangContext } from '@/app/providers/lang-provider';

export function ToggleLang() {
  const {isEn, toggleLang} = useLangContext();

  return (
    <div className="toggle_lang">
    <button
        aria-label="Toggle Lang"
        className='toggle-lang-button'
        onClick={toggleLang}
      >
        {isEn ? (
          "EN"
        ) : (
          "FR"
        )}
      </button>
    </div>
  )
}

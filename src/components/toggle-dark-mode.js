import React from 'react'

export function ToggleDarkMode() {
  return (
    <div className='toogle_dark_mode'>
        <input type="checkbox" name="dark-mode"  value="dark-mode"  id="checkbox-dark-mode"/>
        <label htmlFor="checkbox-dark-mode"></label>
    </div>
  )
}

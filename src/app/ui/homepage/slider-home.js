import React from 'react'
import { IntroText } from "@/app/ui/homepage/intro-text"
import { promises as fs } from 'fs';

export async function HomeSlider() {
  const file = await fs.readFile(process.cwd() + '/src/app/json/data.json', 'utf8');
  const data = JSON.parse(file);
  const dataIntro = data.bloc_slider
  
  return (
    <div className='content_text'>
        <IntroText
          data = {dataIntro}
        />
    </div>
  )
}

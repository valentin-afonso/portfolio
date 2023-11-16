'use client'

import React from 'react'
import {useLangContext} from '@/app/providers/lang-provider'

export function IntroText(props) {
  const {isEn} = useLangContext()
  const lang = isEn ? 'en' : 'fr';
  return (
    <div>
        <p>
            <span>{props.data.text_1[lang]}</span><br />
            <span className='underline'>{props.data.text_2[lang]}</span>
            <span> {props.data.text_3[lang]}</span>
            <span><strong> {props.data.text_4[lang]}</strong></span><br />
            <span>{props.data.text_5[lang]}</span>
            <span className='underline'> {props.data.text_6[lang]}</span>
            <span> {props.data.text_7[lang]}</span><br />
            <span> {props.data.text_8[lang]}</span>
            <span className='underline'> {props.data.text_9[lang]}</span>
        </p>
    </div>
  )
}

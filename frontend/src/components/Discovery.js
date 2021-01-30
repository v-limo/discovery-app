import React from 'react'
import { Section } from './Section'

export const Discovery = ({ data }) => {
  return (
    <div className='discovery'>
      {data &&
        data.sections &&
        data.sections.map((section) => (
          <Section key={section.title} {...{ section }} />
        ))}
    </div>
  )
}

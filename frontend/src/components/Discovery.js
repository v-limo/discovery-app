import React from 'react'
import { Section } from './Section'

export const Discovery = ({ data, address }) => {
  
  return (
    <div className='discovery'>
      {data &&
        data.sections &&
        data.sections.map((section) => (
          <Section key={section.title} {...{ section }} />
        ))}

      {data  && data.sections.length === 0 && (
        <p>
          No restaurants found within 1.5Kms from <strong>{address}</strong>
        </p>
      )}
    </div>
  )
}

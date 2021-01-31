import React from 'react'
import { Section } from './Section'

export const Discovery = ({ data, address }) => {
  return (
    <div className='discovery'>
      {data && data.sections && data.sections.length > 0 ? (
        data.sections.map((section) => (
          <Section key={section.title} {...{ section }} />
        ))
      ) : (
        <p>
          No restaurants found within 1.5Kms,  <strong>{address}</strong>
        </p>
      )}
    </div>
  )
}

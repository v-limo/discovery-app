import React from 'react'
import { Section } from './Section'

export const Discovery = ({ data, address }) => {
  return (
    <div className='discovery'>
      {data?.length > 0 ? (
        data?.map((section) => (
          <Section key={section.title} section={section} />
        ))
      ) : (
        <p>
          No restaurants found within 1.5Kms, <strong>{address}</strong>
        </p>
      )}
    </div>
  )
}

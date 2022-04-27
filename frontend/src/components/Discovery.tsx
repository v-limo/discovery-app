import React from 'react'

import { Box } from '@mui/material'

import { RestaurantsType } from '../types/restaurantsType'
import { Section } from './Section'

type Props = {
  restaurants: RestaurantsType
}

export const Discovery = ({ restaurants }: Props) => {
  return (
    <Box className='discovery'>
      {restaurants.sections.map((section) => (
        <Section section={section} key={section.title} />
      ))}
    </Box>
  )
}

import React from 'react'
import { Blurhash } from 'react-blurhash'

import { Box, Card, Typography } from '@mui/material'

import { RestaurantType } from '../../../backend/src/types/discoveryTypes'

type Props = {
  restaurant: RestaurantType
}

const Restaurant = ({ restaurant }: Props) => {
  const { blurhash, launch_date, location, name, online, popularity } =
    restaurant

  return (
    <Card
      sx={{
        backgroundColor: 'rgba(0,0,0,0.1)',
        mx: 'auto',
        p: 2,
        width: '95%',
      }}
    >
      <Blurhash
        hash={blurhash}
        width={300}
        height={300}
        resolutionX={32}
        resolutionY={32}
        punch={1}
      />

      <Box>
        <Typography variant='h5' component='h2'>
          {name}
        </Typography>
        <Typography variant='body1' component='p'>
          location : {location[0] + ',' + location[1]}
        </Typography>
        <Typography variant='body1' component='p'>
          {online ? 'Online' : 'Offline'}
        </Typography>
        <Typography variant='body1' component='p'>
          {popularity * 100}% popularity
        </Typography>
        <Typography variant='body1' component='p'>
          launch date : {launch_date}
        </Typography>
      </Box>
    </Card>
  )
}

export default Restaurant

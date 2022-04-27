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
        boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2)',
        m: '15px',
        border: '1px solid #e0e0e0',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <Blurhash
        hash={blurhash}
        width={400}
        height={200}
        resolutionX={32}
        resolutionY={32}
        punch={1}
      />

      <Box
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography variant='h5' component='h2'>
          {name}
        </Typography>
        <Typography variant='body1' component='p'>
          {`➡ Location : [${location[0]}, ${location[1]}]`}
        </Typography>
        <Typography
          variant='body1'
          component='p'
          color={online ? 'green' : 'red'}
        >
          ➡{online ? 'Online' : 'Offline'}
        </Typography>
        <Typography
          variant='body1'
          component='p'
          sx={{
            opacity: { popularity },
          }}
        >
          {`➡ Popularity : ${(popularity * 100).toFixed(3)}% `}
        </Typography>
        <Typography variant='body1' component='p'>
          {`➡ Launch date : ${launch_date} `}
        </Typography>
      </Box>
    </Card>
  )
}

export default Restaurant

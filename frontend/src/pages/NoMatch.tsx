import React from 'react'

import { Box, Container, Typography } from '@mui/material'

// import img from '../img/img_not_found.jpg'

const NoMatch = () => (
  <Container maxWidth='md'>
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Typography align='center' variant='body1'>
        404: The page you are looking for isn’t here
      </Typography>
      <Typography align='center' variant='subtitle2'>
        You either tried some shady route or you came here by mistake. Whichever
        it is, try using the navigation
      </Typography>
      <Box sx={{ textAlign: 'center' }}>
        <img
          alt='Under development'
          // src={img}
          // src={require('../img/img_not_found.jpg')}
          src='https://source.unsplash.com/random/400x200'
          style={{
            marginTop: 50,
            display: 'inline-block',
            maxWidth: '100%',
            width: 560,
          }}
        />
      </Box>
    </Box>
  </Container>
)

export default NoMatch

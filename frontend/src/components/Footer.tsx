import React from 'react'

import { Box, Divider, Typography } from '@mui/material'

export const Footer = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        mx: 'auto',
        display: 'flex',
        height: 'fit-content',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Divider
        sx={{
          width: '100%',
          height: '1px',
          marginTop: '10px',
          marginBottom: '10px',
          backgroundColor: '#e0e0e0',
        }}
      />

      <Typography variant='h6' gutterBottom>
        Design and developed with ❤️ by Vincent Limo
      </Typography>
      <Typography variant='body1' gutterBottom>
        &copy; Copyright 2019 - {new Date().getFullYear()} -{' '}
        <a href='https://github.com/v-limo?tab=repositories'> GitHub</a>
      </Typography>
      <Typography variant='body1' gutterBottom></Typography>
    </Box>
  )
}

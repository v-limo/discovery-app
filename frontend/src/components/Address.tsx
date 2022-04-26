import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Box } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'

import { setQuery } from '../features/restaurants/restaurantsSlice'

export const Address = () => {
  const [query, setquery] = useState('lat=60.17&lon=24.9')
  const dispatch = useDispatch()

  const handleSubmit = () => {
    console.log('submit')
  }

  useEffect(() => {
    dispatch(setQuery(query))
  }, [dispatch, query])

  return (
    <Box>
      <FormControl
        sx={{
          width: '100%',
          maxWidth: '700px',
          mx: 'auto',

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        onSubmit={handleSubmit}
      >
        <FormLabel
          sx={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            mb: '10px',
            p: '10px',
          }}
        >
          Enter your address
        </FormLabel>
        <TextField
          fullWidth
          id='text'
          type='query'
          placeholder='Your address; Asema-aukio 1, 00100 Helsinki OR Asema-aukio 1 OR 60.170975, 24.939585'
          sx={{
            border: '1px solid',
            borderColor: 'primary.main',
            mb: '10px',
          }}
          value={query}
          onChange={(e: {
            target: { value: React.SetStateAction<string> }
          }) => {
            setquery(e.target.value)
          }}
        />
      </FormControl>
    </Box>
  )
}

export default Address

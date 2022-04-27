import React, { useEffect, useState } from 'react'
import Geocode from 'react-geocode'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'

import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'

import { setQuery } from '../features/restaurants/restaurantsSlice'

export const notify = (info: string) =>
  toast.error(info, {
    position: 'bottom-left',
    duration: 3000,
  })

const Address = () => {
  const dispatch = useDispatch()

  const [address, setAddress] = useState('Asema-aukio 10, 00100 Helsinki')
  const [location, setLocation] = useState('')

  const handlesubmit = () => {
    Geocode.setLanguage('en')
    Geocode.setRegion('fi')

    Geocode.setApiKey(process.env.REACT_APP_API_KEY as string)
    if (address) {
      Geocode.fromAddress(address).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location
          setLocation(`lat=${lat}&lon=${lng}`)
        },
        (error) => {
          notify(
            `The address you entered is invalid. Check it and try again. ${error.message}`
          )
        }
      )
    }
  }

  useEffect(() => {
    if (location) {
      dispatch(setQuery(location))
    }
  }, [dispatch, location])

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Toaster />
      <FormControl
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          m: '10px',
        }}
      >
        <FormLabel
          sx={{
            width: 'fit-content',
            fontSize: '1.6rem',
            fontWeight: 'bold',
            alignSelf: 'center',
            mx: '10px',
          }}
        >
          Enter your address
        </FormLabel>
        <TextField
          sx={{
            flexGrow: 1,
          }}
          label='Address'
          variant='outlined'
          id='text'
          type='query'
          placeholder='Your address; Asema-aukio 1, 00100 Helsinki OR Asema-aukio 1 OR 60.170975, 24.939585'
          value={address}
          onChange={(e: {
            target: { value: React.SetStateAction<string> }
          }) => {
            setAddress(e.target.value)
          }}
        />

        <Button
          sx={{ mx: '20px' }}
          variant='contained'
          color='primary'
          type='submit'
          onClick={handlesubmit}
        >
          Search
        </Button>
      </FormControl>
    </Box>
  )
}

export default Address

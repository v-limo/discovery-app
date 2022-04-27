import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Box } from '@mui/material'

import Address from '../components/Address'
import { Loading } from '../components/Loading'
import Map from '../components/Map'
import { fetchRestaurants } from '../features/restaurants/restaurantsAsync'
import { selectRestaurants } from '../features/restaurants/restaurantsSlice'

const MapPage = () => {
  const { restaurants, query, loading } = useSelector(selectRestaurants)
  const dispatch = useDispatch()

  useEffect(() => {
    if (query) {
      dispatch(fetchRestaurants(query))
    }
  }, [dispatch, query])

  return (
    <Box
      maxWidth='lg'
      sx={{
        minHeight: '100vh',
        pt: '90px',
        px: '15px',
        width: '100vw',

        mx: 'auto',
      }}
    >
      <Address />
      {loading && <Loading />}
      {restaurants && <Map restaurants={restaurants} query={query} />}
    </Box>
  )
}

export default MapPage

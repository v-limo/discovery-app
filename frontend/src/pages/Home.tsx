import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Container, Typography } from '@mui/material'

import Address from '../components/Address'
import { Discovery } from '../components/Discovery'
import { Loading } from '../components/Loading'
import { fetchRestaurants } from '../features/restaurants/restaurantsAsync'
import { selectRestaurants } from '../features/restaurants/restaurantsSlice'

export const Home = () => {
  const { restaurants, query, loading } = useSelector(selectRestaurants)
  const dispatch = useDispatch()

  useEffect(() => {
    if (query) {
      dispatch(fetchRestaurants(query))
    }
  }, [dispatch, query])

  return (
    <Container
      maxWidth='lg'
      sx={{
        minHeight: '100vh',
        pt: '90px',
        px: '15px',
      }}
    >
      <Address />
      {loading && <Loading />}
      {!loading && !restaurants && query && (
        <Typography variant='h5' sx={{ textAlign: 'center' }}>
          No results found
        </Typography>
      )}
      {restaurants && <Discovery restaurants={restaurants} />}
    </Container>
  )
}

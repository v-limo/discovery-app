import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Container } from '@mui/material'

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
      className='App'
      sx={{
        minHeight: '100vh',
        maxWidth: '100vw',

        mx: 'auto',
        pt: '90px',
        px: '10px',
      }}
    >
      <Address />
      {loading && <Loading />}
      {restaurants && <Discovery restaurants={restaurants} />}
    </Container>
  )
}

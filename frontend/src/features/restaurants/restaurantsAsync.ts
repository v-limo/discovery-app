import axios from 'axios'

import { createAsyncThunk } from '@reduxjs/toolkit'

import { RestaurantsType } from '../../types/restaurantsType'

export const fetchRestaurants = createAsyncThunk(
  'restaurants/fetchRestaurants',
  async (query: string) => {
    const response = await axios.get(`/discovery?${query}`)
    const results: RestaurantsType = response.data
    return results
  }
)

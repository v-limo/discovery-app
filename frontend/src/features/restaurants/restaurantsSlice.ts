import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../app/store'
import { RestaurantsType } from '../../types/restaurantsType'
import { fetchRestaurants } from './restaurantsAsync'

type restaurantsState = {
  restaurants: RestaurantsType | null
  error: string | null
  query: string | null
  loading: boolean
}

const initialState = {
  restaurants: null,
  error: null,
  loading: false,
  query: null,
} as restaurantsState

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    },
    setRestaurants: (state, action: PayloadAction<RestaurantsType>) => {
      state.restaurants = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchRestaurants.fulfilled, (state, { payload }) => {
      state.restaurants = payload
      state.error = null
      state.loading = false
    })
    builder.addCase(fetchRestaurants.pending, (state, { payload }) => {
      state.loading = true
    })

    builder.addCase(fetchRestaurants.rejected, (state) => {
      state.error = 'Error fetching restaurants'
      state.restaurants = null
      state.loading = false
    })
  },
})

export const { setQuery } = restaurantsSlice.actions
export const selectRestaurants = (state: RootState) => state.restaurants
export default restaurantsSlice.reducer

import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { configureStore } from '@reduxjs/toolkit'

import darkModeReducer from '../features/darkMode/darkModeSlice'
import restaurantsReducer from '../features/restaurants/restaurantsSlice'

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    restaurants: restaurantsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

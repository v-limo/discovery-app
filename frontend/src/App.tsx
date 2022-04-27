import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Paper, ThemeProvider } from '@mui/material'

import { selectDarkmode } from './features/darkMode/darkModeSlice'
import { Home } from './pages/Home'
import Layout from './pages/Layout'
import MapPage from './pages/MapPage'
import NoMatch from './pages/NoMatch'
import { darkTheme, lightTheme } from './theme'

const App = () => {
  let { darkMode: mode } = useSelector(selectDarkmode)
  const theme = mode ? darkTheme : lightTheme

  axios.defaults.baseURL =
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_API_URL
      : 'http://localhost:5000/api/v1'

  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ minHeight: '100vh' }}>
        <Router>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='map' element={<MapPage />} />
              <Route path='*' element={<NoMatch />} />
            </Route>
          </Routes>
        </Router>
      </Paper>
    </ThemeProvider>
  )
}

export default App

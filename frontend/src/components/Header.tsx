import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { Box, Button } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

import { selectDarkmode, toggleDarkMode } from '../features/darkMode/darkModeSlice'

export default function Bar() {
  let { darkMode } = useSelector(selectDarkmode)
  let dispatch = useDispatch()
  const navigate = useNavigate()

  const navItem = {
    mx: 3,
    cursor: 'pointer',
    fontSize: '1.3rem',
    '&:hover': {
      color: 'palette.primary.light',
      borderBottom: '1px solid',
      borderBottomColor: 'palette.primary.light',
    },
  }

  return (
    <AppBar sx={{ p: '4px', backgroundColor: 'palette.primary.main' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'nowrap',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Box
          sx={{
            mx: 3,
            cursor: 'pointer',
            fontSize: '1.3rem',
            '&:hover': {
              color: 'palette.primary.light',
              borderBottom: '1px solid',
              borderBottomColor: 'palette.primary.light',
            },
          }}
          onClick={() => navigate('/')}
        >
          Home
        </Box>

        <Box sx={navItem} onClick={() => navigate('/map')}>
          Map
        </Box>
        <Button
          sx={{ p: 1, color: 'white' }}
          onClick={() => dispatch(toggleDarkMode())}
        >
          {!darkMode ? <DarkModeIcon /> : <LightModeIcon />}
        </Button>
      </Toolbar>
    </AppBar>
  )
}

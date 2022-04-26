import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import React from 'react'
import Slider from 'react-slick'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Box, Divider, Typography } from '@mui/material'

import { SectionType } from '../types/restaurantsType'
import Restaurant from './Restaurant'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  adaptiveHeight: true,
  nextArrow: <NavigateNextIcon />,
  prevArrow: <ArrowBackIosIcon />,
}

type Props = {
  section: SectionType
}

export const Section = ({ section }: Props) => {
  const { title, restaurants } = section
  return (
    <Box
      sx={{
        my: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'space-around',
      }}
    >
      <Typography variant='h4' component='h2' gutterBottom>
        {title}
      </Typography>
      <Slider {...settings} >
        {restaurants &&
          restaurants.map((restaurant) => (
            <Restaurant restaurant={restaurant} key={restaurant.blurhash} />
          ))}
      </Slider>
      <Divider sx={{ my: '30px', display: 'flex'}}/>
    </Box>
  )
}

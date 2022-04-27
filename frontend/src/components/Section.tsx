import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import React from 'react'
import Slider from 'react-slick'

import { Box, Divider, Typography } from '@mui/material'

import { SectionType } from '../types/restaurantsType'
import Restaurant from './Restaurant'

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  adaptiveHeight: true,
  // nextArrow: <NavigateNextIcon color='secondary' fontSize='large' />,
  // prevArrow: <NavigateBeforeIcon color='secondary' fontSize='large' />,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

type Props = {
  section: SectionType
}

export const Section = ({ section }: Props) => {
  const { title, restaurants } = section
  return (
    <Box
      sx={{
        my: '12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'space-around',
      }}
    >
      {restaurants && restaurants.length > 0 && (
        <>
          <Divider
            sx={{
              width: '100%',
              height: '10px',
              m: '10px',
            }}
          />
          <Typography variant='h4' component='h2' gutterBottom>
            {`${title} (${restaurants?.length})`}
          </Typography>
          <Slider {...settings}>
            {restaurants &&
              restaurants.map((restaurant) => (
                <Restaurant restaurant={restaurant} key={restaurant.blurhash} />
              ))}
          </Slider>
        </>
      )}
    </Box>
  )
}

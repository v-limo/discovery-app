import React from 'react'
import Restaurant from './Restaurant'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
// fade: true,
  
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export const Section = ({ section }) => {
  const { title, restaurants } = section

  return (
    <div className='section'>
      <h2>{title}</h2>
      <Slider {...settings}>
        {restaurants &&
          restaurants.map((restaurant) => <Restaurant {...{ restaurant }} />)}
      </Slider>
    

    </div>
  )
}

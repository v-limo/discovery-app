import React from 'react'
import Restaurant from './Restaurant'
import Slider from 'react-slick'

//css files for slick-carousel
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
    <div>
      <h2 style={{ color: '#009de0' }}>
        { restaurants && title && `${title} ${restaurants.length}/10`}{' '}
      </h2>
      <Slider {...settings} className='sections'>
        {restaurants &&
          restaurants.map((restaurant) => (
            <Restaurant key={restaurant.name} {...{ restaurant }} />
          ))}
      </Slider>
    </div>
  )
}

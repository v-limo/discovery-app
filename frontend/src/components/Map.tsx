import React, { memo, useState } from 'react'

import { Box, Typography } from '@mui/material'
import { Circle, GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api'

import { RestaurantsType, RestaurantType } from '../types/restaurantsType'

const containerStyle = {
  width: '100%',
  height: '100vh',
}
const options = {
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 1500,
  zIndex: 1,
}

type Props = {
  restaurants: RestaurantsType
  query: string | null
}

const Map = ({ restaurants, query }: Props) => {
  const allRestaurants: RestaurantType[] = []
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<RestaurantType | null>(null)

  restaurants?.sections.forEach((section) => {
    section?.restaurants?.forEach((restaurant) => {
      allRestaurants.push(restaurant)
    })
  })

  const centerOfallRestaurants = {
    lat:
      allRestaurants.reduce((acc, curr) => {
        return acc + curr.location[1]
      }, 0) / allRestaurants.length,
    lng:
      allRestaurants.reduce((acc, curr) => {
        return acc + curr.location[0]
      }, 0) / allRestaurants.length,
  }

  return (
    <Box>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY as string}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={centerOfallRestaurants}
          zoom={13.5}
        >
          

          <Circle center={centerOfallRestaurants} options={options} />

          {allRestaurants?.map((restaurant) => (
            <Marker
              key={Math.random()}
              title={restaurant?.name + restaurant?.popularity}
              position={{
                lat: restaurant.location[1],
                lng: restaurant.location[0],
              }}
              onMouseOver={() => {
                setSelectedRestaurant(restaurant)
              }}
              onMouseOut={() => {
                console.log('out')
                setSelectedRestaurant(null)
              }}
            />
          ))}
          {selectedRestaurant && (
            <InfoWindow
              position={{
                lat: selectedRestaurant.location[1],
                lng: selectedRestaurant.location[0],
              }}
              onCloseClick={() => {
                setSelectedRestaurant(null)
              }}
            >
              <Box>
                <Typography variant='body1' component='p'>
                  {`${selectedRestaurant.name}`}
                </Typography>
                <Typography
                  variant='body1'
                  component='p'
                  color={selectedRestaurant.online ? 'green' : 'red'}
                >
                  ➡{selectedRestaurant.online ? 'Online' : 'Offline'}
                </Typography>
                <Typography variant='body1' component='p'>
                  {`➡ Popularity : ${(
                    selectedRestaurant.popularity * 100
                  ).toFixed(3)}% `}
                </Typography>

                <Typography variant='body1' component='p'>
                  {`➡distance:  }`}
                </Typography>
              </Box>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </Box>
  )
}

export default memo(Map)

// {
//   selectedPlace !== null && (
//     <InfoWindow
//       position={{
//         lat: selectedPlace.location.lat,
//         lng: selectedPlace.location.lon,
//       }}
//       onCloseClick={() => setSelectedPlace(null)}
//     >
//
//     </InfoWindow>
//   )
// }

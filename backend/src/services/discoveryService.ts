import { getDistance } from 'geolib'
import _ from 'lodash'

import { Location, RestaurantType } from '../types/discoveryTypes'
import data from '../util/seedRestaurants'

//Closer* - (base) all close restaurants
const closer = ({ latitude, longitude }: Location) => {
  let closerRestaurants: RestaurantType[] = data.restaurants.filter(
    ({ location }) =>
      getDistance(
        {
          latitude,
          longitude,
        },
        { latitude: location[1], longitude: location[0] }
      ) < 1500
  )
  return closerRestaurants
}

//GETPOPULAR
const getPopular = (restaurants: RestaurantType[]) => {
  let [open, closed] = _.partition(restaurants, ({ online }) => online)

  let openSorted = _.sortBy(open, (o) => o.popularity).reverse()
  let closedSorted = _.sortBy(closed, (o) => o.popularity).reverse()

  return {
    title: 'Popular Restaurants',
    restaurants: [...openSorted, ...closedSorted].slice(0, 10),
  }
}

// GETNEW
const getNew = (restaurants: RestaurantType[]) => {
  let newSection = {
    title: 'New Restaurants',
    restaurants: [],
  }
  // launch_date not older than 4 months. NOTE: from 2021-01-31
  let newRestaurants = _.filter(restaurants, ({ launch_date }) => {
    return (
      (new Date('2021-01-31').getTime() - new Date(launch_date).getTime()) /
        (1000 * 3600 * 24) <
      4 * 30
    )
  })
  // partition closed and open restaurants
  let [open, closed] = _.partition(newRestaurants, ({ online }) => online)

  let openSorted = _.sortBy(open, (o) => o.launch_date).reverse()
  let closedSorted = _.sortBy(closed, (o) => o.launch_date).reverse()

  return {
    title: 'New Restaurants',
    restaurants: [...openSorted, ...closedSorted].slice(0, 10),
  }
}

// GETNEARBY
const getNearby = (
  restaurants: RestaurantType[],
  customerLocation: Location
) => {
  restaurants.forEach((restaurant) => {
    restaurant.distance = getDistance(
      {
        latitude: customerLocation.latitude,
        longitude: customerLocation.longitude,
      },
      { latitude: restaurant.location[1], longitude: restaurant.location[0] }
    )
  })

  let sortedRestaurants = _.sortBy(restaurants, (o) => o?.distance)
  let nearbyRestaurants = sortedRestaurants.map((restaurant) => {
    return _.omit(restaurant, 'distance')
  })
  let [open, closed] = _.partition(nearbyRestaurants, ({ online }) => online)

  return {
    title: 'Nearby Restaurants',
    restaurants: [...open, ...closed].slice(0, 10),
  }
}

const discovery = (customerLocation: Location) => {
  // within 1.5 kilometers
  const closerRestaurants = closer(customerLocation)

  let popular = getPopular(closerRestaurants)
  let newRestaurants = getNew(closerRestaurants)
  const nearbyRestaurants = getNearby(closerRestaurants, customerLocation)

  let restauantsFinal = {
    sections: [popular, newRestaurants, nearbyRestaurants],
  }

  return restauantsFinal
}

export default {
  discovery,
}

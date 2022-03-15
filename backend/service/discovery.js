const { getDistance, distanceConversion } = require('geolib')
const { isEmpty } = require('lodash')
const _ = require('lodash')
const data = require('../restaurants.json')

//Closer* - (base) all close restaurants
const closer = (customerLocation) => {
  // within 1.5 kilometers
  const closerRestaurants = data.restaurants.filter(
    ({ location }) => getDistance(customerLocation, location) < 1500
  )
  return closerRestaurants
}

//GETPOPULAR
const getPopular = (restaurants) => {
  let popularSection = {
    title: 'Popular Restaurants',
    restaurants: [],
  }

  let [open, closed] = _.partition(restaurants, ({ online }) => online)

  let openSorted = _.sortBy(open, (o) => o.popularity).reverse()
  let closedSorted = _.sortBy(closed, (o) => o.popularity).reverse()

  //limit to 10 restaurants
  return limitTen(openSorted, closedSorted, popularSection)
}

// GETNEW
const getNew = (restaurants) => {
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

  //partition closed and open restaurants
  let [open, closed] = _.partition(newRestaurants, ({ online }) => online)

  let openSorted = _.sortBy(open, (o) => o.launch_date).reverse()
  let closedSorted = _.sortBy(closed, (o) => o.launch_date).reverse()

  //limit to 10 restaurants
  return limitTen(openSorted, closedSorted, newSection)
}

// GETNEARBY
const getNearby = (restaurants, customerLocation) => {
  let nearbySection = {
    title: 'Nearby Restaurants',
    restaurants: [],
  }

  //add relative distance(from customer) property to each restaurant for sorting purposes
  let nearRestaurants = restaurants.map((restaurant) => {
    return {
      ...restaurant,
      distance: getDistance(customerLocation, restaurant.location),
    }
  })

  let [open, closed] = _.partition(nearRestaurants, ({ online }) => online)

  let openSorted = _.sortBy(open, (o) => o.distance)
  let closedSorted = _.sortBy(closed, (o) => o.distance)

  //limit to 10 restaurants
  return limitTen(openSorted, closedSorted, nearbySection)
}

//limit to Ten
const limitTen = (openSorted, closedSorted, section) => {
  if (openSorted.length === 10) {
    section.restaurants = openSorted
    return section
  } else if (openSorted.length > 10) {
    section.restaurants = _.take(openSorted, 10)
    return section
  } else {
    //  (openSorted + closedSorted > 0)
    section.restaurants = _.take(_.concat(openSorted, closedSorted), 10)
    return section
  }
}

module.exports = {
  closer,
  getPopular,
  getNearby,
  getNew,
}

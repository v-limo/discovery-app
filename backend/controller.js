const { getDistance, distanceConversion } = require('geolib')
const _ = require('lodash')
const data = require('./restaurants.json')

//Closer* - (base) all close restaurants
const closer = (customerLocation) => {
  // closer than 1.5 kilometers
  const closerRestaurants = data.restaurants.filter(
    ({ location }) => getDistance(customerLocation, location) < 1500
  )
  return closerRestaurants
}

//getPopular
const getPopular = (restaurants) => {
  let [open, closed] = _.partition(restaurants, ({ online }) => online === true)

  let openSorted = _.sortBy(open, (o) => o.popularity).reverse()
  let closedSorted = _.sortBy(closed, (o) => o.popularity).reverse()

return limitTen(openSorted, closedSorted)
}

// getNew
const getNew = (restaurants) => {
  // launch_date not older than 4 months.
  let newRestaurants = _.filter(restaurants, ({ launch_date }) => {
    return (
      (new Date().getTime() - new Date(launch_date).getTime()) /
        (1000 * 3600 * 24) <
      4 * 30
    )
  })
  let [open, closed] = _.partition(
    newRestaurants,
    ({ online }) => online === true
  )

  let openSorted = _.sortBy(open, (o) => o.launch_date).reverse()
  let closedSorted = _.sortBy(closed, (o) => o.launch_date).reverse()

  return limitTen(openSorted, closedSorted)
}

// getNearby
const getNearby = (restaurants, customerLocation) => {
  let nearRestaurants = restaurants.map((restaurant) => {
    return {
      ...restaurant,
      distance: getDistance(customerLocation, restaurant.location),
    }
  })

  let [open, closed] = _.partition(
    nearRestaurants,
    ({ online }) => online === true
  )

  let openSorted = _.sortBy(open, (o) => o.distance)
  let closedSorted = _.sortBy(closed, (o) => o.distance)
  return limitTen(openSorted, closedSorted)
}

const limitTen = (openSorted, closedSorted) => {
  if (openSorted.length === 10) {
    return openSorted
  } else if (openSorted.length > 10) {
    return _.take(openSorted, 10)
  } else {
    return _.take(_.concat(openSorted, closedSorted), 10)
  }
}

module.exports = {
  closer,
  getPopular,
  getNearby,
  getNew,
}

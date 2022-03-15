const {
  closer,
  getPopular,
  getNearby,
  getNew,
} = require('./../service/discovery.js')

const getDiscovery = (req, res) => {
  if (!req.query.lon || !req.query.lat) {
    res.status(400).json({
      error:
        'Bad Request : include lat and lon in the request ie  ?lat=60.167692&lon=24.964',
    })
  }
  const customerLocation = [req.query.lon, req.query.lat]

  const closerRestaurants = closer(customerLocation)
  const popularRestaurants = getPopular(closerRestaurants)
  const newRestaurants = getNew(closerRestaurants)
  const nearbyRestaurants = getNearby(closerRestaurants, customerLocation)

  let discovery = {
    sections: [],
  }

  // populate discovery && don't return empty section
  discovery.sections.push(popularRestaurants, newRestaurants, nearbyRestaurants)

  discovery = discovery.sections.filter(
    (section) => section.restaurants.length !== 0
  )

  res.status(200).json(discovery)
}

module.exports = getDiscovery

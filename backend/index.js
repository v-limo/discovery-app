const express = require('express')

const discovery_example = require('./discovery_page.json')
const { closer, getPopular, getNearby, getNew } = require('./controller.js')

const app = express()
const PORT = process.env.PORT || 3001

const morgan = require('morgan')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

let RESTAURANT_TESTING = null
///  ROUTES
// home
app.get('/', (req, res) => res.send('<h1>Welcome homepage</h1>'))

//discovery
app.get('/api/discovery', (req, res) => {
  let discovery = discovery_example
  //customer's location
  const customerLocation = [req.query.lon, req.query.lat]

  //get close restaurants
  const closerRestaurants = closer(customerLocation)
  RESTAURANT_TESTING = closerRestaurants
  //populate discovery
  discovery.sections[0].restaurants = getPopular(closerRestaurants)
  discovery.sections[1].restaurants = getNew(closerRestaurants)
  discovery.sections[2].restaurants = getNearby(
    closerRestaurants,
    customerLocation
  )

  res.json(
    discovery
    // discovery.sections[2].restaurants
    // .map(({ distance, online }) => {
    // return { distance, online }
    // })
  )
})

// LISTEN
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

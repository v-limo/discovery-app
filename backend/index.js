const express = require('express')
const morgan = require('morgan')
const _ = require('lodash')
const app = express()
const cors = require('cors')
const data = require('./restaurants.json')
const discovery_example = require('./discovery_page.json')
const PORT = 3001
app.use(cors())
app.use(express.json())


// https://github.com/woltapp/summer2021-internship
https: app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
)

let openRestaurants = data.restaurants.filter((item) => item.online === true)
let allRestaurants = data.restaurants

let discovery = discovery_example

// ******************************************
const getPopular = () => {
  let n = 1
  let sortedPopular = _.sortBy(openRestaurants, (o) => o.popularity)
  popular = sortedPopular.reverse().filter((item) => {
    if (n <= 10) {
      n++
      return item
    }
  })
  return popular
}
// ******************************************

const getNew = () => {
  let n = 1
  let sorted = _.sortBy(openRestaurants, (o) => o.launch_date)
  let newer = sorted.reverse().filter((item) => {
    if (n <= 10) {
      n++
      return item
    }
  })
  return newer
}
// ******************************************
const getNearby = () => {
  let n = 1
  let sorted = _.sortBy(openRestaurants, (o) => o.location)
  let nearer = sorted.filter((item) => {
    if (n <= 10) {
      n++
      return item
    }
  })
  return nearer
}
// ******************************************

app.get('/', (req, res) => res.send('<h1>Hello homepage</h1>'))
app.get('/api/restaurants', (req, res) => res.json(openRestaurants))
app.get('/api/discovery_example', (req, res) => res.json(discovery_example))

// popular
app.get('/api/popular', (req, res) => {
  res.json(getPopular())
})

// nearby
app.get('/api/nearby', (req, res) => res.json(getNearby()))

// New
app.get('/api/new', (req, res) => res.json(getNew()))

//Discovery
app.get('/api/discovery', (req, res) => {
  discovery.sections[0].restaurants = getPopular()
  discovery.sections[1].restaurants = getNew()
  discovery.sections[2].restaurants = getNearby()

  res.json(discovery)
})

// LISTEN
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

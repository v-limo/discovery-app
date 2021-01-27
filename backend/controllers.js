


// ******************************************
export const getPopular = () => {
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

export const getNew = () => {
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
export const getNearby = () => {
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

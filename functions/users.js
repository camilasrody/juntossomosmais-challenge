// const geolib = require('geolib')
const axios = require('axios')
const fs = require('fs')

const areas = [
  {
    name: 'especial',
    minlon: -15.411580,
    maxlon: -2.196998,
    minlat: -46.361899,
    maxlat: -34.276938
  },
  {
    name: 'especial',
    minlon: -20.000000,
    maxlon: -19.766959,
    minlat: -52.997614,
    maxlat: -44.428305
  },
  {
    name: 'normal',
    minlon: -34.016466,
    maxlon: -26.155681,
    minlat: -54.777426,
    maxlat: -46.603598
  }
]

const handler = async (event) => {
  try {
    const searchQuery = event.queryStringParameters.searchQuery || ''
    const email = event.queryStringParameters.email || ''
    const page = parseInt(event.queryStringParameters.page || '1') || 1
    const perPage = parseInt(event.queryStringParameters.perPage || '12') || 12
    const skip = perPage * page
    const regions = (event.queryStringParameters.regions || '')
    const regionsArray = regions.split(',')

    // const response = JSON.parse(fs.readFileSync('mock_users.json'))
    // const users = response.results
    const response = await axios.get('https://jsm-challenges.s3.amazonaws.com/frontend-challenge.json')
    const users = response.data.results
    let someUsers = users

    if(email.length > 0){
      const user = someUsers.filter(user => email == user.email)[0]
      return {
        statusCode: 200,
        body: JSON.stringify({user}),
        headers: {"content-type": "application/json"},
      }
    }

    if(regions.length > 0) {
      selectedAreas = areas.filter(region => {
        return regions.indexOf(region.name) >= 0
      })

      // is user on any requested regions?
      someUsers = someUsers.filter((someUser, userIndex) => {
        const {latitude, longitude} = someUser.location.coordinates

        // regions someUser is in
        const areasUserInside = selectedAreas.filter((area, areaIndex) => {
          const {minlon, maxlon, minlat, maxlat} = area
          return areIn(latitude, longitude, minlat, minlon, maxlat, maxlon)
        })

        return areasUserInside.length > 0
      })
    }

    // is user asking for trabalhoso region?
    if (regions.indexOf("trabalhoso") >= 0) {
      someUsers = someUsers.filter((someUser, userIndex) => {
        const {latitude, longitude} = someUser.location.coordinates

        const usersInAllAreas = areas.reduce((result, area) => {
          const {minlon, maxlon, minlat, maxlat} = area
          if (areIn(latitude, longitude, minlat, minlon, maxlat, maxlon)) {
            result.push(someUser);
          }
          return result
        }, [])

        let usersOutside = []
        usersOutside = users.filter(user => !usersInAllAreas.find(insideUser => {
          // console.log(`${user.email} != ${insideUser.email} ` + (user.email != insideUser.email ? 'sim' : 'nao'))
          user.email == insideUser.email
        }));

        return usersOutside.length > 0
      })
    }

    // search by name
    if(searchQuery.length > 0) {
      someUsers = someUsers.filter(someUser => {
        return someUser.name.first.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
      })
    }

    // first count some users
    const pageCount = Math.ceil(someUsers.length / perPage)

    // then paginate
    if(pageCount > 1) {
      someUsers = someUsers.slice(skip, (skip + perPage))
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        results: someUsers,
        meta: {
          pageCount,
          total: someUsers.length
        }
      }),
      headers: {"content-type": "application/json"},
    }
  } catch (error) {
    return {statusCode: 500, body: error.toString()}
  }
}

function areIn(latitude, longitude, minlat, minlon, maxlat, maxlon) {
  // return geolib.isPointInPolygon(
  // return inside(
  //   [latitude, longitude], [
  //     [minlat, minlon],
  //     [maxlat, maxlon],
  //   ])
  return (latitude > minlon && latitude < maxlon &&
          longitude > minlat && longitude < maxlat)
}

function inside(point, vs) {
  // ray-casting algorithm based on
  // https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html/pnpoly.html

  var x = point[0], y = point[1];

  var inside = false;
  for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    var xi = vs[i][0], yi = vs[i][1];
    var xj = vs[j][0], yj = vs[j][1];

    var intersect = ((yi > y) != (yj > y))
      && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }

  return inside;
}

module.exports = {handler}

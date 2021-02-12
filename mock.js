const faker = require('faker')

const areas = [
  {
    name: 'especial',
    minlat: -46.361899,
    minlon: -15.411580,
    maxlat: -34.276938,
    maxlon: -2.196998
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
function getRandomInRange(from, to, fixed) {
  return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  // .toFixed() returns string, so ' * 1' is a trick to convert to number
}
const times = x => f => {
  if (x > 0) {
    f()
    times (x - 1) (f)
  }
}
let results = []
times (200) (() => {
  const user = faker.name
  const randomArea = areas[Math.floor(Math.random() * areas.length)]

  // console.log(faker)

  const randomFrom1to100 = Math.floor(Math.random() * 100) + 1

  results.push({
    gender: user.gender(),
    name: {
      title: user.prefix(),
      first: user.firstName(),
      last: user.lastName(),
      jobTitle: user.jobTitle()
    },
    location: {
      street: faker.address.streetName(),
      city: faker.address.city(),
      state: faker.address.state(),
      postcode: faker.address.zipCode(),
      coordinates: {
        latitude: getRandomInRange(randomArea.minlat, randomArea.maxlat, 3),
        longitude: getRandomInRange(randomArea.minlon, randomArea.maxlon, 3)
      },
    },
    email: faker.internet.email(),
    dob: {
      date: "1974-05-16T14:46:15Z",
      age: 5
    },
    registered: {
      date: "2013-03-06T16:09:16Z",
      age: 5
    },
    phone: faker.phone.phoneNumber,
    cell: faker.phone.phoneNumber,
    picture: {
      large: `https://randomuser.me/api/portraits/women/${randomFrom1to100}.jpg`,
      medium: `https://randomuser.me/api/portraits/med/women/${randomFrom1to100}.jpg`,
      thumbnail: `https://randomuser.me/api/portraits/thumb/women/${randomFrom1to100}.jpg`
    }
  })
})

console.log(JSON.stringify({results}))

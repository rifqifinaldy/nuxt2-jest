// store/games/games.js

const games = [
  {
    title: 'Star Wars Battlefront 2',
    console: 'PlayStation 4',
    rating: 7,
    price: 15.3,
    photo:
      'https://res.cloudinary.com/fullstackmafia/image/upload/v1604990005/SWBF2_box_or6x8s.jpg',
  },
  {
    title: 'BioShock: The Collection',
    console: 'PlayStation 4',
    rating: 9,
    price: 16.0,
    photo:
      'https://res.cloudinary.com/fullstackmafia/image/upload/v1604990078/220px-BioShock-_The_Collection_tix1ol.jpg',
  },
  {
    title: 'Call of Duty: Black Ops 4',
    console: 'PlayStation 4',
    rating: 9,
    price: 11.7,
    photo:
      'https://res.cloudinary.com/fullstackmafia/image/upload/v1604990123/220px-Call_of_Duty_Black_Ops_4_official_box_art_vvhd7w.jpg',
  },
  {
    title: "Tom Clancy's Rainbow Six: Siege",
    console: 'PlayStation 5',
    rating: 9,
    price: 13.9,
    photo:
      'https://res.cloudinary.com/fullstackmafia/image/upload/v1604990231/56c494ad88a7e300458b4d5a_qeyro6.jpg',
  },
]

const state = () => {
  return games
}

const mutations = {}
const actions = {}
const getters = {
  bestGames(state) {
    return state.filter(({ rating }) => {
      return rating === 9
    })
  },
  playstationfour(state) {
    return state.filter(({ console }) => {
      return console === 'PlayStation4'
    })
  },
  consoleType(state) {
    return (consoleName) => {
      return state.filter(({ console }) => {
        return console === consoleName
      })
    }
  },
  cheapGames(state) {
    return state.filter(({ price }) => {
      return price === 15.3
    })
  },
}

export default { state, mutations, actions, getters }

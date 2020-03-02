import { favReducer } from '../Reducers/favReducer'

it('should return the initial state if there is no state provided', () => {
  const expected = []
  const result = favReducer(undefined, [])
  expect(result).toEqual(expected)
})

it('should return the correct state if the action type is ADD_FAVORITE', () => {
  const team = { 
    name:'Best Team Ever',
    memberOne: {
      name:'Hulk', 
      powerstats: {
        Intelligence: 81,
        strength: 40,
        Speed: 29,
        Durability: 55,
        Power: 63,
        Combat: 90,
      },
      image: {url: "https://www.superherodb.com/pictures2/portraits/10/100/83.jpg"},
    },
    memberTwo: {
      name:'Thanos',
      powerstats: {
        Intelligence: 81,
        strength: 40,
        Speed: 29,
        Durability: 55,
        Power: 63,
        Combat: 90,
      },
      image: {url: "https://www.superherodb.com/pictures2/portraits/10/100/83.jpg"},
    },
    memberThree: {
      name:'Batman',
      powerstats: {
        Intelligence: 81,
        strength: 40,
        Speed: 29,
        Durability: 55,
        Power: 63,
        Combat: 90,
      },
      image: {url: "https://www.superherodb.com/pictures2/portraits/10/100/83.jpg"},
    },
    id: 123,
  }

  const mockState = [];

  const mockAction = {
    type: 'ADD_FAVORITE',
    team,
  }

  const result = favReducer(mockState, mockAction)

  const expected = [{
    name:'Best Team Ever',
    memberOne: {
      name:'Hulk', 
      powerstats: {
        Intelligence: 81,
        strength: 40,
        Speed: 29,
        Durability: 55,
        Power: 63,
        Combat: 90,
      },
      image: {url: "https://www.superherodb.com/pictures2/portraits/10/100/83.jpg"},
    },
    memberTwo: {
      name:'Thanos',
      powerstats: {
        Intelligence: 81,
        strength: 40,
        Speed: 29,
        Durability: 55,
        Power: 63,
        Combat: 90,
      },
      image: {url: "https://www.superherodb.com/pictures2/portraits/10/100/83.jpg"},
    },
    memberThree: {
      name:'Batman',
      powerstats: {
        Intelligence: 81,
        strength: 40,
        Speed: 29,
        Durability: 55,
        Power: 63,
        Combat: 90,
      },
      image: {url: "https://www.superherodb.com/pictures2/portraits/10/100/83.jpg"},
    },
    id: 123,
  }]

  expect(result).toEqual(expected)
})

it('should return the correct state if the action type is DELETE_FAVORITE', () => {
  const favorites = {
    name:'Best Team Ever',
    memberOne: {
      name:'Hulk', 
      powerstats: {
        Intelligence: 81,
        strength: 40,
        Speed: 29,
        Durability: 55,
        Power: 63,
        Combat: 90,
      },
      image: {url: "https://www.superherodb.com/pictures2/portraits/10/100/83.jpg"},
    },
    memberTwo: {
      name:'Thanos',
      powerstats: {
        Intelligence: 81,
        strength: 40,
        Speed: 29,
        Durability: 55,
        Power: 63,
        Combat: 90,
      },
      image: {url: "https://www.superherodb.com/pictures2/portraits/10/100/83.jpg"},
    },
    memberThree: {
      name:'Batman',
      powerstats: {
        Intelligence: 81,
        strength: 40,
        Speed: 29,
        Durability: 55,
        Power: 63,
        Combat: 90,
      },
      image: {url: "https://www.superherodb.com/pictures2/portraits/10/100/83.jpg"},
    },
    id: 123
  }

  const mockAction = {
    type: 'DELETE_FAVORITE',
    favorites,
  }

  const mockState = []

  const result = favReducer(mockState, mockAction)

  const expected = []

  expect(result).toEqual(expected)
})


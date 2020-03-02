import { teamReducer } from '../Reducers/teamReducer'

it('should return the initial state if there is no state provided', () => {
  const expected = {}
  const result = teamReducer(undefined, {})
  expect(result).toEqual(expected)
})

it('should return the correct state if the action type is CREATE_TEAM', () => {
  const action = {
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
  }

  const mockAction = {
    type: 'CREATE_TEAM',
    name: action.name,
    memberOne: action.memberOne,
    memberTwo: action.memberTwo,
    memberThree: action.memberThree,
  }

  const mockState = {}

  const result = teamReducer(mockState, mockAction)
  const expected = {
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
  }
  expect(result).toEqual(expected)
})

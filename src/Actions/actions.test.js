import * as actions from '../actions';

describe('actions', () => {
  it('should have a type of CREATE_TEAM', () => {
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
    }

    const expectedAction = {
    type: 'CREATE_TEAM',
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

    const result = actions.createTeam(team);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of ADD_FAVORITE', () => {
    global.Date.now = jest.fn().mockImplementation(() => 12345)
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
      id: Date.now(),
    }

    const expectedAction = {
    type: 'ADD_FAVORITE',
      team: {
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
        id: Date.now(),
      }
    }

    const result = actions.addFavorite(team);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of DELETE_FAVORITE', () => {
    const id = 7
    const expectedAction = {
      type: 'DELETE_FAVORITE',
      id: 7,
    }

    const result = actions.deleteFavorite(id)

    expect(result).toEqual(expectedAction)
  })
});

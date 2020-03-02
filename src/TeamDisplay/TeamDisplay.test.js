import React from 'react';
import { TeamDisplay } from './TeamDisplay.js'
import { shallow } from 'enzyme'
import { mapStateToProps, mapDispatchToProps } from './TeamDisplay'
import { addFavorite } from '../actions'

describe('TeamDisplay', () => {
  let wrapper;
  let mockTeam;
  beforeEach(() => {
      mockTeam = {
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
    wrapper = shallow(<TeamDisplay team={mockTeam} name={mockTeam} memberOne={mockTeam.memberOne} memberTwo={mockTeam.memberTwo} memberThree={mockTeam.memberThree} addFavorite={jest.fn()} />);
  })  
  it('should be an instance of the TeamDisplay component', () => {
      expect(wrapper).toMatchSnapshot();
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a addFavorite action when Add to Favorites button is clicked', () => {
      const mockTest = {
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
      const mockDispatch = jest.fn();
      const actionToDispatch = addFavorite(mockTest);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addFavorite(mockTest);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })

  describe('mapStateToProps', () => {
    it('should return an object with an array of movies', () => {
      const mockState = {
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
          id: 123,
        },
        name: 'Best Team Ever',
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
      
      const expected = {
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
          id: 123,
        },
        name: 'Best Team Ever',
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
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected)
    })
  })
})

import React from 'react';
import { FavTeamDisplay } from './FavTeamDisplay.js';
import { shallow } from 'enzyme'

describe('FavTeamDisplay', () => {
  let wrapper;
  let expectedProps;

  beforeEach(() => {
    expectedProps = {
      location: {
      state: { 
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
        }
      }
    }
  }
    wrapper = shallow(<FavTeamDisplay {...expectedProps} />);
  })  
  it('should be an instance of the FavTeamDisplay component', () => {
      expect(wrapper).toMatchSnapshot();
  });
})

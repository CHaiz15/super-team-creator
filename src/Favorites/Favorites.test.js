import React from 'react';
import { Favorites} from './Favorites.js';
import { shallow } from 'enzyme'

describe('Favorites', () => {
  let wrapper;
  let mockFavorites;
  beforeEach(() => {
      mockFavorites = [{
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
    wrapper = shallow(<Favorites favorites={mockFavorites}/>);
  })  
  it('should be an instance of the Favorites component', () => {
      expect(wrapper).toMatchSnapshot();
  });
})

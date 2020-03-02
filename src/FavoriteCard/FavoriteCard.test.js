import React from 'react';
import { FavoriteCard } from './FavoriteCard.js';
import { shallow } from 'enzyme'

describe('FavoriteCard', () => {
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
    wrapper = shallow(<FavoriteCard key={mockTeam.id} team={mockTeam} deleteFavorite={jest.fn()}/>);
  })  
  it('should be an instance of the FavoriteCard component', () => {
      expect(wrapper).toMatchSnapshot();
  });
})

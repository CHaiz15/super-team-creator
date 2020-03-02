import React from 'react'
import { CreationZone } from './CreationZone'
import { shallow } from 'enzyme'
import { mapDispatchToProps } from './CreationZone'
import { createTeam } from '../actions'

describe('CreationZone', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CreationZone/>);
  })  
  it('should be an instance of the CreationZone component', () => {
      expect(wrapper).toMatchSnapshot();
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a createTeam action when fetchMembers is called', () => {
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
      }
      const mockDispatch = jest.fn();
      const actionToDispatch = createTeam(mockTest);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.createTeam(mockTest);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
})

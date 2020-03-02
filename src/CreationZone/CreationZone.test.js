import React from 'react'
import { CreationZone } from './CreationZone'
import { shallow } from 'enzyme'
import { mapDispatchToProps } from './CreationZone'
import { createTeam } from '../actions'
import { getMember } from '../apiCalls'

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
        const mockDispatch = jest.fn()
        const actionToDispatch = createTeam(mockTest)

        const mappedProps = mapDispatchToProps(mockDispatch)
        mappedProps.createTeam(mockTest)

        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
      })

      describe('CreationZone React tests', () => {
      it('should start with default state values', () => {
        expect(wrapper.state('name')).toEqual('')
        expect(wrapper.state('memberOne')).toEqual('')
        expect(wrapper.state('memberTwo')).toEqual('')
        expect(wrapper.state('memberThree')).toEqual('')
      })

      it('should call handleChange method', () => {
        const mockEvent = {
          preventDefault: jest.fn(), 
          target: {name: 'name', value: 'Best Team Ever'
        }}
        wrapper.instance().handleChange = jest.fn()
        wrapper.instance().handleChange(mockEvent)
        expect(wrapper.instance().handleChange).toHaveBeenCalled()
      })

      it('should update state.name when handleChange is called', () => {
        const mockEvent = {
          preventDefault: jest.fn(), 
          target: {name: 'name', value: 'Best Team Ever'
        }}
        const expected = 'Best Team Ever'
        wrapper.instance().handleChange(mockEvent)
        expect(wrapper.state('name')).toEqual(expected)
      })

      it('should update state.name when handleChange is called', () => {
        const mockEvent = {
          preventDefault: jest.fn(), 
          target: {name: 'name', value: 'Best Team Ever'
        }}
        const expected = 'Best Team Ever'
        wrapper.instance().handleChange(mockEvent)
        expect(wrapper.state('name')).toEqual(expected)
      })

      it('should update state.memberOne when handleChange is called', () => {
        const mockEvent = {
          preventDefault: jest.fn(), 
          target: {name: 'memberOne', value: 'Ben 10'
        }}
        const expected = 'Ben 10'
        wrapper.instance().handleChange(mockEvent)
        expect(wrapper.state('memberOne')).toEqual(expected)
      })

      it('should update state.memberTwo when handleChange is called', () => {
        const mockEvent = {
          preventDefault: jest.fn(), 
          target: {name: 'memberTwo', value: 'Thanos'
        }}
        const expected = 'Thanos'
        wrapper.instance().handleChange(mockEvent)
        expect(wrapper.state('memberTwo')).toEqual(expected)
      })

      it('should update state.memberThree when handleChange is called', () => {
        const mockEvent = {
          preventDefault: jest.fn(), 
          target: {name: 'memberThree', value: 'Hulk'
        }}
        const expected = 'Hulk'
        wrapper.instance().handleChange(mockEvent)
        expect(wrapper.state('memberThree')).toEqual(expected)
      })

      describe('CreationZone React tests', () => {
        let wrapper;
        beforeEach(() => {
          wrapper = shallow(<CreationZone/>);
        })  
      })
      
      it('should call fetchMembers when Build button is clicked', () => {
        wrapper.instance().fetchMembers = jest.fn()
        wrapper.find('NavLink').simulate('click')
        expect(wrapper.instance().fetchMembers).toHaveBeenCalled()
      })
      
      it('should return an array of ideas (HAPPY)', () => {
        let mockResponse = {response: "success",
        'results-for': "Hulk",
        results: [{
            id: 332,
            name: "Hulk",
            powerstats: {
                intelligence: "88",
                strength: "100",
                speed: "63",
                durability: "100",
                power: "98",
                combat: "85"
            },
            image: {
            url: "https://www.superherodb.com/pictures2/portraits/10/100/125.jpg"
          }
        }]
      }
        expect(getMember()).resolves.toEqual(mockResponse)
      });
    })
  })
})


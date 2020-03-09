import React from 'react';
import { MemberInfo } from './MemberInfo.js';
import { shallow } from 'enzyme'

describe('MemberInfo', () => {
  let wrapper;
  let expectedProps;
  beforeEach(() => {
    expectedProps = {
      location: {
      state: { 
        member: {
          name: "Hulk",
          powerstats: {
              intelligence: "88",
              strength: "100",
              speed: "63",
              durability: "100",
              power: "98",
              combat: "85"
          },
          biography: {
              "full-name": "Bruce Banner",
              "alter-egos": "No alter egos found.",
              aliases: [
                  "Annihilator",
                  "Captain Universe",
                  "Joe Fixit",
                  "Mr. Fixit",
                  "Mechano",
                  "Professor",
                  "Jade Jaws",
                  "Golly Green Giant"
              ],
              "place-of-birth": "Dayton, Ohio",
              "first-appearance": "Incredible Hulk #1 (May, 1962)",
              publisher: "Marvel Comics",
              alignment: "good"
          },
          appearance: {
              gender: "Male",
              race: "Human / Radiation",
              height: [
                  "8'0",
                  "244 cm"
              ],
              weight: [
                  "1400 lb",
                  "630 kg"
              ],
              "eye-color": "Green",
              "hair-color": "Green"
          },
          image: {
              url: "https://www.superherodb.com/pictures2/portraits/10/100/83.jpg"
          }
        },
      }
    }
  }
    wrapper = shallow(<MemberInfo {...expectedProps} />);
  })  
  it('should be an instance of the MemberInfo component', () => {
      expect(wrapper).toMatchSnapshot();
  });
})

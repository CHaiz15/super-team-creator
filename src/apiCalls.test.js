import { getMember } from './apiCalls'

describe('getMember', () => {
  let mockMemberName
  let mockMember
  let proxyUrl = 'https://cors-anywhere.herokuapp.com/'

  beforeEach(() => {
    mockMemberName = 'Batman'
    mockMember = {
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
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockMember)
      })
    })
  })

  it('should use fetch with url', () => {
    getMember(mockMemberName)
    expect(window.fetch).toHaveBeenCalledWith(proxyUrl + 'https://superheroapi.com/api/10222961455404600/search/Batman')
  })

  it('should return an object of batman', () => {
    expect(getMember(mockMemberName)).resolves.toEqual(mockMember)
  })

  it('should throw an error when response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(getMember(mockMemberName)).rejects.toEqual(Error('Something is not right, try again later'))
  })
})
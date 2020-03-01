export const getMember = (member) => {
  let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  return fetch(proxyUrl + `https://superheroapi.com/api/10222961455404600/search/${member}`)
  .then(res => {
    if(!res.ok) {
      throw Error('Something is not right, try again later')
    }
    return res.json()})
}
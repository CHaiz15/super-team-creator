import React from 'react'

export const FavoriteCard = ({team}) => {

  return (
    <div>
      <h2>{team.name}</h2>
      <img className='member-image' src={team.memberOne.image.url} alt='member one'/>
      <img className='member-image' src={team.memberTwo.image.url} alt='member two'/>
      <img className='member-image' src={team.memberThree.image.url} alt='member three'/>
      <button>Delete</button>
    </div>
  )
}

export default FavoriteCard
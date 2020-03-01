import React from 'react'
import { connect } from 'react-redux'
import { deleteFavorite } from '../Actions'

export const FavoriteCard = ({team, deleteFavorite}) => {
  return (
    <div>
      <h2>{team.name}</h2>
      <img className='member-image' src={team.memberOne.image.url} alt='member one'/>
      <img className='member-image' src={team.memberTwo.image.url} alt='member two'/>
      <img className='member-image' src={team.memberThree.image.url} alt='member three'/>
      <button onClick={() => deleteFavorite(team.id)}>Delete</button>
    </div>
  )
}

export const mapDispatchToProps = dispatch => ({
  deleteFavorite: id => dispatch(deleteFavorite(id)),
})

export default connect(null, mapDispatchToProps)(FavoriteCard)
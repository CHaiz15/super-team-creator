import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteFavorite } from '../Actions'
import './FavoriteCard.scss'

export const FavoriteCard = ({team, deleteFavorite}) => {

  return (
    <>
      <Link to={{pathname:'/favTeam', state: {team}}}> 
        <div className='fav-card'>
          <h2>{team.name}</h2>
          <img className='member-image' src={team.memberOne.image.url} alt='member one'/>
          <img className='member-image' src={team.memberTwo.image.url} alt='member two'/>
          <img className='member-image' src={team.memberThree.image.url} alt='member three'/>
        </div>
      </Link>
      <button onClick={() => deleteFavorite(team.id)}>Delete</button>
    </>
  )
}

export const mapDispatchToProps = dispatch => ({
  deleteFavorite: id => dispatch(deleteFavorite(id)),
})

export default connect(null, mapDispatchToProps)(FavoriteCard)
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteFavorite } from '../Actions'
import './FavoriteCard.scss'
import PropTypes from 'prop-types'

export const FavoriteCard = ({team, deleteFavorite}) => {

  return (
    <>
      <div className='fav-card'>
        <Link to={{pathname:'/favTeam', state: {team}}}> 
        <h2 className='fav-team-title'>{team.name}</h2>
        <img className='card-member-image' src={team.memberOne.image.url} alt='member one'/>
        <img className='card-member-image' src={team.memberTwo.image.url} alt='member two'/>
        <img className='card-member-image' src={team.memberThree.image.url} alt='member three'/>
        </Link>
        <button className='delete-btn' onClick={() => deleteFavorite(team.id)}>Delete</button>
      </div>
    </>
  )
}

export const mapDispatchToProps = dispatch => ({
  deleteFavorite: id => dispatch(deleteFavorite(id)),
})

export default connect(null, mapDispatchToProps)(FavoriteCard)

FavoriteCard.propTypes = {
  deleteFavorite: PropTypes.func,
}
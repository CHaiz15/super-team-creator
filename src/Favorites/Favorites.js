import React from 'react'
import './Favorites.scss'
import FavoriteCard from '../FavoriteCard/FavoriteCard'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export const Favorites = ({favorites}) => {

  const favoriteCards = favorites.map(favoriteTeam => <FavoriteCard key={favoriteTeam.id} team={favoriteTeam} />)
  return (
    <>
      <NavLink type='button' to='/create' className='creation-fav-btn'>Create</NavLink>
      <section className='fav-cards-container'>
        <h1 className='fav-title'>Favorites</h1>
        <div className='cards-container'>
          <h1 className={favorites.length === 0 ? 'no-favorites':'hidden'}>No favorites... Make some!</h1>
          {favoriteCards}
        </div>
      </section>
    </>
  )
}

export const mapStateToProps = state => ({
  favorites: state.favorites,
})

export default connect(mapStateToProps)(Favorites);

Favorites.propTypes = {
  favorites: PropTypes.array,
}


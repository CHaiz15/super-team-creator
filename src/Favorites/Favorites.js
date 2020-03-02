import React from 'react'
import './Favorites.scss'
import FavoriteCard from '../FavoriteCard/FavoriteCard'
import { connect } from 'react-redux'

export const Favorites = ({favorites}) => {
  const favoriteCards = favorites.map(favoriteTeam => <FavoriteCard team={favoriteTeam} />)
  return (
    <section className='fav-cards-container'>
      <h1 className='fav-title'>Favorites</h1>
      {favoriteCards}
    </section>
  )
}

export const mapStateToProps = state => ({
  favorites: state.favorites,
})

export default connect(mapStateToProps)(Favorites);


import React from 'react'
import './Favorites.scss'
import FavoriteCard from '../FavoriteCard/FavoriteCard'
import { connect } from 'react-redux'

export const Favorites = ({favorites}) => {

  const favoriteCards = favorites.map(favoriteTeam => <FavoriteCard key={favoriteTeam.id} team={favoriteTeam} />)
  return (
    <section className='fav-cards-container'>
      <h1 className='fav-title'>Favorites</h1>
      <h1 className={favorites.length === 0 ? 'no-favorites':'hidden'}>No favorites... Make some!</h1>
      {favoriteCards}
    </section>
  )
}

export const mapStateToProps = state => ({
  favorites: state.favorites,
})

export default connect(mapStateToProps)(Favorites);


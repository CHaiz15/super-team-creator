import React from 'react'
import './Favorites.scss'
import FavoriteCard from '../FavoriteCard/FavoriteCard'
import { connect } from 'react-redux'

export const Favorites = ({favorites}) => {
  const favoriteCards = favorites.map(favoriteTeam => <FavoriteCard team={favoriteTeam} />)
  return (
    <section>
      <h1 className='creation-title'>Favorites</h1>
      {favoriteCards}
    </section>
  )
}

export const mapStateToProps = state => ({
  favorites: state.favorites,
})

export const mapDispatchToProps = dispatch => ({
  // addFavorite: team => dispatch(addFavorite(team)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);


import React from 'react'
import './Home.scss'
import { NavLink } from 'react-router-dom'

export const Home = () => {
  return (        
    <main className="Home">
      <div>
      </div>
        <h1 className='main-title'>Super Team Creator</h1>
      <div className='instruction-box'>
        <h3 className='instructions-title'>Instructions</h3>
        <p className='instructions'>Have you ever wanted to create your own super team of heros and villians? Well now you can with the Super Team Creator! Just type in 3 of your favorite heros or villians. Give your team a heroic name and checkout what their stats are! Try all types of combinations and save your favorites!</p>
      </div>
      <NavLink type='button' to='/create' className='create-btn'>Create</NavLink>
    </main>
  )
}

export default Home;
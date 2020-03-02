import React from 'react'
import './ErrorMessage.scss'
import { NavLink } from 'react-router-dom'

export const ErrorMessage = () => {
  return (
    <>
      <h1 className='creation-title'>Error</h1>
      <section className='error-container'>
        <p className='error-box'>One of the heros/villians you entered does not exist try again.</p>
        <NavLink className='build-btn' to='/create'>Okay</NavLink>
      </section>
    </>
  )
}

export default ErrorMessage
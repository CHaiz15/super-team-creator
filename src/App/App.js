import React from 'react'
import './App.scss'
import { Route } from 'react-router-dom'
import Home from '../Home/Home.js'
import CreationZone from '../CreationZone/CreationZone'
import TeamDisplay from '../TeamDisplay/TeamDisplay'
import Favorites from '../Favorites/Favorites'
import FavTeamDisplay from '../FavTeamDisplay/FavTeamDisplay'
import MemberInfo from '../MemberInfo/MemberInfo'

export const App = () => {
  return (        
    <>
      <Route exact path='/' component={Home} />
      <Route exact path='/create' component={CreationZone} />
      <Route exact path='/team' component={TeamDisplay} />
      <Route path='/team/memberInfo' component={MemberInfo} />
      <Route exact path='/favorites' component={Favorites} />
      <Route exact path='/favTeam' component={FavTeamDisplay} />
    </>
  );
}

export default App;

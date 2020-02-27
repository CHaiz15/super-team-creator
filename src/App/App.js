import React from 'react';
import './App.scss';
import {Route } from 'react-router-dom';
import CreationZone from '../CreationZone/CreationZone.js'
import Home from '../Home/Home.js'

function App() {
  return (        
    <>
      <Route exact path='/' component={Home} />
      <Route exact path='/create' component={CreationZone} />
    </>
  );
}

export default App;

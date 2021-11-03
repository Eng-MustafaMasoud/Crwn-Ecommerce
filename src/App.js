import React from 'react'
import './app.css'

import {Route ,Switch} from 'react-router-dom'

import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage.jsx'
import ShopPage from './pages/Shop/Shop'


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path ="/" component={HomePage}/>
      <Route exact path ="/shop" component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;

import React from 'react'
import './app.css'
import HomePage from './pages/HomePage/HomePage.jsx'
import {Route ,Switch} from 'react-router-dom'




function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path ="/" component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;

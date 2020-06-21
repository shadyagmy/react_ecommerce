import React from 'react';
import {Switch,Route} from "react-router-dom";

import './App.css';
import Homepage from "./pages/homepage";

const HatsPage = (props) => {
  console.log(props)
  return (
    <div>
    <h1>Hats page</h1>
  </div>
  )

}

const HatPage = (props) => {
  console.log(props)
  return (
    <div>
    <h1> Hat {props.match.params.hatId} </h1>
  </div>
  )

}


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route  exact path='/hats' component={HatsPage}/>
        <Route  path='/hats/:hatId' component={HatPage}/>
      </Switch>
      
    </div>
  );
}

export default App;

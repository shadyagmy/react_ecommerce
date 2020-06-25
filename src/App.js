import React from 'react';
import {Switch,Route} from "react-router-dom";

import './App.css';
import Homepage from "./pages/homePage/homepage";
import ShopPage from "./pages/shop/shop";

const HatsPage = (props) => {
  // console.log(props)
  return (
    <div>
    <h1>Hats page</h1>
  </div>
  )

}



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route  exact path='/hats' component={HatsPage}/>
        <Route  path='/shop' component={ShopPage}/>
      </Switch>
      
    </div>
  );
}

export default App;

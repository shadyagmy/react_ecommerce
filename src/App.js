import React from 'react';
import {Switch,Route} from "react-router-dom";

import './App.css';
import Homepage from "./pages/homePage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUpPage from "././pages/sign-in-and-sign-up/sign-in-and-sign-up.jsx";
import {auth} from "./firebase/firebase.utils";

const HatsPage = (props) => {
  // console.log(props)
  return (
    <div>
    <h1>Hats page</h1>
  </div>
  )

}

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }

  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(user =>{
      this.setState({currentUser: user});
      console.log(user)
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route  exact path='/hats' component={HatsPage}/>
          <Route  path='/shop' component={ShopPage}/>
          <Route  path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
        
      </div>
    );
  }
}

export default App;

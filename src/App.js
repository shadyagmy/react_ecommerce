import React from 'react';
import {Switch,Route} from "react-router-dom";

import './App.css';
import Header from "./components/header/header";
import Homepage from "./pages/homePage/homepage";
import ShopPage from "./pages/shop/shop";

import SignInAndSignUpPage from "././pages/sign-in-and-sign-up/sign-in-and-sign-up.jsx";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

const HatsPage = (props) => {
  // console.log(props)
  return (
    <div>
    <h1>Hats page</h1>
  </div>
  )

}

const JacketsPage = (props) => {
  // console.log(props)
  return (
    <div>
    <h1>Hello Im jackets page !</h1>
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
    this.unsubscribeFromAuth =  auth.onAuthStateChanged( async userAuth =>{ 
      console.log("=> " + userAuth)
    
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state)
          })
        })
      } else {
        this.setState({currentUser: userAuth})
      }

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
          <Route  exact path='/jackets' component={JacketsPage}/>
          <Route  path='/shop' component={ShopPage}/>
          <Route  path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
        
      </div>
    );
  }
}

export default App;

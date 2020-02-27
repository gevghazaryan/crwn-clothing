import React from 'react';
import './App.css';


import { Switch, Route } from 'react-router-dom';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SigninAndSingupPage from "./pages/sign-in-and-sign-up-page/sing-in-and-sing-up-page.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from './firebase/firebase.util';

class App extends React.Component {
  constructor() {
    super();

    this.unsubscribeFromAuth = null;

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state )
        })
      }
      
      this.setState({currentUser: userAuth })

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route path="/shop" component={ ShopPage } />      
          <Route path="/signin" component={ SigninAndSingupPage } />        
        </Switch>
      </div>
    );
  }
}

export default App;

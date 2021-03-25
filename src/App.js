import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import { Route, route, Switch, Redirect } from "react-router-dom";
import {createStructuredSelector} from 'reselect'
import Shop from "./pages/shop/Shop.component";
import Header from "./components/header/Header.component";
import CheckoutPage from './pages/checkout/checkout.component'
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/Sign-in-and-sign-up.component"
import React from 'react';
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {connect} from "react-redux"
import { setCurrentUser } from "./redux/user/user.actions"
import {selectCurrentUser} from './redux/user/user.selector'
class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot =>{
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={()=> this.props.currentUser ? (<Redirect to="/" />) : <SignInAndSignUpPage/> } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
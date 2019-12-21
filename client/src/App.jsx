import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './App.css';

import {HomePage} from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Contact from './pages/contact/contact.component';
import {SignInAndSignUp} from './pages/sign-in-and-sign-up/sign-in-sign-up.component';

import {selectCurrentUser} from './redux/users/user.selectors';
import {checkUserSignIn} from './redux/users/user.action';

const App = ({checkUserSignIn, currentUser}) => {
  useEffect(() => {
    checkUserSignIn();
  }, [checkUserSignIn]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/contact' component={Contact} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, {checkUserSignIn})(App);
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './header.style.scss';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';

import {selectCurrentUser} from '../../redux/users/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';

const Header = ({currentUser, hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      {currentUser && currentUser.displayName && (
        <div className='option'>
          Hi, {currentUser.displayName.split(' ')[0]}!
        </div>
      )}
      <Link className='option' to='/shop'>
        shop
      </Link>
      <Link className='option' to='/contact'>
        contact
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link className='option' to='/signin'>
          Sign In
        </Link>
      )}
      <CartIcon />
      {!hidden && <CartDropdown />}
    </div>
  </div>
);

const mapDispatchToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapDispatchToProps, null)(Header);

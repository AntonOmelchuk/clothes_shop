import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';

import './header.style.scss';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

const Header = ({currentUser}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      {currentUser && currentUser.displayName && (
        <div className='option'>Hi, {currentUser.displayName.split(' ')[0]}!</div>
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
    </div>
  </div>
);

const mapDispatchToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(mapDispatchToProps, null)(Header);

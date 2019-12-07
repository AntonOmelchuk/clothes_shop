import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';

import './header.style.scss';
import {auth} from '../../firebase/firebase.utils';

export const Header = ({user}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      {user && user.displayName && (
        <div className='option'>Hi, {user.displayName.split(' ')[0]}!</div>
      )}
      <Link className='option' to='/shop'>
        shop
      </Link>
      <Link className='option' to='/contact'>
        contact
      </Link>
      {user ? (
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

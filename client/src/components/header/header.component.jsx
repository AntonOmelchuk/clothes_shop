import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from './header.style';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import {selectCurrentUser} from '../../redux/users/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {signOutStart} from '../../redux/users/user.action';

const Header = ({currentUser, hidden, signOutStart}) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      {currentUser && currentUser.displayName && (
        <OptionLink as={`div`} style={{cursor: 'auto'}}>
          Hi, {currentUser.displayName.split(' ')[0]}!
        </OptionLink>
      )}
      <OptionLink to='/shop'>shop</OptionLink>
      <OptionLink to='/contact'>contact</OptionLink>
      {currentUser ? (
        <OptionLink as={`div`} onClick={signOutStart}>
          Sign Out
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>Sign In</OptionLink>
      )}
      <CartIcon />
      {!hidden && <CartDropdown />}
    </OptionsContainer>
  </HeaderContainer>
);

const mapDispatchToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapDispatchToProps, {signOutStart})(Header);

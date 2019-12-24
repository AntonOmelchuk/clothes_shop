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
import {hideCart} from '../../redux/cart/cart.action';

const Header = ({currentUser, hidden, signOutStart, hideCart}) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo onClick={() => hideCart()} />
    </LogoContainer>
    <OptionsContainer>
      {currentUser && currentUser.displayName && (
        <OptionLink as={`div`} style={{cursor: 'auto'}}>
          Hi, {currentUser.displayName.split(' ')[0]}!
        </OptionLink>
      )}
      <OptionLink to='/shop' onClick={() => hideCart()}>
        shop
      </OptionLink>
      <OptionLink to='/contact' onClick={() => hideCart()}>
        contact
      </OptionLink>
      {currentUser ? (
        <OptionLink
          as={`div`}
          onClick={() => {
            signOutStart();
            hideCart();
          }}
        >
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

export default connect(mapDispatchToProps, {signOutStart, hideCart})(Header);

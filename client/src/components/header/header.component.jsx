import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {
  HeaderContainer,
  LogoContainer,
  OptionItem,
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

export const Header = ({currentUser, hidden, signOutStart, hideCart}) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo onClick={() => hideCart()} />
    </LogoContainer>
    <OptionsContainer>
      {currentUser && currentUser.displayName && (
        <OptionItem>Hi, {currentUser.displayName.split(' ')[0]}!</OptionItem>
      )}
      <OptionLink to='/shop' onClick={() => hideCart()}>
        shop
      </OptionLink>
      <OptionLink to='/contact' onClick={() => hideCart()}>
        contact
      </OptionLink>
      {currentUser ? (
        <OptionItem
          onClick={() => {
            signOutStart();
            hideCart();
          }}
          style={{cursor: 'pointer'}}
        >
          Sign Out
        </OptionItem>
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

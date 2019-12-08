export const addItemToCart = (cartItems, currentItem) => {
  const isExisting = cartItems.find(cartItem => cartItem.id === currentItem.id);

  if (isExisting) {
    return cartItems.map(cartItem =>
      cartItem.id === currentItem.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
    );
  }

  return [...cartItems, {...currentItem, quantity: 1}];
};

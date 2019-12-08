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

export const decreaseQuantity = (cartItems, itemId) => {
  const isExisting = cartItems.find(cartItem => cartItem.id === itemId);

  if (isExisting.quantity === 1) {
    return cartItems.filter(item => item.id !== itemId);
  }

  return cartItems.map(item =>
    item.id === itemId ? {...item, quantity: item.quantity - 1} : item
  );
};

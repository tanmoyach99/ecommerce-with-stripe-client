const storeCartItems = (cartItems) => {
  const cart = cartItems.length > 0 ? cartItems : [];
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const sumItems = (cartItems) => {
  storeCartItems(cartItems);
  return {
    itemCount: cartItems.reduce((total, prod) => total + prod.quantity, 0),
    total: cartItems.reduce(
      (total, prod) => total + prod.quantity * prod.price,
      0
    ),
  };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems),
      };
    case "INCREASE":
      const increaseIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[increaseIndex].quantity++;
      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems),
      };
    case "DECREASE":
      const decreaseIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const itemsToDecrease = state.cartItems[decreaseIndex];
      if (itemsToDecrease.quantity > 1) {
        itemsToDecrease.quantity--;
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems),
      };

    case "REMOVE_PRODUCT":
      const newCartProduct = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      return {
        ...state,
        cartItems: [...newCartProduct],
        ...sumItems(newCartProduct),
      };
    case "CLEAR_CART":
      localStorage.removeItem("cart");
      return {
        cartItems: [],
        itemCount: 0,
        total: 0,
      };
    default:
      return state;
  }
};

export default cartReducer;

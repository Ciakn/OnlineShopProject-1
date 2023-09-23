const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const CloneCart = [...state.cart];
      const index = CloneCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
        CloneCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedCloneCart = CloneCart[index];
        updatedCloneCart.quantity++;

        CloneCart[index] = updatedCloneCart;
      }

      return {
        ...state,
        cart: CloneCart,
        total: state.total +action.payload.offPrice,
      };
    }
    case "REMOVE_CART": {
      const CloneCart = [...state.cart];
      const index = CloneCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedCloneCart = CloneCart[index];
      if (updatedCloneCart.quantity === 1) {
        const filteredCarts = CloneCart.filter(
          (c) => c.id !== action.payload.id
        );

        return {
          ...state,
          cart: filteredCarts,
          total: state.total - action.payload.offPrice,
        };
      } else {
        updatedCloneCart.quantity--;
        CloneCart[index] = updatedCloneCart;
        return {
          ...state,
          cart: CloneCart,
          total: state.total - action.payload.offPrice,
        };
      }
    }
case "signUp" : {
 const CloneCart  = [...state.user]
CloneCart = true;

console.log(CloneCart);

return {
  ...state , 
  user : CloneCart
}
}
    default:
      return state;
  }
};

export default cartReducer;

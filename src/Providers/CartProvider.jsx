import { useState } from "react";
import { createContext, useReducer } from "react";
import { useContext } from "react";
import cartReducer from "./CartReducer";
const CartContext = createContext();
const CartContextDispatcher = createContext();
const initialState = {
  cart: [],
  total: 0,
  user : false,
};
console.log(initialState.user);
const CartProvider = ({children}) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
export const useCartAction = () => useContext(CartContextDispatcher);
export default CartProvider;

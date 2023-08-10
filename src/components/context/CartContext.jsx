import { createContext, useContext, useReducer, useState } from "react";

const CartContext = createContext();
const inititalState = {
  cart: [{ id: 1, name: "Cong Clothing 1", price: 599.99, quantity: 10 }],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "cart/addItem":
      return { ...state, cart: [...state.cart, action.payload] };
    case "cart/delete":
      return {
        ...state,
        cart: [...state.cart.filter((item) => item.quantity > 0)],
      };
    case "cart/decreaseQuantity":
      return {
        ...state,
        cart: [
          ...state.cart
            .map((item) =>
              item.id === action.payload
                ? {
                    ...item,
                    quantity: item.quantity > 0 ? item.quantity-- : 0,
                  }
                : item
            )
            .filter((item) => item.quantity > 0),
        ],
      };
    case "cart/addQuantity":
      return {
        ...state,
        cart: [
          ...state.cart.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity++ }
              : item
          ),
        ],
      };
    default:
      throw new Error("Unknown action event");
  }
}
function CartProvider({ children }) {
  const [{ cart }, dispatch] = useReducer(cartReducer, inititalState);
  console.log(cart);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext was used outside the provider");

  return context;
}

export { CartProvider, useCart };

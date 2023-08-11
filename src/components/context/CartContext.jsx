import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const CartContext = createContext();
const inititalState = {
  cart: [
    {
      id: 1,
      name: "Cong Clothing 1",
      price: 599.99,
      quantity: 3,
      totalPrice: 599.99 * 3,
    },
    {
      id: 2,
      name: "Cong Clothing 2",
      price: 799.02,
      quantity: 3,
      totalPrice: 799.0 * 3,
    },
  ],
  selectedCart: null,
};

function cartReducer(state, action) {
  const selected = state.cart.find((item) => item.id === action.payload);
  switch (action.type) {
    case "cart/loaded":
      return {
        ...state,
        cart: [
          ...state.cart.map((item) => {
            return {
              ...item,
              totalPrice: item.price * item.quantity,
            };
          }),
        ],
      };
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
                    quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                  }
                : item
            )
            .filter((item) => item.quantity > 0),
        ],
        selectedCart: selected,
      };
    case "cart/addQuantity":
      return {
        ...state,
        cart: [
          ...state.cart.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        ],
        selectedCart: selected,
      };
    default:
      throw new Error("Unknown action event");
  }
}
function CartProvider({ children }) {
  const [{ cart, selectedCart }, dispatch] = useReducer(
    cartReducer,
    inititalState
  );
  useEffect(() => {
    dispatch({ type: "cart/loaded" });
  }, [selectedCart?.quantity]);
  return (
    <CartContext.Provider value={{ cart, selectedCart, dispatch }}>
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

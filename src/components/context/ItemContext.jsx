import { createContext, useContext, useEffect, useReducer } from "react";
import { useCart } from "./CartContext";

const inititalState = {
  items: [
    {
      id: 1,
      name: "Cong Clothing 1",
      price: 199.99,
      quantity: 1,
      totalPrice: null,
    },
    {
      id: 2,
      name: "Cong Clothing 2",
      price: 199.99,
      quantity: 1,
      totalPrice: null,
    },
    {
      id: 3,
      name: "Cong Clothing 3",
      price: 199.99,
      quantity: 1,
      totalPrice: null,
    },
    {
      id: 4,
      name: "Cong Clothing 4",
      price: 199.99,
      quantity: 1,
      totalPrice: null,
    },
  ],
  selectedItem: null,
};

function itemReducer(state, action) {
  const selected = state.items.find(
    (item) => item.id === action.payload || action.payload?.id
  );
  switch (action.type) {
    case "item/loaded":
      return {
        ...state,
        items: [
          ...state.items.map((item) => {
            return {
              ...item,
              totalPrice: item.price * item.quantity,
            };
          }),
        ],
      };
    case "item/add":
      return {
        ...state,
        selectedItem: selected,
      };
    case "item/decq":
      return {
        ...state,
        items: [
          ...state.items
            .map((i) =>
              i.id === action.payload
                ? {
                    ...i,
                    quantity: i.quantity > 0 ? i.quantity - 1 : 0,
                  }
                : i
            )
            .filter((i) => i.quantity > 0),
        ],
        selectedItem: selected,
      };
    case "item/addq":
      return {
        ...state,
        items: [
          ...state.items.map((i) =>
            i.id === action.payload ? { ...i, quantity: i.quantity + 1 } : i
          ),
        ],
        selectedItem: selected,
      };
    default:
      throw new Error("Action is unknown");
  }
}

const ItemContext = createContext();

function ItemProvider({ children }) {
  const [{ items, selectedItem }, dispatch] = useReducer(
    itemReducer,
    inititalState
  );

  useEffect(() => {
    dispatch({ type: "item/loaded" });
  }, [items?.length]);

  return (
    <ItemContext.Provider value={{ items, selectedItem, dispatch }}>
      {children}
    </ItemContext.Provider>
  );
}

function useItem() {
  const context = useContext(ItemContext);
  if (context === undefined)
    throw new Error("ItemContext was used outside the provider.");
  return context;
}

export { ItemProvider, useItem };

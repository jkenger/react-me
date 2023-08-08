import { createContext } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  <NavigationContext.Provider>{children}</NavigationContext.Provider>;
}

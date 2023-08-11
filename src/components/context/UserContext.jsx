import { createContext, useContext, useState } from "react";
const UserContext = createContext();

// @TODO: Completely remove navigation provider to test out if it is the one causing an error.
function UserProvider({ children }) {
  const [name, setName] = useState("");
  function handleSetName(value) {
    setName((name) => value);
  }

  return (
    <UserContext.Provider value={{ name, handleSetName }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("NavigationContext was used outside the Provider");

  return context;
}

export { UserProvider, useUser };

import { createContext, useContext, useState } from "react";
import ThemeSwitcher from "../pages/ContextPages/ThemeSwitcher";
import LanguageTranslator from "../pages/ContextPages/LanguageTranslator";
import { TranslatorProvider } from "./TranslatorContext";
import AccountProfile from "../pages/ContextPages/AccountProfile";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [name, setName] = useState("");
  function handleSetName(value) {
    setName((name) => value);
  }
  const contextApi = [
    {
      link: "theme-switcher",
      element: (
        <ThemeSwitcher
          title={"🔂 Theme Switcher"}
          stacks={["React JS", "Context API", "Tailwind CSS"]}
        />
      ),
    },
    {
      link: "language-translator",
      element: (
        <TranslatorProvider>
          <LanguageTranslator
            title="🔠 Language Translator"
            stacks={["React JS", "Context API", "Tailwind CSS"]}
          />
        </TranslatorProvider>
      ),
    },
    {
      link: "account-profile",
      element: (
        <AccountProfile
          title="🧑 Account Profile"
          stacks={["React JS", "Context API", "Tailwind CSS"]}
          name={name}
        />
      ),
    },
  ];

  return (
    <NavigationContext.Provider value={{ contextApi, name, handleSetName }}>
      {children}
    </NavigationContext.Provider>
  );
}

function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined)
    throw new Error("NavigationContext was used outside the Provider");

  return context;
}

export { NavigationProvider, useNavigation };

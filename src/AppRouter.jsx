import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Main from "./components/layout/Main";
import { ThemeProvider } from "./components/context/ThemeContext";
import ThemeSwitcher from "./components/pages/ContextPages/ThemeSwitcher";
import LanguageTranslator from "./components/pages/ContextPages/LanguageTranslator";
import AllProjects from "./components/pages/ProjectPages/AllProjects";
import ContentPage from "./components/pages/ContentPage";
import { TranslatorProvider } from "./components/context/TranslatorContext";
import AccountProfile from "./components/pages/ContextPages/AccountProfile";
import { UserProvider, useNavigation } from "./components/context/UserContext";

import ShoppingCart from "./components/pages/ContextPages/ShoppingCart";
import { CartProvider } from "./components/context/CartContext";
import { ItemProvider } from "./components/context/ItemContext";
import Notification from "./components/pages/ContextPages/Notification";
import Content from "./components/pages/ContextPages/Content";
import { Toaster } from "react-hot-toast";

function AppRouter() {
  return (
    <UserProvider>
      <ItemProvider>
        <CartProvider>
          <ThemeProvider>
            <BrowserRouter>
              <Routes>
                {/* INDEX WILL SET THE URL PATH to / BUT WITH NAVIGATE, 
        ON RELOAD SET THE PATH TO THE PATH BELOW */}
                <Route
                  index
                  element={<Navigate replace to="space/projects/all" />}
                />
                <Route path="space" element={<Main />}>
                  <Route path="projects" element={<ContentPage />}>
                    <Route path="all" element={<AllProjects />} />
                    <Route />
                  </Route>
                  <Route path="context-api" element={<ContentPage />}>
                    <Route
                      path="theme-switcher"
                      element={
                        <ThemeSwitcher
                          title={"🔂 Theme Switcher"}
                          stacks={["React JS", "Context API", "Tailwind CSS"]}
                        />
                      }
                    />
                    <Route
                      path="language-translator"
                      element={
                        <TranslatorProvider>
                          <LanguageTranslator
                            title="🔠 Language Translator"
                            stacks={["React JS", "Context API", "Tailwind CSS"]}
                          />
                        </TranslatorProvider>
                      }
                    />
                    <Route
                      path="account-profile"
                      element={
                        <AccountProfile
                          title="🧑 Account Profile"
                          stacks={["React JS", "Context API", "Tailwind CSS"]}
                        />
                      }
                    />
                    <Route
                      path="shopping-cart"
                      element={
                        <ShoppingCart
                          title="🛒 Shopping Cart"
                          stacks={[
                            "React JS",
                            "Context API",
                            "Redux",
                            "Tailwind CSS",
                          ]}
                        />
                      }
                    />
                    <Route
                      path="notifications"
                      element={
                        <Content>
                          <Content.Header
                            title="🔔 Notifications"
                            stacks={[
                              "React JS",
                              "Compound Component Pattern",
                              "Context API",
                              "Tailwind CSS",
                              "React Hot Toast",
                            ]}
                          />
                          <Content.Body>
                            <Notification />
                          </Content.Body>
                          <Content.Footer />
                        </Content>
                      }
                    />
                    <Route
                      path="account-information"
                      element={
                        <Content>
                          <Content.Header
                            title="👤 Account Information"
                            stacks={[
                              "React JS",
                              "Compound Component Pattern",
                              "Context API",
                              "Tailwind CSS",
                              "React Hot Toast",
                            ]}
                          />
                          <Content.Body>
                            <Notification />
                          </Content.Body>
                          <Content.Footer />
                        </Content>
                      }
                    />
                  </Route>
                </Route>
                <Route path="*" element={<h1>404 Not Found</h1>} />
              </Routes>
            </BrowserRouter>
            <Toaster
              position="top-right"
              gutter={12}
              containerStyle={{ margin: "8px" }}
              toastOptions={{
                success: {
                  duration: 3000,
                  iconTheme: {
                    primary: "green",
                    secondary: "black",
                  },
                },
                error: {
                  duration: 5000,
                  iconTheme: {
                    primary: "orange",
                    secondary: "white",
                  },
                },

                style: {
                  fontSize: "14px",
                  maxWidth: "500px",
                  padding: "16px 24px",
                  backgroundColor: "white",
                  color: "black",
                },
              }}
            />
          </ThemeProvider>
        </CartProvider>
      </ItemProvider>
    </UserProvider>
  );
}

export default AppRouter;

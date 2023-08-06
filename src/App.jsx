import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Main from "./components/layout/Main";
import { ThemeProvider } from "./components/context/ThemeContext";
import ThemeSwitcher from "./components/pages/ContextPages/ThemeSwitcher";
import LanguageTranslator from "./components/pages/ContextPages/LanguageTranslator";
import AllProjects from "./components/pages/ProjectPages/AllProjects";
import ContentPage from "./components/pages/ContentPage";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* INDEX WILL SET THE URL PATH to / BUT WITH NAVIGATE, 
        ON RELOAD SET THE PATH TO THE PATH BELOW */}
          <Route index element={<Navigate replace to="space/projects/all" />} />
          <Route path="space" element={<Main />}>
            <Route path="projects" element={<ContentPage />}>
              <Route path="all" element={<AllProjects />} />
              <Route />
            </Route>
            <Route path="context-api" element={<ContentPage />}>
              <Route path="theme-switcher" element={<ThemeSwitcher />} />
              <Route
                path="language-translator"
                element={<LanguageTranslator />}
              />
            </Route>
          </Route>
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

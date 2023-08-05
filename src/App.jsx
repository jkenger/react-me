import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Main from "./components/layout/Main";
import ProjectsPage from "./components/pages/ProjectsPage";
import ContextPage from "./components/pages/ContextPage";
import { ThemeProvider, useTheme } from "./components/context/ThemeContext";
import ThemeSwitcher from "./components/pages/ContextPages/ThemeSwitcher";
import LanguageTranslator from "./components/pages/ContextPages/LanguageTranslator";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* INDEX WILL SET THE URL PATH to / BUT WITH NAVIGATE, 
        ON RELOAD SET THE PATH TO THE PATH BELOW */}
          <Route index element={<Navigate replace to="/projects/all" />} />
          <Route path="projects" element={<Main />}>
            <Route path="all" element={<ProjectsPage />} />
            <Route path="context-api" element={<ContextPage />}>
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

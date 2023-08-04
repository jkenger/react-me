import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Main from "./components/layout/Main";
import Projects from "./components/pages/Projects";
import Context from "./components/pages/Context";
import { ThemeProvider } from "./components/context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* INDEX WILL SET THE URL PATH to / BUT WITH NAVIGATE, 
        ON RELOAD SET THE PATH TO THE PATH BELOW */}
          <Route index element={<Navigate replace to="/projects/all" />} />
          <Route path="projects" element={<Main />}>
            <Route path="all" element={<Projects />} />
            <Route path="context-api" element={<Context />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

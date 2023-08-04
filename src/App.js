import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./components/layout/Main";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="projects"
          element={
            <Main>
              <Projects />
            </Main>
          }
        >
          <Route
            path="all"
            element={
              <Main>
                <Projects />
              </Main>
            }
          />
          <Route
            path="context-api"
            element={
              <Main>
                <Projects />
              </Main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

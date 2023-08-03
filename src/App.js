import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./components/Layout/Main";
import Content from "./components/Layout/Content";
import SidebarList from "./components/UI/Main/SidebarList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/projects/"
          element={
            <Main>
              <Content />
            </Main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

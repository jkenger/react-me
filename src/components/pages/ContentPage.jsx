import { Outlet } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function ContentPage({ children }) {
  const { dark } = useTheme();
  return (
    <div id="content" className={`${dark} px-6 py-4`}>
      {children}
      <Outlet />
    </div>
  );
}

export default ContentPage;

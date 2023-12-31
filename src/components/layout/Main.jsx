import { useTheme } from "./../context/ThemeContext";
import { usePath } from "../hooks/usePath";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import { Outlet } from "react-router-dom";

function Main({ children }) {
  const path = usePath();
  const { cardDark } = useTheme();
  return (
    <div className={`flex w-full h-screen border-collapse ${cardDark}`}>
      {/* SIDEBAR */}
      <SideNav path={path} />
      {/* NAV AND MAIN CONTENT */}
      <div className="flex flex-col w-full h-full">
        <TopNav path={path} />
        <Outlet />
        {children}
      </div>
    </div>
  );
}

export default Main;

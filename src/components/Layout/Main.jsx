import Sidenav from "./Sidenav";
import TopNav from "./TopNav";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function Main({ children }) {
  return (
    <div className="flex w-full h-screen border-collapse bg-zinc-50">
      {/* SIDEBAR */}
      <Sidenav />
      {/* NAV AND MAIN CONTENT */}
      <div className="flex flex-col w-full ">
        <TopNav />
        {children}
      </div>
    </div>
  );
}

export default Main;

import Sidebar from "./Sidebar";
import SidebarList from "./SidebarList";
import TopNav from "./TopNav";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function Main({ children }) {
  return (
    <div className="flex w-full h-screen border-collapse bg-zinc-50">
      {/* SIDEBAR */}
      <section
        id="nav"
        className="flex flex-col w-[400px] border border-y-0 border-l-0 border-r-gray-200"
      >
        <Sidebar styles="h-16">
          <p className="">Dashboard</p>
        </Sidebar>
        <Sidebar>
          <SidebarList
            to="/all"
            title={"Projects"}
            linkTitle={"All Projects"}
          />
        </Sidebar>
        <Sidebar>
          <SidebarList
            to="/context-api"
            title={"Context API Projects"}
            linkTitle={"Project 1"}
          />
        </Sidebar>
        <Sidebar>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="sbui-icon "
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          <p className="text-sm my-2">Logout</p>
        </Sidebar>
      </section>

      {/* NAV AND MAIN CONTENT */}
      <div className="flex flex-col w-full ">
        <TopNav />
        {children}
      </div>
    </div>
  );
}

export default Main;

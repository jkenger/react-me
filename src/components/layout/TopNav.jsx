import { Link } from "react-router-dom";
import Card from "../UI/Card";
import { useUser } from "../context/UserContext";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

function TopNav({ path }) {
  const { cardDark } = useTheme();
  const { name } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="top-nav" className="z-20 w-full">
      <div
        className={`relative flex justify-between py-4 px-6 text-left border border-l-0 border-t-0 border-b-slate-200 border-r-slate-200 h-16 ${cardDark}`}
      >
        <div id="path" className="flex items-center text-xs tracking-tight">
          {/* direct to dashboard(all projects) */}
          <span>👹 React Me</span>
          <span className="text-gray-200 mx-4 font-light">/</span>
          <span className="text-gray-500">{path.topNavTitle}</span>
        </div>

        <div
          id="cta"
          className={`flex items-center text-xs tracking-tight space-x-4`}
        >
          <div className=" profile-info flex space-x-1 hover:cursor-pointer">
            <h3>{!name ? "No name yet." : name}</h3>
            <span className="text-xs ">👇</span>
            <div className="absolute flex flex-col items-center border w-36 right-12 top-12 px-4 py-2 border-gray-400 bg-gray-50">
              <Link
                to="/space/context-api/account-profile"
                className="text-xs text-center"
              >
                🧑 Account Profile
              </Link>
            </div>
          </div>
          <button className={`${cardDark}`}>
            <span className="text-xs">🆘</span>
            <label htmlFor="" className="">
              Help
            </label>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
